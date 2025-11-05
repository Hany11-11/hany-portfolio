import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]): string {
  // clsx accepts variadic args; spread inputs into it and merge with tailwind's merge
  return twMerge(clsx(...inputs));
}
