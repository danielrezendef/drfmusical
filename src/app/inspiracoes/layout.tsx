import type { ReactNode } from "react";
import { InspirationsFooter } from "@/components/inspiracoes/InspirationsFooter";
import { InspirationsHeader } from "@/components/inspiracoes/InspirationsHeader";
import "./inspiracoes.css";

export default function InspirationsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="inspirations-site">
      <div className="inspirations-background" aria-hidden="true" />
      <div className="inspirations-notes" aria-hidden="true">
        <span>♪</span>
        <span>♫</span>
        <span>♩</span>
      </div>
      <InspirationsHeader />
      {children}
      <InspirationsFooter />
    </div>
  );
}
