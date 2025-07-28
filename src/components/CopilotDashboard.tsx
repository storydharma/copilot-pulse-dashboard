import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UsageSection } from "./dashboard/UsageSection";
import { ProductivitySection } from "./dashboard/ProductivitySection";
import { BusinessImpactSection } from "./dashboard/BusinessImpactSection";
import { FiltersSection } from "./dashboard/FiltersSection";
import { DashboardProvider } from "@/contexts/DashboardContext";

const CopilotDashboard = () => {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Welcome back, Trey Small
              </h1>
              <p className="text-muted-foreground">
                Here's your Co-pilot adoption overview
              </p>
            </div>
            
            {/* Time Period Filters */}
            <div className="flex space-x-2">
              {["7 days", "30 days", "24 hours", "12 months"].map((period) => (
                <Badge 
                  key={period}
                  variant={period === "30 days" ? "default" : "secondary"}
                  className="cursor-pointer px-4 py-2"
                >
                  {period}
                </Badge>
              ))}
            </div>
          </div>

          {/* Filters */}
          <FiltersSection />

          {/* Usage Section */}
          <UsageSection />

          {/* Productivity Section */}
          <ProductivitySection />

          {/* Business Impact Section */}
          <BusinessImpactSection />
        </div>
      </div>
    </DashboardProvider>
  );
};

export default CopilotDashboard;