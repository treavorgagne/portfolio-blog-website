import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/theme-provider";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import DynamicBreadcrumb from "@/components/bread-crumb";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Avatar className="w-10 h-10">
          <AvatarImage
            className="AvatarImage"
            src="/HeadShotAnime.jpg"
            alt="Treavor Gagne Headshot"
          />
          <AvatarFallback delayMs={600}>TG</AvatarFallback>
        </Avatar>
        <DynamicBreadcrumb />
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
