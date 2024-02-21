import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import slide1 from './assets/slide1.jpeg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';
import slide5 from './assets/slide5.webp';
import slide6 from './assets/slide6.jpg';

register();

export default function App() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (


    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
    >
      <swiper-slide><img src={slide1} alt="" /></swiper-slide>
      <swiper-slide><img src={slide2} alt="" /></swiper-slide>
      <swiper-slide><img src={slide3} alt="" /></swiper-slide>
    </swiper-container>
  );
};
