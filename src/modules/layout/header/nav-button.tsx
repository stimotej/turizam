import { cn } from "@/lib/utils/cn";

export default function NavigationButton({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "group text-xl font-medium tracking-widest text-(--foreground) py-3 px-4 hover:text-(--foreground)/80 relative",
        className
      )}
    >
      {children}
      <span
        aria-hidden={true}
        className={cn(
          "transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
          "absolute left-0 right-0 bottom-1 h-0.5 bg-(--primary)"
        )}
      />
    </button>
  );
}
