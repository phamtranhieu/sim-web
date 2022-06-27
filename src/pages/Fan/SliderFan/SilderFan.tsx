import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import { dataSlider } from './SilderFanData';

export default function SilderFan() {
	return (
		<div className="w-[576px] h-[280px] mt-[40px]">
			<h1 className="text-white text-2xl">Nghệ sĩ nổi bật</h1>
			<Swiper
				slidesPerView={2.5}
				spaceBetween={20}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				// pagination={{
				// 	clickable: true,
				// }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper flex"
			>
				{dataSlider.map((item, index) => {
					return (
						<>
							<SwiperSlide
								className="relative"
								style={{ backgroundColor: item.color, borderRadius: '40px' }}
							>
								<p className="absolute top-[10px] left-[20px] w-[120px] h-[28px] font-semibold text-xl text-white">
									{item.name}
								</p>
								<div className="blur-image">
									<img
										className="w-[228px] h-[216px] rounded-[40px]"
										src={require('../../../image/sontungMtp.png')}
										alt=""
										// style={{
										// 	backgroundColor: item.bg,
										// }}
									/>
								</div>
							</SwiperSlide>
						</>
					);
				})}
			</Swiper>
		</div>
	);
}
