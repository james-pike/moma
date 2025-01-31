import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel pauseOnHover noControls>
      <Carousel.Slide>
        <img src="/images/hero3.webp" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/hero.jpg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/hero2.jpg" alt="..." />
      </Carousel.Slide>
    
      {/* <Carousel.Slide>
        <img src="/images/hero7.jpg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/hero6.jpg" alt="..." />
      </Carousel.Slide> */}
    </Carousel>
  )
})