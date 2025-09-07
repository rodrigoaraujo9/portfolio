"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { flushSync } from "react-dom";
import { SunDim } from "lucide-react";
import { MoonIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Sync initial state from current <html> class on mount
  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const changeTheme = async () => {
    if (typeof document === "undefined") return; // SSR guard
    if (!buttonRef.current) return;

    const doToggle = () => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDarkMode(dark);
      });
    };

    // ---- Local inline typing for the experimental API (Option A) ----
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
        updateCallbackDone: Promise<void>;
        skipTransition(): void;
      };
    };
    const startVT = doc.startViewTransition;

    if (typeof startVT === "function") {
      try {
        const vt = startVT(() => {
          doToggle();
        });
        await vt.ready;
      } catch {
        // ignore transition errors; state already toggled
      }
    } else {
      // Fallback if API not supported
      doToggle();
    }

    // Respect reduced-motion preference
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    // Reveal ripple animation (best-effort; ignore if unsupported)
    try {
      const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
      const y = top + height / 2;
      const x = left + width / 2;

      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } catch {
      // no-op
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      aria-pressed={isDarkMode}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-12",
        className
      )}
    >
      {isDarkMode ? <SunDim className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  );
};

export default AnimatedThemeToggler;
