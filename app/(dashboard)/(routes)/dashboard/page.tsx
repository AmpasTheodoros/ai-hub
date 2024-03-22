//app/page.tsx
"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, FileText, MessageSquare, View } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    },
    {
        label: "Attention Span PDF",
        icon: FileText,
        href: "/attention_span_pdf",
        color: "text-emerald-500",
    },
    {
        label: "Filter Extension",
        icon: View,
        href: "/filter_extension",
        color: "text-orange-500",
    },
]

const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tools) => (
                    <Card
                        onClick={() => router.push(tools.href)}
                        key={tools.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tools.bgColor)}>
                                <tools.icon className={cn("w-8 h-8", tools.color)}/>
                            </div>
                            <div className="font-semibold">
                                {tools.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5"/>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DashboardPage
