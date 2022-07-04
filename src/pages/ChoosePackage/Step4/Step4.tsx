import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import vnpay from '../../../image/vnpay.png';
import cardBank from '../../../image/card-bank.png';
import { Checkbox } from 'antd';
// import { useAppSelector, useAppDispatch } from '../../../app/hook';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../reducer/userReducer';

export default function Step4() {
	const dispath = useDispatch();
	const [isShowPackage, setIsShowPackage] = useState(false);
	const handleClick = () => {
		if (isShowPackage == false) {
			setIsShowPackage(true);
		} else {
			setIsShowPackage(false);
		}
		dispath(userAction.setIsShowPackage({ isShowPackage }));
	};
	return (
		<div className="w-[575px] mx-auto mt-[36px]">
			<div className="w-[575px] h-[182px]">
				<p className="w-[150px] h-[24px] text-[#898989]">ĐỊA CHỈ GIAO HÀNG</p>
				<div className="w-[575px] h-[150px] bg-[#F6F6F6]"></div>
			</div>
			<div className="w-[575px] h-[172px]">
				<p className="w-[150px] h-[24px] text-[#898989] mt-[20px]">THÔNG TIN SẢN PHẨM</p>
				<div className="w-[575px] h-[140px] bg-[#F6F6F6]">
					<p onClick={handleClick}>Chi tiết</p>
				</div>
			</div>
			<div className="w-[575px] h-[538px]">
				<div className="w-[575px] h-[300px]"></div>
				<div className="w-[575px] h-[136px]">
					<p className="w-[250px] h-[24px] text-[#898989] mt-[20px]">CHỌN PHƯƠNG THỨC THANH TOÁN</p>
					<div className="flex justify-between">
						<div>
							<div className="flex items-center mb-[12px]">
								<img src={cardBank} />
								<p className="mb-0 font-semibold text-[14px] ml-[12px]">Thẻ ngân hàng nội địa</p>
							</div>
							<div className="flex items-center">
								<img src={vnpay} />
								<p className="mb-0 font-semibold text-[14px] ml-[12px]">Thanh toán qua VNPAY</p>
							</div>
						</div>
						<Radio.Group style={{ height: '87px', float: 'right' }}>
							<Space direction="vertical" style={{ marginTop: '12px' }}>
								<Radio value={1} />
								<Radio style={{ marginTop: '21px' }} value={2} />
							</Space>
						</Radio.Group>
					</div>
				</div>
				<p className="w-[543px] h-[42px] mt-[28px] mx-auto">
					Tôi đã đọc và đồng ý với việc chia sẻ những thông tin trên theo <b> Chính sách bảo mật</b>
					của myLocal.vn
				</p>
			</div>
		</div>
	);
}
