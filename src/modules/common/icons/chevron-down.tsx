export default function ChevronDownIcon({
  className,
  ariaHidden,
}: {
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
