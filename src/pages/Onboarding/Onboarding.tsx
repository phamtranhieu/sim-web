import React, { useState, useEffect } from 'react';
import logoBig from '../../asset/logoBig.svg';
import logo from '../../asset/logo.svg';
import arrow from '../../asset/arrow.svg';
import location from '../../asset/location.svg';
import telephone from '../../asset/telephone.svg';
import sendEmail from '../../asset/sendEmail.svg';
import buttonArrow from '../../asset/buttonArrow.svg';
import find from '../../asset/find.svg';
import decuct from '../../asset/decuct.svg';

import picture5 from '../../image/picture5.png';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Button, Modal, BackTop } from 'antd';

import Slider from '../Slider/Slider';

import './Onboarding.scss';

export default function Onboarding() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	useEffect(() => {
		showModal();
	}, []);
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<>
			<div className="onboarding-background h-[1205px] w-[1440px] mx-auto">
				<div className="header flex h-[88px] w-full mx-auto bg-primary relative">
					<div className="flex justify-between w-[714px] h-[31.64px] absolute left-[64px] top-[24px] align-middle">
						<img className="relative bottom-[29.17%] h-[10px] top-[29.17%]" src={arrow} alt="" />
						<img className="w-[115.36px] h-[31.55px]" src={logo} alt="" />
					</div>
					<button className="absolute font-medium items-center bg-gray rounded-[100px] px-[36px] py-[10px] left-[1126px] w-[250px] h-[52px] top-[18px] font-sans">
						Đăng nhập/ Đăng ký
					</button>
				</div>
				<div className="content h-[788px] bg-primary relative">
					<div className="absolute w-[774px] h-[48px] top-[28px] left-[333px] rounded-large border-2 border-border-white bg-white">
						<input type="search" className="relative w-full py-2 px-5 outline-0" placeholder="Tìm số" />
						<img className="relative w-[13px] h-[13px] bottom-[26px] left-[4px]" src={find} />
					</div>
					<div className="absolute w-[1100px] h-[560px] top-[90px] left-[170px]">
						<Slider />
					</div>
				</div>
				<div className="footer h-[329px] bg-main-footer relative ">
					<div className="devide"></div>
					<img src={logoBig} alt="" className="w-[147px] h-[65px] absolute top-[139px] left-[149px]" />
					<p className="w-[134px] h-[16px] top-[245px] left-[149px] absolute text-xs text-white-mini ">
						Copyright <span className="copyright">&copy;</span> 2021 ASIM
					</p>
					<p className="absolute w-[154px] h-[24px] top-[97px] left-[384px] font-semibold not-italic leading-[136%] text-white text-lg font-sans">
						Thông tin liên lạc
					</p>
					<img className=" absolute w-[18px] h-[20.47px] top-[141px] left-[384px] " src={location} alt="" />
					<p className="absolute w-[214px] h-[38px] top-[134px] left-[421px] font-semibold not-italic leading-[136%] text-white text-sm font-normal">
						09 Sông Nhuệ, Phường 2, Quận Tân Bình, TP.HCM, Việt Nam
					</p>
					<img className=" absolute w-[24px] h-[24px] top-[188px] left-[384px] " src={telephone} alt="" />
					<p className="absolute w-[214px] h-[38px] top-[190px] left-[421px] font-semibold not-italic leading-[136%] text-white text-sm font-normal">
						1900 1900 (Nhánh 1)
					</p>
					<p className="absolute w-[139px] h-[24px] top-[97px] left-[736px] font-semibold not-italic leading-[136%] text-white text-lg font-sans">
						Truy cập nhanh
					</p>
					<ul className="absolute top-[132px] left-[736px]">
						<li className="text-white font-normal text-sm">
							<a className="text-white">Về chúng tôi</a>
						</li>
						<li className="text-white font-normal text-sm mt-2">
							<a className="text-white">Cơ hội kinh danh/ Tuyển dụng </a>
						</li>
						<li className="text-white font-normal text-sm mt-2">
							<a className="text-white">SIM Siêu Data 4G</a>
						</li>
						<li className="text-white font-normal text-sm mt-2">
							<a className="text-white">Chương trình khuyến mãi</a>
						</li>
						<li className="text-white font-normal text-sm mt-2">
							<a className="text-white">Hướng dẫn mua hàng</a>
						</li>
						<li className="text-white font-normal text-sm mt-2">
							<a className="text-white">UAT Only</a>
						</li>
					</ul>
					<div className="absolute w-[235px] h-[84px] top-[96px] right-[149px]">
						<p className="absolute w-[185px] h-[24px] font-semibold not-italic leading-[136%] text-white text-lg font-sans">
							Đăng ký nhận tin tức
						</p>
						<div className="relative top-[36px] w-[235px] h-[48px] rounded-[40px] border-2 border-border-white">
							<input
								className="text-white relative flex align-center leading-6 outline-0 w-[161px] h-[20px] top-[12px] left-[16px] border-0 bg-main-footer bg-transparent"
								placeholder="Enter your email"
							/>
							<img
								className=" relative box-border w-[32px] h-[32px] left-[195px] bottom-[15px]"
								src={sendEmail}
							/>
						</div>
					</div>

					<div className="button-arrow">
						<p className="button-arrow-text">Về đầu trang</p>
						<img className="button-arrow-title" src={buttonArrow} />
					</div>
				</div>
				<div>
					<Modal
						width="972px"
						// bodyStyle={{ height: '740px' }}
						bodyStyle={{ height: '740px', overflowY: 'scroll' }}
						visible={isModalVisible}
						onOk={handleOk}
						onCancel={handleCancel}
						footer={null}
					>
						<img
							className="w-[772px] h-[240px] mt-3 mx-auto rounded-md"
							src={require('../../image/Screen Shot 2022-06-08 at 16.40 2.png')}
							alt=""
						/>
						<div className="flex items-center w-[772px] mx-auto">
							<img
								className=" w-[72px] h-[2px] bg-[#565656] flex align-center "
								src={require('../../asset/decuct.svg')}
								alt=""
							/>
							<h3 className="m-0 my-3 ml-2">SIM SỐ ĐẸP THẾ HỆ MỚI</h3>
						</div>

						<h1 className="w-[772px] mx-auto h-[99px] font-normal text-[70px] text-primary font-[SVN-Sunflora] ">
							Số đẹp như ý
						</h1>
						<p className="w-[772px] mx-auto font-[SF Pro Text] font-normal text-base leading-7">
							Theo dữ liệu của CoinMarketCap, giá Bitcoin tăng mạnh trong ngày 20/6 (theo giờ Việt Nam)
							sau đợt bán tháo mạnh vào cuối tuần. Tính đến 17h, đồng tiền mã hóa lớn nhất thế giới được
							giao dịch quanh ngưỡng 20.500 USD/đồng, tăng 8,6% so với 24 giờ trước đó. Trong 24 giờ qua,
							giá có lúc rơi xuống mức thấp nhất là 18.261 USD/đồng, và tăng lên ngưỡng cao 20.800
							USD/đồng. Cuối tuần trước, đà bán tháo khiến giá Bitcoin giảm mạnh còn 17.601 USD/đồng. Dù
							đã phục hồi phần nào, giá Bitcoin vẫn thấp hơn khoảng 70% so với mức cao kỷ lục được thiết
							lập hồi tháng 11/2021 và giảm 57% trong năm nay. Theo dữ liệu của CoinMarketCap, giá Bitcoin
							tăng mạnh trong ngày 20/6 (theo giờ Việt Nam) sau đợt bán tháo mạnh vào cuối tuần. Tính đến
							17h, đồng tiền mã hóa lớn nhất thế giới được giao dịch quanh ngưỡng 20.500 USD/đồng, tăng
							8,6% so với 24 giờ trước đó. Trong 24 giờ qua, giá có lúc rơi xuống mức thấp nhất là 18.261
							USD/đồng, và tăng lên ngưỡng cao 20.800 USD/đồng. Cuối tuần trước, đà bán tháo khiến giá
							Bitcoin giảm mạnh còn 17.601 USD/đồng. Dù đã phục hồi phần nào, giá Bitcoin vẫn thấp hơn
							khoảng 70% so với mức cao kỷ lục được thiết lập hồi tháng 11/2021 và giảm 57% trong năm nay.
							Theo dữ liệu của CoinMarketCap, giá Bitcoin tăng mạnh trong ngày 20/6 (theo giờ Việt Nam)
							sau đợt bán tháo mạnh vào cuối tuần. Tính đến 17h, đồng tiền mã hóa lớn nhất thế giới được
							giao dịch quanh ngưỡng 20.500 USD/đồng, tăng 8,6% so với 24 giờ trước đó. Trong 24 giờ qua,
							giá có lúc rơi xuống mức thấp nhất là 18.261 USD/đồng, và tăng lên ngưỡng cao 20.800
							USD/đồng. Cuối tuần trước, đà bán tháo khiến giá Bitcoin giảm mạnh còn 17.601 USD/đồng. Dù
							đã phục hồi phần nào, giá Bitcoin vẫn thấp hơn khoảng 70% so với mức cao kỷ lục được thiết
							lập hồi tháng 11/2021 và giảm 57% trong năm nay. Theo dữ liệu của CoinMarketCap, giá Bitcoin
							tăng mạnh trong ngày 20/6 (theo giờ Việt Nam) sau đợt bán tháo mạnh vào cuối tuần. Tính đến
							17h, đồng tiền mã hóa lớn nhất thế giới được giao dịch quanh ngưỡng 20.500 USD/đồng, tăng
							8,6% so với 24 giờ trước đó. Trong 24 giờ qua, giá có lúc rơi xuống mức thấp nhất là 18.261
							USD/đồng, và tăng lên ngưỡng cao 20.800 USD/đồng. Cuối tuần trước, đà bán tháo khiến giá
							Bitcoin giảm mạnh còn 17.601 USD/đồng. Dù đã phục hồi phần nào, giá Bitcoin vẫn thấp hơn
							khoảng 70% so với mức cao kỷ lục được thiết lập hồi tháng 11/2021 và giảm 57% trong năm nay.
							Theo dữ liệu của CoinMarketCap, giá Bitcoin tăng mạnh trong ngày 20/6 (theo giờ Việt Nam)
							sau đợt bán tháo mạnh vào cuối tuần. Tính đến 17h, đồng tiền mã hóa lớn nhất thế giới được
							giao dịch quanh ngưỡng 20.500 USD/đồng, tăng 8,6% so với 24 giờ trước đó. Trong 24 giờ qua,
							giá có lúc rơi xuống mức thấp nhất là 18.261 USD/đồng, và tăng lên ngưỡng cao 20.800
							USD/đồng. Cuối tuần trước, đà bán tháo khiến giá Bitcoin giảm mạnh còn 17.601 USD/đồng. Dù
							đã phục hồi phần nào, giá Bitcoin vẫn thấp hơn khoảng 70% so với mức cao kỷ lục được thiết
							lập hồi tháng 11/2021 và giảm 57% trong năm nay.
						</p>
					</Modal>
				</div>
			</div>
		</>
	);
}
