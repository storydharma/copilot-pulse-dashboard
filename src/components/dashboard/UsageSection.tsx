import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const UsageSection = () => {
  const usageStats = [
    { title: "Daily Active Users", value: "12.4K", change: "+14%", lastYear: "10.9K" },
    { title: "Avg Session Frequency", value: "8.2/day", change: "+12%", lastYear: "7.3/day" },
    { title: "Avg Session Length", value: "24min", change: "+18%", lastYear: "20min" },
    { title: "Total Interactions", value: "156K", change: "+22%", lastYear: "128K" }
  ];

  const productUsage = [
    { product: "Word", usage: 85, users: "8.2K" },
    { product: "Excel", usage: 72, users: "6.8K" },
    { product: "Outlook", usage: 68, users: "6.1K" },
    { product: "Teams", usage: 64, users: "5.9K" },
    { product: "OneNote", usage: 45, users: "4.2K" },
    { product: "Co-Pilot Agents", usage: 38, users: "3.8K" },
    { product: "Whiteboard", usage: 28, users: "2.9K" }
  ];

  const topUseCases = [
    { useCase: "Requirements Summary", count: "2.8K", percentage: 18 },
    { useCase: "User Story Generation", count: "2.4K", percentage: 15 },
    { useCase: "Test Scenario Generation", count: "2.1K", percentage: 13 },
    { useCase: "Design Document Generation", count: "1.9K", percentage: 12 },
    { useCase: "Configuration Summary", count: "1.7K", percentage: 11 },
    { useCase: "Release Checklists", count: "1.5K", percentage: 10 },
    { useCase: "Data Generation", count: "1.3K", percentage: 8 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Co-pilot Usage</h2>
      
      {/* Usage Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {usageStats.map((stat) => (
          <Card key={stat.title} className="card-glow">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {stat.title}
              </h3>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground">Last Year: {stat.lastYear}</span>
                <span className="ml-2 text-neon-green font-medium">
                  ↗ {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Usage */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-foreground">Product Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {productUsage.map((item) => (
              <div key={item.product} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.product}</span>
                  <span className="text-muted-foreground">{item.users} users</span>
                </div>
                <Progress value={item.usage} className="h-2" />
                <div className="text-xs text-right text-muted-foreground">
                  {item.usage}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Use Cases */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-foreground">Top Use Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topUseCases.map((item) => (
              <div key={item.useCase} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground mb-1">
                    {item.useCase}
                  </div>
                  <Progress value={item.percentage * 5} className="h-2" />
                </div>
                <div className="ml-4 text-right">
                  <div className="text-sm font-medium text-foreground">
                    {item.count}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};