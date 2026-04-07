import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Upload, ShieldCheck, AlertTriangle } from "lucide-react";
import { useState } from "react";

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

const DiseaseDetection = () => {
  const [detected, setDetected] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setTimeout(() => setDetected(true), 1200);
    }
  };

  const handleDemo = () => {
    setPreview(null);
    setDetected(false);
    setTimeout(() => setDetected(true), 800);
  };

  return (
    <PageShell>
      <motion.div {...fade}>
        <h1 className="mb-1 text-xl font-bold">Plant Disease Detection</h1>
        <p className="mb-5 text-sm text-muted-foreground">Upload a leaf image to detect diseases using AI</p>
      </motion.div>

      <motion.div {...fade} transition={{ delay: 0.05 }} className="mb-4 flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border bg-card p-8">
        {preview ? (
          <img src={preview} alt="Leaf" className="h-40 w-40 rounded-lg object-cover" />
        ) : (
          <div className="flex h-40 w-40 items-center justify-center rounded-lg bg-secondary">
            <Upload size={40} className="text-muted-foreground" />
          </div>
        )}
        <label className="cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Upload Leaf Image
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
        <button onClick={handleDemo} className="text-xs text-muted-foreground underline">
          or run demo detection
        </button>
      </motion.div>

      {detected && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-destructive">
              <AlertTriangle size={18} />
              <span className="font-semibold">Disease Detected</span>
            </div>
            <p className="text-sm font-medium">Leaf Spot</p>
            <p className="text-xs text-muted-foreground">Confidence: 92%</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full w-[92%] rounded-full bg-destructive" />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2 text-success">
              <ShieldCheck size={18} />
              <span className="font-semibold text-foreground">Suggested Treatment</span>
            </div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Neem oil spray
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Remove infected leaves
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Reduce humidity exposure
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </PageShell>
  );
};

export default DiseaseDetection;
