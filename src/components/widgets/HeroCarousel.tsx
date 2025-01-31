import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel pauseOnHover noControls>
      <Carousel.Slide>
        <img src="/images/hero1.jpg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/hero5.jpg" alt="..." />
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