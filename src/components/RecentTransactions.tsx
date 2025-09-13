import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      description: "Starbucks Coffee",
      amount: -5.85,
      category: "Food & Dining",
      date: "Today, 2:30 PM",
      type: "expense",
      merchant: "Starbucks #2847"
    },
    {
      id: 2,
      description: "Part-time Job Salary",
      amount: 450.00,
      category: "Income",
      date: "Today, 9:00 AM",
      type: "income",
      merchant: "Campus Bookstore"
    },
    {
      id: 3,
      description: "Uber Ride",
      amount: -12.50,
      category: "Transportation", 
      date: "Yesterday, 8:45 PM",
      type: "expense",
      merchant: "Uber Technologies"
    },
    {
      id: 4,
      description: "Netflix Subscription",
      amount: -15.99,
      category: "Entertainment",
      date: "Yesterday, 12:00 PM",
      type: "expense",
      merchant: "Netflix.com"
    },
    {
      id: 5,
      description: "Textbook Purchase",
      amount: -89.99,
      category: "Education",
      date: "2 days ago",
      type: "expense",
      merchant: "Amazon"
    },
    {
      id: 6,
      description: "Freelance Design Work",
      amount: 125.00,
      category: "Income",
      date: "3 days ago", 
      type: "income",
      merchant: "Upwork"
    }
  ];

  const getCategoryEmoji = (category: string) => {
    const emojis: { [key: string]: string } = {
      "Food & Dining": "🍽️",
      "Transportation": "🚗",
      "Entertainment": "🎬",
      "Education": "📚",
      "Shopping": "🛍️",
      "Income": "💰"
    };
    return emojis[category] || "💳";
  };

  return (
    <Card className="gradient-card shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Your latest financial activity</CardDescription>
          </div>
          <Button variant="financial" size="sm">
            <ExternalLink className="h-4 w-4" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth"
          >
            <div className="flex items-center gap-3">
              <div className="text-lg">
                {getCategoryEmoji(transaction.category)}
              </div>
              <div>
                <h4 className="font-medium text-sm">{transaction.description}</h4>
                <p className="text-xs text-muted-foreground">
                  {transaction.merchant}
                </p>
                <p className="text-xs text-muted-foreground">
                  {transaction.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-semibold ${
                transaction.type === 'income' ? 'text-success' : 'text-destructive'
              }`}>
                {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </div>
              <Badge variant="outline" className="text-xs">
                {transaction.category}
              </Badge>
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <div className="pt-4 border-t border-border space-y-2">
          <h5 className="font-medium text-sm">Quick Actions</h5>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="financial" size="sm" className="text-xs">
              Add Expense
            </Button>
            <Button variant="financial" size="sm" className="text-xs">
              Add Income
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { RecentTransactions };