import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges class names, resolving Tailwind conflicts (last one wins). */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
