import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Droplets, MapPin, CheckCircle2, Leaf } from "lucide-react";

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

const zones = [
  { zone: "Zone A", spray: "Bio-Pesticide", radius: "10m", status: "Recommended", eco: true },
  { zone: "Zone B", spray: "Neem Oil", radius: "8m", status: "Scheduled", eco: true },
  { zone: "Zone C", spray: "Copper Fungicide", radius: "12m", status: "Pending Review", eco: false },
];

const SprayRecommendation = () => (
  <PageShell>
    <motion.div {...fade}>
      <h1 className="mb-1 text-xl font-bold">Spray Recommendation</h1>
      <p className="mb-5 text-sm text-muted-foreground">AI-powered precision spraying guidance</p>
    </motion.div>

    <div className="space-y-4">
      {zones.map((z, i) => (
        <motion.div
          key={z.zone}
          {...fade}
          transition={{ delay: i * 0.07 }}
          className="rounded-lg border border-border bg-card p-4 shadow-sm"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Droplets size={20} />
              </div>
              <div>
                <p className="font-semibold">{z.zone}</p>
                <p className="text-xs text-muted-foreground">{z.spray}</p>
              </div>
            </div>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              z.status === "Recommended"
                ? "bg-success/15 text-success"
                : z.status === "Scheduled"
                ? "bg-info/15 text-info"
                : "bg-warning/15 text-warning"
            }`}>
              {z.status}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {z.radius}
            </span>
            {z.eco && (
              <span className="flex items-center gap-1 text-success">
                <Leaf size={14} /> Eco-Friendly
              </span>
            )}
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} /> AI Verified
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </PageShell>
);

export default SprayRecommendation;
