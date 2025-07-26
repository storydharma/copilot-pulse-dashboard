import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const BusinessImpactSection = () => {
  const businessMetrics = [
    { 
      title: "Potential Cost Savings", 
      value: "$2.4M", 
      description: "Annual projected savings",
      trend: "+18%",
      detail: "Based on time savings analysis"
    },
    { 
      title: "ROI", 
      value: "340%", 
      description: "Return on Investment",
      trend: "+25%",
      detail: "Investment payback in 4.2 months"
    },
    { 
      title: "User Satisfaction", 
      value: "8.7/10", 
      description: "Average satisfaction score",
      trend: "+12%",
      detail: "92% would recommend Co-pilot"
    }
  ];

  const costSavingsByDepartment = [
    { department: "Development Team", savings: "$680K", percentage: 28 },
    { department: "Project Management", savings: "$520K", percentage: 22 },
    { department: "Business Analysis", savings: "$480K", percentage: 20 },
    { department: "QA/Testing", savings: "$360K", percentage: 15 },
    { department: "Documentation", savings: "$240K", percentage: 10 },
    { department: "Support", savings: "$120K", percentage: 5 }
  ];

  const satisfactionMetrics = [
    { metric: "Ease of Use", score: 9.1, color: "bg-neon-green" },
    { metric: "Time Savings", score: 8.8, color: "bg-neon-green" },
    { metric: "Output Quality", score: 8.6, color: "bg-neon-green" },
    { metric: "Learning Curve", score: 8.2, color: "bg-success" },
    { metric: "Integration", score: 7.9, color: "bg-success" },
    { metric: "Support", score: 7.6, color: "bg-warning" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Business Impact</h2>
      
      {/* Main Business Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessMetrics.map((metric) => (
          <Card key={metric.title} className="card-glow">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {metric.title}
              </h3>
              <div className="text-4xl font-bold text-neon-green mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-foreground mb-1">
                {metric.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {metric.detail}
                </span>
                <span className="text-sm text-neon-green font-medium">
                  ↗ {metric.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost Savings by Department */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-foreground">Cost Savings by Department</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {costSavingsByDepartment.map((item) => (
              <div key={item.department} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.department}</span>
                  <span className="text-neon-green font-medium">{item.savings}</span>
                </div>
                <Progress value={item.percentage * 3.33} className="h-2" />
                <div className="text-xs text-right text-muted-foreground">
                  {item.percentage}% of total savings
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* User Satisfaction Breakdown */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-foreground">User Satisfaction Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {satisfactionMetrics.map((item) => (
              <div key={item.metric} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground mb-1">
                    {item.metric}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${(item.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-lg font-bold text-neon-green">
                    {item.score}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    /10
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