import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { DesktopToolbar } from "./desktop-toolbar";
import { UserDropdown } from "./user-dropdown";

export function Header() {
  return (
    <header className="bg-brand text-brand-foreground px-4 md:px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center relative">
          <Image
            src="/icons/expertListingLogo.svg"
            alt="Expert Listing Logo"
            width={240}
            height={240}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <MobileMenu />
        <DesktopToolbar />
        <UserDropdown />
      </div>
    </header>
  );
}
