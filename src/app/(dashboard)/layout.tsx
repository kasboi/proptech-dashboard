import { Header } from "@/components/layout/header";
import { Navigation } from "@/features/dashboard/components/navigation/navigation";
import { FloatingChatButton } from "@/features/dashboard/components/floating-chat-button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#fafbfc] pb-12 relative">
            <Header />
            <Navigation />
            <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">{children}</main>
            <FloatingChatButton />
        </div>
    );
}
