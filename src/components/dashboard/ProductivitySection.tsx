import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProductivitySection = () => {
  const productivityMetrics = [
    { 
      title: "Time Saved", 
      value: "45%", 
      description: "Average time reduction per task",
      trend: "+8%",
      detail: "2.4 hours/day per user"
    },
    { 
      title: "Task Completion Speed", 
      value: "60%", 
      description: "Faster task completion",
      trend: "+12%",
      detail: "From 4.2h to 1.7h average"
    },
    { 
      title: "Error Reduction", 
      value: "38%", 
      description: "Fewer errors in outputs",
      trend: "+15%",
      detail: "From 12% to 7.4% error rate"
    }
  ];

  const timeSavedByFunction = [
    { function: "Document Generation", timeSaved: "65%", hours: "3.2h/day" },
    { function: "Data Analysis", timeSaved: "52%", hours: "2.1h/day" },
    { function: "Code Generation", timeSaved: "48%", hours: "1.9h/day" },
    { function: "Meeting Summaries", timeSaved: "71%", hours: "1.6h/day" },
    { function: "Email Drafting", timeSaved: "43%", hours: "1.3h/day" },
    { function: "Requirements Analysis", timeSaved: "39%", hours: "1.1h/day" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Productivity Improvement</h2>
      
      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productivityMetrics.map((metric) => (
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

      {/* Time Saved by Function */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="text-foreground">Time Saved by Function</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeSavedByFunction.map((item) => (
              <div key={item.function} className="p-4 rounded-lg border border-border bg-muted/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {item.function}
                  </h4>
                  <span className="text-lg font-bold text-neon-green">
                    {item.timeSaved}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.hours} saved per user
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};