import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useDashboard } from "@/contexts/DashboardContext";

export const FiltersSection = () => {
  const { updateFilter } = useDashboard();

  return (
    <Card className="card-glow">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Archetype
            </label>
            <Select onValueChange={(value) => updateFilter('archetype', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Archetypes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consultant">Consultant</SelectItem>
                <SelectItem value="project-manager">Project Manager</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="dev-customization">Dev/Customization team</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Business Unit
            </label>
            <Select onValueChange={(value) => updateFilter('businessUnit', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All BUs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="banking">Banking</SelectItem>
                <SelectItem value="capital-markets">Capital Markets</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Products
            </label>
            <Select onValueChange={(value) => updateFilter('products', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Fintech Products" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fintech Products</SelectItem>
                <SelectItem value="treasury-management">Treasury Management</SelectItem>
                <SelectItem value="digital-one">Digital One</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Projects
            </label>
            <Select onValueChange={(value) => updateFilter('projects', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="implementation">Implementation</SelectItem>
                <SelectItem value="change-request">Change Request</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Customers
            </label>
            <Select onValueChange={(value) => updateFilter('customers', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Customers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hsbc">HSBC</SelectItem>
                <SelectItem value="trevipay">TreviPay</SelectItem>
                <SelectItem value="mn8">MN8</SelectItem>
                <SelectItem value="hl-mando">HL mando</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
