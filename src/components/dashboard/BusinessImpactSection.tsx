import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useDashboard, formatCurrency } from "@/contexts/DashboardContext";

export const BusinessImpactSection = () => {
  const { data } = useDashboard();
  const businessMetrics = [
    { 
      title: "Potential Cost Savings", 
      value: formatCurrency(data.businessMetrics.costSavings), 
      description: "Annual projected savings",
      trend: "+18%",
      detail: "Based on time savings analysis"
    },
    { 
      title: "ROI", 
      value: `${data.businessMetrics.roi}%`, 
      description: "Return on Investment",
      trend: "+25%",
      detail: "Investment payback in 4.2 months"
    },
    { 
      title: "User Satisfaction", 
      value: `${data.businessMetrics.userSatisfaction}/10`, 
      description: "Average satisfaction score",
      trend: "+12%",
      detail: "92% would recommend Co-pilot"
    }
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

    </div>
  );
};