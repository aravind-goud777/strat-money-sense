import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  TrendingUp, 
  Target, 
  AlertTriangle, 
  DollarSign, 
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Calendar,
  CreditCard,
  Banknote
} from "lucide-react";
import { ExpenseChart } from "./ExpenseChart";
import { BudgetOverview } from "./BudgetOverview";
import { RecentTransactions } from "./RecentTransactions";
import { GoalTracker } from "./GoalTracker";

const Dashboard = () => {
  // Mock data for demonstration
  const totalBalance = 2847.65;
  const monthlyIncome = 1200.00;
  const monthlyExpenses = 956.32;
  const budgetUsed = 79.7;
  const savingsGoal = 5000;
  const currentSavings = 2847.65;

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            FinanceFlow
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered student finance manager
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="financial" size="sm">
            <Bell className="h-4 w-4" />
            Alerts
          </Button>
          <Button variant="gradient" size="sm">
            <Target className="h-4 w-4" />
            Set Goal
          </Button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Current Balance
            </CardTitle>
            <Wallet className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              ${totalBalance.toLocaleString()}
            </div>
            <p className="text-xs text-success flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Income
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">
              ${monthlyIncome.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Part-time job + allowance
            </p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Expenses
            </CardTitle>
            <DollarSign className="h-5 w-5 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-destructive">
              ${monthlyExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-destructive flex items-center mt-1">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              +5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Budget Used
            </CardTitle>
            <PieChart className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">
              {budgetUsed}%
            </div>
            <Progress value={budgetUsed} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              ${(monthlyIncome * (budgetUsed / 100)).toFixed(2)} of ${monthlyIncome}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Alert */}
      <Card className="border-warning bg-warning/5 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            AI Budget Alert
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            <strong>Predicted overspending:</strong> Based on your current spending pattern, 
            you're likely to exceed your monthly budget by $127. Consider reducing dining out 
            expenses or finding additional income sources.
          </p>
          <div className="flex gap-2 mt-3">
            <Button variant="warning" size="sm">
              View Recommendations
            </Button>
            <Button variant="outline" size="sm">
              Adjust Budget
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Expense Analytics */}
        <div className="lg:col-span-2 space-y-6">
          <ExpenseChart />
          <BudgetOverview />
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          <GoalTracker 
            goalAmount={savingsGoal}
            currentAmount={currentSavings}
            goalName="Emergency Fund"
          />
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;