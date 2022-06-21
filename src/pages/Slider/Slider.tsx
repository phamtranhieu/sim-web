import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataSlider } from './dataSlider';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

export default function Slider() {
	return (
		<>
			<Swiper
				// install Swiper modules
				slidesPerView={3}
				spaceBetween={5}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{dataSlider.map((item, index) => {
					return (
						<>
							<SwiperSlide>
								<div className="w-full h-[560px] p-10 relative">
									<p className="absolute text-center text-border-white h-[34px] text-lg w-[8.5rem] top-[29.5rem] left-[7rem]">
										{item.title}
									</p>
									<img className="w-full h-full rounded-[50px]" src={item.image} alt="" />
								</div>
							</SwiperSlide>
						</>
					);
				})}
				...
			</Swiper>
		</>
	);
}
