import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useDashboard } from "@/contexts/DashboardContext";
import { formatNumber } from "@/contexts/DashboardContext";

export const UsageSection = () => {
  const { data } = useDashboard();
  
  const usageStats = [
    { 
      title: "Daily Active Users", 
      value: formatNumber(data.usageStats.dailyActiveUsers), 
      change: "+14%", 
      lastYear: formatNumber(data.usageStats.dailyActiveUsers * 0.88)
    },
    { 
      title: "Avg Session Frequency", 
      value: `${data.usageStats.sessionFrequency}/day`, 
      change: "+12%", 
      lastYear: `${(data.usageStats.sessionFrequency * 0.89).toFixed(1)}/day`
    },
    { 
      title: "Avg Session Length", 
      value: `${data.usageStats.sessionLength}min`, 
      change: "+18%", 
      lastYear: `${Math.round(data.usageStats.sessionLength * 0.83)}min`
    },
    { 
      title: "Total Interactions", 
      value: formatNumber(data.usageStats.totalInteractions), 
      change: "+22%", 
      lastYear: formatNumber(data.usageStats.totalInteractions * 0.82)
    }
  ];

  const productUsage = data.productUsage.map(item => ({
    ...item,
    users: formatNumber(item.users)
  }));

  const topUseCases = data.useCases.map(item => ({
    ...item,
    count: formatNumber(item.count)
  }));

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