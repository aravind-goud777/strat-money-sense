import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

const BudgetOverview = () => {
  const budgetCategories = [
    {
      name: "Food & Dining",
      budgeted: 400,
      spent: 425,
      percentage: 106.3,
      status: "over",
      icon: "🍽️"
    },
    {
      name: "Transportation",
      budgeted: 200,
      spent: 180,
      percentage: 90,
      status: "good",
      icon: "🚗"
    },
    {
      name: "Entertainment",
      budgeted: 180,
      spent: 156,
      percentage: 86.7,
      status: "good",
      icon: "🎬"
    },
    {
      name: "Education",
      budgeted: 150,
      spent: 120,
      percentage: 80,
      status: "good",
      icon: "📚"
    },
    {
      name: "Shopping",
      budgeted: 100,
      spent: 75,
      percentage: 75,
      status: "good",
      icon: "🛍️"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "over": return "destructive";
      case "warning": return "warning";
      default: return "success";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "over": return <AlertCircle className="h-4 w-4" />;
      case "warning": return <AlertCircle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="gradient-card shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Budget Overview
            </CardTitle>
            <CardDescription>Track your spending against budgets</CardDescription>
          </div>
          <Button variant="financial" size="sm">
            <TrendingUp className="h-4 w-4" />
            Adjust Budgets
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {budgetCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <div>
                  <h4 className="font-medium">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    ${category.spent} of ${category.budgeted}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant={getStatusColor(category.status) as any}
                  className="flex items-center gap-1"
                >
                  {getStatusIcon(category.status)}
                  {category.percentage.toFixed(0)}%
                </Badge>
              </div>
            </div>

            <div className="space-y-1">
              <Progress 
                value={Math.min(category.percentage, 100)} 
                className="h-2"
              />
              {category.percentage > 100 && (
                <div className="text-xs text-destructive font-medium">
                  Over budget by ${(category.spent - category.budgeted).toFixed(2)}
                </div>
              )}
              {category.percentage <= 100 && (
                <div className="text-xs text-muted-foreground">
                  ${(category.budgeted - category.spent).toFixed(2)} remaining
                </div>
              )}
            </div>
          </div>
        ))}

        {/* AI Recommendation */}
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h5 className="font-medium text-primary mb-2">💡 AI Recommendation</h5>
          <p className="text-sm text-muted-foreground">
            You're overspending on dining. Try meal prepping on Sundays to save ~$80/month. 
            Your transportation budget has room - consider using saved dining money for emergency fund.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export { BudgetOverview };