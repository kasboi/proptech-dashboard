import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FloatingChatButton() {
  return (
    <Button
      type="button"
      size="icon"
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#1f2937] text-white rounded-full shadow-lg hover:bg-black transition-colors z-50 animate-in fade-in zoom-in duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2937]"
      aria-label="Open chat support"
    >
      <Image src="/icons/messages-3.svg" alt="" width={24} height={24} aria-hidden="true" />
    </Button>
  );
}
