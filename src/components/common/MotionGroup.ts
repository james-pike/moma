// src/utils/useMotionGroup.ts
import { useSignal, useTask$, $ } from "@builder.io/qwik";

export const useMotionGroup = (options = { threshold: 0.1, delayStep: 100 }) => {
  const { threshold = 0.1, delayStep = 100 } = options;
  const isVisible = useSignal(false);
  const containerRef = useSignal<HTMLElement | undefined>();

  // Task to set up the Intersection Observer
  useTask$(({ track, cleanup }) => {
    track(() => containerRef.value);

    const container = containerRef.value;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.disconnect(); // Disconnect after first intersection (like intersect-once)
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    // Cleanup observer on component unmount or ref change
    cleanup(() => {
      observer.disconnect();
    });
  });

  return { isVisible, delayStep, containerRef };
};