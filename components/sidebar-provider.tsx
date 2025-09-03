
"use client"

import { SidebarProvider as Provider } from "@/components/ui/sidebar";

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            {children}
        </Provider>
    );
}
