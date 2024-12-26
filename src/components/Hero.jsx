// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Hero.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
    return (
        
        <div className='mt-[70px]'>
            <Swiper
              autoHeight={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
        <SwiperSlide>
          <div className='b-1'></div>
          <div className="absolute top-[340px]">
            <h1 data-aos="fade-down"
              data-aos-duration="1000" className='text-5xl text-slate-50 font-semibold mb-3'>Embrace Eco-Friendly Elegance with Jute and Wooden Crafts</h1>
            <p data-aos="fade-up"
              data-aos-duration="1000" className='text-[#e09045]'>Explore our range of handcrafted home decor, accessories, and gifts, each piece embodying the timeless beauty of nature. Let Naturify adorn your life with craftsmanship that celebrates the Earth.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='b-2'></div>
          <div className="absolute top-[340px]">
            <h1 data-aos="fade-down"
              data-aos-duration="1000" className='text-5xl text-slate-50 font-semibold mb-3'>Embrace Eco-Friendly Elegance with Jute and Wooden Crafts</h1>
            <p data-aos="fade-up"
              data-aos-duration="1000" className='text-[#e09045]'>Explore our range of handcrafted home decor, accessories, and gifts, each piece embodying the timeless beauty of nature. Let Naturify adorn your life with craftsmanship that celebrates the Earth.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='b-3'></div>
          <div className="absolute top-[340px]">
            <h1 data-aos="fade-down"
              data-aos-duration="1000" className='text-5xl text-slate-50 font-semibold mb-3'>Embrace Eco-Friendly Elegance with Jute and Wooden Crafts</h1>
            <p data-aos="fade-up"
              data-aos-duration="1000" className='text-[#e09045]'>Explore our range of handcrafted home decor, accessories, and gifts, each piece embodying the timeless beauty of nature. Let Naturify adorn your life with craftsmanship that celebrates the Earth.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='b-4'></div>
          <div className="absolute top-[340px]">
            <h1 data-aos="fade-down"
              data-aos-duration="1000" className='text-5xl text-slate-50 font-semibold mb-3'>Embrace Eco-Friendly Elegance with Jute and Wooden Crafts</h1>
            <p data-aos="fade-up"
              data-aos-duration="1000" className='text-[#e09045]'>Explore our range of handcrafted home decor, accessories, and gifts, each piece embodying the timeless beauty of nature. Let Naturify adorn your life with craftsmanship that celebrates the Earth.</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
    );
};

export default Hero;