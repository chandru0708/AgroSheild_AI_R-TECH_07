import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Leaf, CloudSun, ShieldAlert, Search, BarChart3, Droplets, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

const Dashboard = () => {
  const navigate = useNavigate();

  const actions = [
    { label: "Detect Disease", icon: Search, path: "/detect" },
    { label: "View Prediction", icon: BarChart3, path: "/prediction" },
    { label: "Spray Rec.", icon: Droplets, path: "/spray" },
    { label: "Community", icon: Users, path: "/community" },
  ];

  return (
    <PageShell>
      {/* Header */}
      <motion.div {...fade} className="mb-6">
        <h1 className="text-2xl font-extrabold text-foreground">AgroShield AI</h1>
        <p className="text-sm text-muted-foreground">Smart Detection • Smart Prediction • Smart Protection</p>
      </motion.div>

      {/* Crop Health */}
      <motion.div {...fade} transition={{ delay: 0.05 }} className="mb-4 rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-primary">
          <Leaf size={20} />
          <span className="font-semibold">Crop Health Status</span>
        </div>
        <div className="space-y-1 text-sm">
          <p><span className="text-muted-foreground">Crop:</span> Tomato</p>
          <p><span className="text-muted-foreground">Health Status:</span> <span className="font-medium text-success">Good</span></p>
          <p><span className="text-muted-foreground">Risk Level:</span> <span className="font-medium text-warning">Medium</span></p>
        </div>
      </motion.div>

      {/* Weather */}
      <motion.div {...fade} transition={{ delay: 0.1 }} className="mb-4 rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-info">
          <CloudSun size={20} />
          <span className="font-semibold text-foreground">Weather Conditions</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-md bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Temp</p>
            <p className="font-bold text-secondary-foreground">27°C</p>
          </div>
          <div className="rounded-md bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="font-bold text-secondary-foreground">82%</p>
          </div>
          <div className="rounded-md bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Rain</p>
            <p className="font-bold text-secondary-foreground">Possible</p>
          </div>
        </div>
      </motion.div>

      {/* AI Alert */}
      <motion.div {...fade} transition={{ delay: 0.15 }} className="mb-6 rounded-lg border border-warning/30 bg-warning/10 p-4 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-warning">
          <ShieldAlert size={20} />
          <span className="font-semibold text-foreground">AI Disease Alert</span>
        </div>
        <p className="text-sm">Powdery Mildew Risk</p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full w-[65%] rounded-full bg-warning" />
        </div>
        <p className="mt-1 text-right text-xs text-muted-foreground">Probability: 65%</p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div {...fade} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <button
            key={a.path}
            onClick={() => navigate(a.path)}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <a.icon size={20} />
            </div>
            <span className="text-sm font-semibold">{a.label}</span>
          </button>
        ))}
      </motion.div>
    </PageShell>
  );
};

export default Dashboard;
