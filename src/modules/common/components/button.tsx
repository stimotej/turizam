import { cn } from "@/lib/utils/cn";

export const buttonClassName = cn(
  "py-3.5 px-8 text-sm tracking-widest text-center",
  "flex items-center justify-center w-fit rounded-md border border-black/20 bg-(--background)",
  "transition-colors hover:border-black"
);

export default function Button(props: React.ComponentProps<"button">) {
  return <button {...props} className={cn(buttonClassName, props.className)} />;
}
