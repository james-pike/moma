import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel pauseOnHover noControls>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      </Carousel.Slide>
    </Carousel>
  )
})