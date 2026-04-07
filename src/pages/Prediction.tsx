import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Thermometer, Droplets, CloudRain, AlertTriangle } from "lucide-react";

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

const Prediction = () => (
  <PageShell>
    <motion.div {...fade}>
      <h1 className="mb-1 text-xl font-bold">Disease Prediction</h1>
      <p className="mb-5 text-sm text-muted-foreground">Weather-based outbreak forecasting</p>
    </motion.div>

    {/* Environment Data */}
    <motion.div {...fade} transition={{ delay: 0.05 }} className="mb-4 grid grid-cols-3 gap-3">
      {[
        { icon: Thermometer, label: "Temp", value: "26°C" },
        { icon: Droplets, label: "Humidity", value: "85%" },
        { icon: CloudRain, label: "Rainfall", value: "Moderate" },
      ].map((d) => (
        <div key={d.label} className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-3 text-center shadow-sm">
          <d.icon size={22} className="text-primary" />
          <span className="text-xs text-muted-foreground">{d.label}</span>
          <span className="text-sm font-bold">{d.value}</span>
        </div>
      ))}
    </motion.div>

    {/* Prediction Result */}
    <motion.div {...fade} transition={{ delay: 0.1 }} className="rounded-lg border border-destructive/30 bg-destructive/5 p-5">
      <div className="mb-3 flex items-center gap-2 text-destructive">
        <AlertTriangle size={20} />
        <span className="text-lg font-bold">High Risk</span>
      </div>
      <p className="mb-4 text-sm">Powdery Mildew may appear within <span className="font-semibold">3 days</span>.</p>

      {/* Risk Meter */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "82%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-warning to-destructive"
          />
        </div>
        <p className="text-right text-xs font-medium text-destructive">Risk Level: 82%</p>
      </div>
    </motion.div>

    {/* Recommended Actions */}
    <motion.div {...fade} transition={{ delay: 0.15 }} className="mt-4 rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="mb-2 font-semibold">Recommended Actions</h3>
      <ul className="space-y-1.5 text-sm">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Apply preventive fungicide spray
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Increase air circulation around crops
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Monitor closely for next 72 hours
        </li>
      </ul>
    </motion.div>
  </PageShell>
);

export default Prediction;
