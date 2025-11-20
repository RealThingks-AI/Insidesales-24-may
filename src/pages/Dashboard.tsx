import { Users, DollarSign, TrendingUp, Activity } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const recentActivities = [
    { id: 1, type: "contact", name: "John Smith", action: "New contact added", time: "2 hours ago" },
    { id: 2, type: "deal", name: "Enterprise Deal", action: "Moved to negotiation", time: "5 hours ago" },
    { id: 3, type: "contact", name: "Sarah Johnson", action: "Updated contact info", time: "1 day ago" },
    { id: 4, type: "deal", name: "Startup Package", action: "Deal closed - Won", time: "2 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your business overview.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Contacts"
          value="2,543"
          icon={Users}
          trend={{ value: "12% from last month", positive: true }}
        />
        <MetricCard
          title="Active Deals"
          value="48"
          icon={TrendingUp}
          trend={{ value: "8% from last month", positive: true }}
        />
        <MetricCard
          title="Revenue"
          value="$84,250"
          icon={DollarSign}
          trend={{ value: "23% from last month", positive: true }}
        />
        <MetricCard
          title="Activities"
          value="127"
          icon={Activity}
          trend={{ value: "3% from last month", positive: false }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                  <div className={`p-2 rounded-lg ${activity.type === 'contact' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    {activity.type === 'contact' ? (
                      <Users className="h-4 w-4 text-primary" />
                    ) : (
                      <TrendingUp className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-foreground">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pipeline Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Qualification</span>
                  <span className="font-medium">18 deals</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-chart-1 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proposal</span>
                  <span className="font-medium">12 deals</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-chart-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Negotiation</span>
                  <span className="font-medium">10 deals</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-chart-3 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Closed Won</span>
                  <span className="font-medium">8 deals</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
