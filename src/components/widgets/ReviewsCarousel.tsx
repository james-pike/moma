import { component$, useResource$, Resource, PropsOf } from '@builder.io/qwik';
import { twMerge } from 'tailwind-merge';
import { Carousel, Progress } from '@qwik-ui/headless';
import { getReviews } from '~/api/GoogleReviews';

// Define the Review type
interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number; // Unix timestamp in seconds
}

// CarouselProgress component (reused from your services carousel)
export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});

// Reviews Carousel component
export default component$(() => {
  // Fetch reviews using useResource$
  const reviewsResource = useResource$<Review[]>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort());

    const reviews = await getReviews();
    return reviews.filter(review => review.rating >= 4); // Filter only 4+ star reviews
  });

  

  return (
    <Resource
      value={reviewsResource}
      onPending={() => <p>Loading reviews...</p>}
      onRejected={(error) => <p>Error loading reviews: {error.message}</p>}
      onResolved={(reviews) =>
        reviews.length > 0 ? (
          <Carousel.Root
            class="carousel-root"
            slidesPerView={1.5} // Increased to 1.5 to show more slides, reducing individual slide width
            gap={20}
            rewind // Reduced from 25px to 20px for tighter spacing
            sensitivity={{ touch: 1.75 }}
          >
            {/* Carousel Scroller with review slides */}
            <Carousel.Scroller class="carousel-scroller">
              {reviews.map((review, index) => (
                <Carousel.Slide
                  key={`${review.author_name}-${index}`}
                  class="carousel-slide min-h-48 bg-primary-50 flex flex-col" // Reduced min-height from 60 (240px) to 48 (192px)
                >
                  {/* Review content */}
                  <div class="service-info p-3 flex-1 overflow-hidden"> {/* Reduced padding from p-4 to p-3 */}
                    {/* Author and Rating */}
                    <div class="flex items-center mb-1"> {/* Reduced margin-bottom from 2 to 1 */}
                      <h1 class="service-title text-base font-semibold truncate"> {/* Reduced from text-lg to text-base */}
                        {review.author_name}
                      </h1>
                      <div class="ml-2 flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            class={twMerge(
                              "text-yellow-400 text-sm", // Added text-sm to reduce star size
                              i < review.rating ? 'fill-current' : 'text-gray-300'
                            )}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Review Text */}
                    <p class="service-description text-xs line-clamp-3"> {/* Reduced from text-sm to text-xs, increased to line-clamp-3 */}
                      {review.text}
                    </p>
                    {/* Review Date */}
                    <p class="text-xs text-gray-400 mt-1"> {/* Reduced from text-sm to text-xs, mt-2 to mt-1 */}
                      {new Date(review.time * 1000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short', // Changed to 'short' for brevity (e.g., "Jan" instead of "January")
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel.Scroller>

            {/* Pagination and Link */}
            <div class="flex justify-between items-end">
              <Carousel.Pagination class="carousel-pagination justify-start">
                {reviews.map((review) => (
                  <Carousel.Bullet
                    key={review.author_name}
                    class="carousel-pagination-bullet w-[8px] h-[8px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:bg-black data-[active]:scale-125" // Reduced from 10px to 8px
                  />
                ))}
              </Carousel.Pagination>
              <a
                href="/reviews"
                class="text-black text-sm font-medium hover:underline"
                style={{ transform: 'translateY(5px)' }}
              >
                See All Reviews -
              </a>
            </div>
          </Carousel.Root>
        ) : (
          <p>No reviews available.</p>
        )
      }
    />
  );
});