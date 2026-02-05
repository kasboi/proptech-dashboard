import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FloatingChatButton() {
    return (
        <Button
            size="icon"
            className="fixed bottom-8 right-8 w-14 h-14 bg-[#1f2937] text-white rounded-full shadow-lg hover:bg-black transition-colors z-50 animate-in fade-in zoom-in duration-300"
        >
            <Image src="/icons/messages-3.svg" alt="Chat" width={24} height={24} />
            <span className="sr-only">Open Chat</span>
        </Button>
    );
}
