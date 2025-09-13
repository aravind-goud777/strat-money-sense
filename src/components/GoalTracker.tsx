import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Calendar, Plus } from "lucide-react";

interface GoalTrackerProps {
  goalAmount: number;
  currentAmount: number;
  goalName: string;
}

const GoalTracker = ({ goalAmount, currentAmount, goalName }: GoalTrackerProps) => {
  const progressPercentage = (currentAmount / goalAmount) * 100;
  const remainingAmount = goalAmount - currentAmount;
  const monthsToGoal = Math.ceil(remainingAmount / 200); // Assuming $200/month savings

  // Additional goals data
  const otherGoals = [
    {
      name: "New Laptop",
      target: 1200,
      current: 450,
      priority: "high",
      deadline: "Dec 2024"
    },
    {
      name: "Study Abroad",
      target: 3500,
      current: 890,
      priority: "medium", 
      deadline: "Summer 2025"
    },
    {
      name: "Car Down Payment",
      target: 2000,
      current: 320,
      priority: "low",
      deadline: "2025"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Goal */}
      <Card className="gradient-card shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                {goalName}
              </CardTitle>
              <CardDescription>Your primary savings goal</CardDescription>
            </div>
            <Badge variant="secondary" className="text-sm">
              {progressPercentage.toFixed(1)}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">
                ${currentAmount.toLocaleString()} / ${goalAmount.toLocaleString()}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-success">
                ${currentAmount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">Saved</div>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                ${remainingAmount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">Remaining</div>
            </div>
          </div>

          {/* AI Prediction */}
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-medium text-primary text-sm">AI Prediction</span>
            </div>
            <p className="text-xs text-muted-foreground">
              At your current saving rate of $200/month, you'll reach this goal in{' '}
              <span className="font-medium text-primary">{monthsToGoal} months</span>.
              Increase by $50/month to reach it 2 months earlier!
            </p>
          </div>

          <Button variant="gradient" className="w-full" size="sm">
            <Plus className="h-4 w-4" />
            Add to Goal
          </Button>
        </CardContent>
      </Card>

      {/* Other Goals */}
      <Card className="gradient-card shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Other Goals</CardTitle>
            <Button variant="financial" size="sm">
              <Plus className="h-4 w-4" />
              New Goal
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {otherGoals.map((goal, index) => {
            const goalProgress = (goal.current / goal.target) * 100;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{goal.name}</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {goal.deadline}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={getPriorityColor(goal.priority) as any}
                      className="text-xs mb-1"
                    >
                      {goal.priority}
                    </Badge>
                    <div className="text-xs font-medium">
                      ${goal.current} / ${goal.target}
                    </div>
                  </div>
                </div>
                <Progress value={goalProgress} className="h-1" />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export { GoalTracker };
