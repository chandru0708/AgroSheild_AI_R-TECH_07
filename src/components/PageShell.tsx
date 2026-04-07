import { ReactNode } from "react";
import BottomNav from "./BottomNav";

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen pb-20">
    <div className="mx-auto max-w-lg px-4 py-4">{children}</div>
    <BottomNav />
  </div>
);

export default PageShell;
