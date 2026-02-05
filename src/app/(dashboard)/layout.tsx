import { Header } from "@/components/layout/header";
import { Navigation } from "@/features/dashboard/components/navigation/navigation";
import { FloatingChatButton } from "@/features/dashboard/components/floating-chat-button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-page pb-12 relative">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:cursor-pointer"
      >
        Skip to main content
      </a>

      <Header />
      <Navigation />
      <main id="main-content" className="max-w-2xl mx-auto px-4 md:px-6 py-8" tabIndex={-1}>
        {children}
      </main>
      <FloatingChatButton />
    </div>
  );
}
