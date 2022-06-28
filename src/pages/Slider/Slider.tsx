import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataSlider } from './dataSlider';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

export default function Slider() {
	const navigate = useNavigate();
	const handleClick = (param: string) => {
		navigate(param);
	};
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
							<SwiperSlide key={index}>
								<div className="w-full h-[560px] p-10 relative">
									<p
										style={{ cursor: 'pointer', fontSize: '24px' }}
										className="absolute text-center font-semibold text-white text-border-white h-[34px] text-lg w-[13.5rem] top-[27.5rem] left-[5rem]"
										onClick={() => {
											handleClick(item.link);
										}}
									>
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
