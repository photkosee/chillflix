"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface PlanContextType {
  plan: string;
  setPlan: React.Dispatch<React.SetStateAction<string>>;
}

export const PlanContext = createContext<PlanContextType>({
  plan: "premium",
  setPlan: () => {},
});

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("Something is wrong with PlanContextProvider");
  }
  return context;
};

export function PlanContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [plan, setPlan] = useState<string>(() => {
    if (ls && ls.getItem("plan")) {
      return JSON.parse(ls.getItem("plan") || "premium");
    } else {
      ls?.setItem("plan", "premium");
      return "premium";
    }
  });

  useEffect(() => {
    ls?.setItem("plan", JSON.stringify(plan));
  }, [plan]);

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
}
