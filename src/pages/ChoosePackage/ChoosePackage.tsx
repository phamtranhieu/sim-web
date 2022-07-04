import React, { useState } from 'react';
import button from '../../image/arrow - 1-left.png';
import logo from '../../image/logo - type - head.png';
import UI from '../../image/UI.png';
import { useDispatch, useSelector } from 'react-redux';

import { Steps, Button, message } from 'antd';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Step5 from './Step5/Step5';
import AccordanceStep3 from '../AccordanceStep3/AccordanceStep3';
import { useSearchParams } from 'react-router-dom';

const { Step } = Steps;

const steps = [
	{
		title: 'Thông tin giữ số',
		content: <Step1 />,
	},
	{
		title: 'Chọn gói cước',
		content: <Step2 />,
	},
	{
		title: 'Thông tin giao hàng',
		content: <Step3 />,
	},
	{
		title: 'Thanh toán',
		content: <Step4 />,
	},
	{
		title: 'Hoàn tất đặt hàng',
		content: <Step5 />,
	},
];

export default function ChoosePackage() {
	// const isShow = useSelector(state => {
	// 	return state.user.;
	// });
	// console.log(isShow);
	const isShow = useSelector((state: any) => state.user.isShowPackage);
	const [searchParams, setSearchParams] = useSearchParams();
	const action = searchParams.get('action');
	const [current, setCurrent] = useState(0);
	const next = () => {
		const newCurrent = current + 1;
		setCurrent(newCurrent);
		setSearchParams({
			action: `Step${newCurrent + 1}`,
		});
	};
	const handleBack = () => {
		console.log(current);
		if (current > 0) {
			setCurrent(current - 1);
			setSearchParams({
				action: `Step${current}`,
			});
			console.log(9);
		}
	};
	return (
		<div className="bg-[#E5E5E5] w-full flex mx-auto">
			<div className="flex mx-auto ">
				<div className="w-[1080px]  bg-white mr-[16px]">
					<div className="header-choose-package w-[1080px] h-[56px] flex items-center justify-center relative">
						<img
							className="w-[26px] h-[26px] absolute left-[12px]"
							src={button}
							alt=""
							onClick={handleBack}
						/>
						<img className="w-[116px] h-[32px]" src={logo} alt="" />
					</div>
					<div className="w-[624px] h-[93px] mx-auto mt-[62px]">
						<Steps current={current} direction="horizontal" labelPlacement="vertical">
							{steps.map(item => (
								<Step key={item.title} title={item.title} />
							))}
						</Steps>
					</div>
					<div className="steps-content">{steps[current].content}</div>
					<div className="w-[464px] h-[36px] p-[12px] flex mx-auto mb-[17px]">
						<img className="w-[24px] h-[24px]" src={UI} alt="" />
						<p className="w-[297px] h-[19px] font-semibold text-[14px] text-center">
							Thời gian thanh toán còn lại: 60 phút 00 giây
						</p>
					</div>
					<div className="steps-action w-[464px] h-[48px] mx-auto mb-30px " style={{ borderRadius: '20px' }}>
						{current < steps.length - 1 && (
							<Button
								style={{ height: '48px', borderRadius: '8px' }}
								className="w-[464px] h-[48px] mx-auto rounded-lg"
								danger
								type="primary"
								onClick={() => next()}
							>
								Tiếp tục
							</Button>
						)}
						{current === steps.length - 1 && (
							<Button type="primary" onClick={() => message.success('Processing complete!')}>
								Done
							</Button>
						)}
						{/* {current > 0 && (
							<Button style={{ marginLeft: 8 }} onClick={() => prev()}>
								Previous
							</Button>
						)} */}
					</div>
				</div>
				{(action == 'Step3' || isShow) && <AccordanceStep3 />}
			</div>
		</div>
	);
}
