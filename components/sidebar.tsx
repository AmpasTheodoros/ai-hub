"use client";

import Link from "next/link";
import Image from "next/image";
import { Kdam_Thmor_Pro, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Shield, FileText, Settings, View, MessageSquare} from "lucide-react";
import { usePathname } from "next/navigation";

const kdamThmorPro = Kdam_Thmor_Pro ({
    weight: "400",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Attention Span PDF",
        icon: FileText,
        href: "/attention_span_pdf",
        color: "text-emerald-500",
    },
    {
        label: "Filter Extensions",
        icon: View,
        href: "/attention_span_pdf",
        color: "text-orange-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl- mb-14">
                    <div className="relative w-20 h-20 mr-4">
                        <Image fill alt='Logo' src="/logo.png"/>
                    </div>
                    <h1 className={cn("text-2xl font-bold", kdamThmorPro.className)}>
                    Aeye
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex item-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;