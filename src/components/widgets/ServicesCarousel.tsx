import { component$, PropsOf } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';


export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});

export default component$(() => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern web applications',
      image: '/images/hero1.webp'
    },
    {
      title: 'Mobile Apps',
      description: 'Creating native and cross-platform mobile solutions',
      image: '/images/hero1.webp'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    }
  ];

  return (
    <Carousel.Root class="carousel-root" slidesPerView={1.2} gap={25}>
      <Carousel.Scroller class="carousel-scroller carousel-animation">
        {services.map((service) => (
          <Carousel.Slide 
            key={service.title} 
            class="carousel-slide h-60 bg-primary-200 flex flex-col"
          >
            <img 
              src={service.image} 
              alt={service.title}
              class="w-full h-44 object-cover"
            />
            <div class="service-info p-2">
              <h1 class="service-title text-lg font-bold">{service.title}</h1>
              <p class="service-description text-sm">{service.description}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>

      <Carousel.Pagination class="carousel-pagination justify-start">
        {services.map((service) => (
          <Carousel.Bullet 
            key={service.title}
            class="carousel-pagination-bullet w-[10px] h-[10px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:bg-black data-[active]:scale-125"
          />
        ))}
      </Carousel.Pagination>
    </Carousel.Root>
  );
});