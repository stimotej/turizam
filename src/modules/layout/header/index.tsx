import Image from "next/image";
import NavigationLink from "./nav-link";
import { mainNavigationLinks } from "@/lib/utils/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/components/sheet";
import MenuIcon from "../../common/icons/menu";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils/cn";
import ChevronDownIcon from "@/modules/common/icons/chevron-down";
import NavigationButton from "./nav-button";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
      <Link
        href="/"
        aria-label="Idi na početnu"
        className="flex items-center gap-4"
      >
        <Image
          src="/logo.webp"
          className="w-24 h-16"
          alt="Studentski Centar Zagreb logo"
          width={96}
          height={64}
        />
        <strong className="uppercase font-display text-2xl md:text-4xl lg:text-5xl">
          HOSTEL
        </strong>
      </Link>

      {/* MOBILE NAVIGATION */}
      <Sheet>
        <SheetTrigger asChild>
          <button aria-label="Otvori navigaciju" className="lg:hidden">
            <MenuIcon className="size-8 text-neutral-500" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-5/6 sm:max-w-3/4 md:w-1/2 lg:max-w-sm">
          <SheetHeader>
            <SheetTitle className="sr-only">Glavna navigacija</SheetTitle>
            <SheetDescription className="sr-only">
              Izbornik glavne navigacije stranice. Koristite tipkovnicu ili miš
              za odabir željene stranice.
            </SheetDescription>
          </SheetHeader>

          <nav aria-label="Glavna navigacija" dir="ltr">
            <ul className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-10">
              {mainNavigationLinks
                .map((link) => ("items" in link ? link.items : link))
                .flat()
                .map((link) => (
                  <li key={link.href} className="w-full first:[&>a]:border-t">
                    <SheetClose asChild>
                      <NavigationLink
                        showIndicator={false}
                        href={link.href}
                        className="flex text-sm py-5 w-full border-b border-black/20 text-(--foreground)/80 data-[active=true]:text-(--primary)"
                      >
                        {link.title}
                      </NavigationLink>
                    </SheetClose>
                  </li>
                ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      {/* DESKTOP NAVIGATION */}
      <NavigationMenu
        aria-label="Glavna navigacija"
        className="hidden lg:block"
      >
        <NavigationMenuList className="flex items-center gap-2 justify-center">
          {mainNavigationLinks.map((link, index) =>
            "items" in link ? (
              <NavigationMenuItem key={index} className="relative">
                <NavigationMenuTrigger asChild>
                  <NavigationButton className="text-sm flex items-center gap-1">
                    {link.title}
                    <ChevronDownIcon ariaHidden={true} className="size-4" />
                  </NavigationButton>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={cn(
                    "absolute top-full right-0 bg-(--background) shadow-xl divide-y p-2",
                    "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out"
                  )}
                >
                  {link.items.map((item) => (
                    <NavigationLink
                      key={item.href}
                      href={item.href}
                      showIndicator={false}
                      className="p-4 block hover:text-(--primary) text-sm text-nowrap data-[active=true]:text-(--primary) border-black/10"
                    >
                      {item.title}
                    </NavigationLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <NavigationLink href={link.href} className="text-sm">
                    {link.title}
                  </NavigationLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
