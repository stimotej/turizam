"use client";

import { cn } from "@/lib/utils/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({
  children,
  href,
  className,
  showIndicator = true,
  ...props
}: LinkProps & {
  children?: React.ReactNode;
  className?: string;
  showIndicator?: boolean;
}) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href={href}
      className={cn(
        "group text-xl font-medium tracking-widest text-(--foreground) py-3 px-4 hover:text-(--foreground)/80 relative",
        className
      )}
      aria-current={pathname === href ? "page" : undefined}
      data-active={pathname === href}
    >
      {children}
      {!!showIndicator && (
        <span
          aria-hidden={true}
          className={cn(
            pathname !== href &&
              "transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
            "absolute left-0 right-0 bottom-1 h-0.5 bg-(--primary)"
          )}
        />
      )}
    </Link>
  );
}
