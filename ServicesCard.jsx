import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  "AI Generated Content",
  "Short Form Content",
  "Repurposed",
  "2D Motion Animation",
  "Spokesperson Videos",
  "UGC Influencer videos",
  "Faceless / Stock Videos",
  "Podcast Video Editing",
  "YouTube Videos",
];

export default function ServicesCard() {
  return (
    <Card className="w-full max-w-md p-4 shadow-lg rounded-2xl border">
      <CardContent className="space-y-2">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span className="text-lg font-medium">{service}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
