import React from "react";
import DashboardHeader from "@/components/(dashboard)/Header";
import Sidebar from "@/components/(dashboard)/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-[var(--background)] p-6">{children}</main>
      </div>
    </div>
  );
}

