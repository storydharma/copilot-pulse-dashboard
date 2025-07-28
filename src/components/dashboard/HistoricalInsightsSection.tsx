import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Settings, Ticket, FileCheck } from "lucide-react";
import { useDashboard } from "@/contexts/DashboardContext";

export const HistoricalInsightsSection = () => {
  const { data } = useDashboard();

  const documentTypes = [
    {
      type: "SOWs",
      icon: FileCheck,
      count: Math.round(data.usageStats.totalInteractions * 0.15),
      description: "Statements of Work analyzed",
      color: "text-blue-400"
    },
    {
      type: "RFPs",
      icon: FileText,
      count: Math.round(data.usageStats.totalInteractions * 0.12),
      description: "Request for Proposals processed",
      color: "text-purple-400"
    },
    {
      type: "Tickets",
      icon: Ticket,
      count: Math.round(data.usageStats.totalInteractions * 0.25),
      description: "Support tickets analyzed",
      color: "text-orange-400"
    },
    {
      type: "Configuration Files",
      icon: Settings,
      count: Math.round(data.usageStats.totalInteractions * 0.18),
      description: "Config files processed",
      color: "text-green-400"
    }
  ];

  const insights = [
    "Common implementation patterns identified across 85% of SOWs",
    "Recurring client requirements extracted from RFP analysis",
    "Frequent issue categories mapped from ticket history",
    "Configuration templates optimized based on historical data",
    "Best practices derived from successful project outcomes"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Deriving Insights from Historical Documents
        </h2>
        <p className="text-muted-foreground">
          Co-pilot analyzes vast amounts of historical documentation to provide intelligent recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {documentTypes.map((doc) => {
          const IconComponent = doc.icon;
          return (
            <Card key={doc.type} className="card-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`h-8 w-8 ${doc.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {doc.count.toLocaleString()}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{doc.type}</h3>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="text-foreground">Key Insights Extracted</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-2 neon-glow"></div>
                <p className="text-muted-foreground">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};