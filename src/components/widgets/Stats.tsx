import { $, component$, Signal, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  // Signals to track the animated values
  const downloads = useSignal(0);
  const stars = useSignal(0);
  const forks = useSignal(0);
  const users = useSignal(0);

  // Target values (parsed from strings like "133K" to numbers)
  const targetValues = {
    downloads: 25, // 133K
    stars: 100, // 24.8K
    forks: 100, // 10.3K
    users: 100, // 48.4K
  };

  // Format numbers back to "K" notation
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(".0", "") + "K";
    }
    return num.toString();
  };

  // Ease-out quadratic function: slows down as it approaches the target
  const easeOutQuad$ = $((t: number)=>1 - Math.pow(1 - t, 2)); // t is progress (0 to 1)

  // Animation logic when the component is visible
  useVisibleTask$(() => {
    const duration = 1500; // 2 seconds
  
    

    const animateCount = (signal: Signal<number>, target: number) => {
      let startTime: number | null = null;

      const step = async (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 to 1
        const easedProgress = await easeOutQuad$(progress); // Apply easing
        const currentValue = Math.floor(easedProgress * target);

        signal.value = currentValue;

        if (progress < 1) {
          requestAnimationFrame(step); // Continue animation
        } else {
          signal.value = target; // Ensure exact final value
        }
      };

      requestAnimationFrame(step); // Start animation
    };

    // Start animations for each number
    animateCount(downloads, targetValues.downloads);
    animateCount(stars, targetValues.stars);
    animateCount(forks, targetValues.forks);
    animateCount(users, targetValues.users);
  });

  return (
    <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4 motion-group opacity-0 intersect-once intersect:opacity-100 intersect:motion-preset-slide-up">
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary font-heading">
            {formatNumber(downloads.value)}+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Years of Experience
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary font-heading">
            {formatNumber(stars.value)}+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Happy Clients
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary">
            {formatNumber(forks.value)}
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Forks
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary font-heading">
            {formatNumber(users.value)}%
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
});