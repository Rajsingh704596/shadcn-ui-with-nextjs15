import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//^ shadcn byDefault install both package clsx or twMerge
//! 1. clsx
//    Purpose:Conditionally combines class names and make clean, lightweight way.
//    Example: className={clsx('bg-red-500', isActive && 'text-white')}

//! 2. twmerge
//    Purpose: Resolves/Merges conflicting Tailwind CSS classes, keeping the last one.
//    Example: className={twmerge('text-red-500 text-blue-500')}         o/p → text-blue-500 take last define value

//! 3. cn (classNames): a fun. which return both package as a wrapper
//    Purpose: A helper function to Conditionally applies class names like clsx.
//    Example:className={ cn('bg-blue-500', isActive && 'text-white')}
