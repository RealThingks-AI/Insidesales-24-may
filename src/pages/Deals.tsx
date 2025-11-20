import { DollarSign, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Deal {
  id: number;
  name: string;
  value: number;
  stage: "qualification" | "proposal" | "negotiation" | "closed";
  contact: string;
  closeDate: string;
}

const mockDeals: Deal[] = [
  { id: 1, name: "Enterprise Solution", value: 45000, stage: "negotiation", contact: "John Smith", closeDate: "2025-12-15" },
  { id: 2, name: "Startup Package", value: 12000, stage: "proposal", contact: "Sarah Johnson", closeDate: "2025-12-10" },
  { id: 3, name: "Growth Plan", value: 28000, stage: "qualification", contact: "Michael Brown", closeDate: "2025-12-30" },
  { id: 4, name: "Premium Service", value: 55000, stage: "closed", contact: "Emily Davis", closeDate: "2025-11-28" },
];

const stages = ["qualification", "proposal", "negotiation", "closed"] as const;

const stageColors = {
  qualification: "bg-chart-1/10 text-chart-1",
  proposal: "bg-chart-2/10 text-chart-2",
  negotiation: "bg-chart-4/10 text-chart-4",
  closed: "bg-success/10 text-success",
};

export default function Deals() {
  const dealsByStage = stages.map((stage) => ({
    stage,
    deals: mockDeals.filter((deal) => deal.stage === stage),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Deals Pipeline</h1>
        <p className="text-muted-foreground mt-1">Track your sales opportunities</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {dealsByStage.map(({ stage, deals }) => (
          <div key={stage} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold capitalize text-foreground">
                {stage}
              </h2>
              <Badge variant="secondary">{deals.length}</Badge>
            </div>

            <div className="space-y-3">
              {deals.map((deal) => (
                <Card key={deal.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{deal.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="font-semibold text-success">
                        ${deal.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{deal.contact}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(deal.closeDate).toLocaleDateString()}</span>
                    </div>
                    <Badge className={stageColors[deal.stage]}>
                      {stage}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
