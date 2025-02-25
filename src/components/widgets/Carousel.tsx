import { component$, PropsOf} from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';

export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});

export default component$(() => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  return (
    <Carousel.Root class="carousel-root p-4" slidesPerView={2} gap={30}>
      <div class="carousel-buttons">
        <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next>
      </div>
      <Carousel.Scroller class="carousel-scroller">
        {colors.map((color) => (
          <Carousel.Slide key={color} class="carousel-slide h-40 bg-primary-200">
            {color}
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <Carousel.Pagination class="carousel-pagination justify-start">
        {colors.map((color) => (
          <Carousel.Bullet 
            key={color}
            class="carousel-pagination-bullet"
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ccc',           // Default color for inactive
              borderRadius: '2px',              // Makes it square with slight rounding
              transition: 'all 0.3s ease',      // Smooth transition for changes
              '&[data-active]': {
                backgroundColor: '#000',        // Active bullet color
                transform: 'scale(1.2)',       // Slightly larger when active
              }
            }}
          />
        ))}
      </Carousel.Pagination>
    </Carousel.Root>
  );
});