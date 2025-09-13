import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";
import { TrendingUp, PieChart as PieChartIcon } from "lucide-react";

const ExpenseChart = () => {
  // Mock expense data by category
  const expenseData = [
    { name: "Food & Dining", value: 425, percentage: 44.5, color: "#F59E0B" },
    { name: "Transportation", value: 180, percentage: 18.8, color: "#EF4444" },
    { name: "Entertainment", value: 156, percentage: 16.3, color: "#8B5CF6" },
    { name: "Education", value: 120, percentage: 12.5, color: "#10B981" },
    { name: "Shopping", value: 75, percentage: 7.8, color: "#3B82F6" },
  ];

  // Mock monthly trend data
  const monthlyTrend = [
    { month: "Jan", amount: 890 },
    { month: "Feb", amount: 1050 },
    { month: "Mar", amount: 920 },
    { month: "Apr", amount: 1100 },
    { month: "May", amount: 956 },
  ];

  return (
    <div className="space-y-6">
      {/* Expense Categories */}
      <Card className="gradient-card shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-primary" />
                Expense Categories
              </CardTitle>
              <CardDescription>Current month breakdown</CardDescription>
            </div>
            <Badge variant="secondary">May 2024</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Category List */}
            <div className="space-y-3">
              {expenseData.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">${category.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {category.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trend */}
      <Card className="gradient-card shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Spending Trend
          </CardTitle>
          <CardDescription>Monthly expenses over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyTrend} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Expenses']}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ExpenseChart };