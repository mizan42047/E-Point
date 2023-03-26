import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__content">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					speed={2000}
					parallax={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false
					}}
					modules={[Autoplay, Parallax, Pagination]}
					className="e-point-swiper"
				>
					<SwiperSlide>
						<Image src="/slider1.jpg" alt='Women Fashion' width={2048} height={1024} />
						<div className="slider__overlay"></div>
						<div className="slider__content">
							<Image src='/black.svg' alt='Black Friday' width={600} height={600} className="offer-name" />
							<Image src='/sale.svg' alt='50% Sale' width={400} height={400} className="offer-amount" />
							<Button className='purchase-btn' style={{ background: '#FBF6F0' }} size='large' type="primary" shape="square" icon={<ShoppingCartOutlined />} title="Purchase Now">Purchase Now</Button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<Image src="/slider2.jpg" alt='Women Fashion' width={2048} height={1024} />
						<div className="slider__overlay right"></div>
						<div className="slider__content right">
							<Image src='/black.svg' alt='Black Friday' width={600} height={600} className="offer-name" />
							<Image src='/sale.svg' alt='50% Sale' width={400} height={400} className="offer-amount" />
							<Button className='purchase-btn' style={{ background: '#FBF6F0' }} size='large' type="primary" shape="square" icon={<ShoppingCartOutlined />} title="Purchase Now">Purchase Now</Button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<Image src="/slider3.jpg" alt='Women Fashion' width={2048} height={1024} />
						<div className="slider__overlay"></div>
						<div className="slider__content">
							<Image src='/black.svg' alt='Black Friday' width={600} height={600} className="offer-name" />
							<Image src='/sale.svg' alt='50% Sale' width={400} height={400} className="offer-amount" />
							<Button className='purchase-btn' style={{ background: '#FBF6F0' }} size='large' type="primary" shape="square" icon={<ShoppingCartOutlined />} title="Purchase Now">Purchase Now</Button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<Image src="/slider4.jpg" alt='Women Fashion' width={2048} height={1024} />
						<div className="slider__overlay right"></div>
						<div className="slider__content right">
							<Image src='/black.svg' alt='Black Friday' width={600} height={600} className="offer-name" />
							<Image src='/sale.svg' alt='50% Sale' width={400} height={400} className="offer-amount" />
							<Button className='purchase-btn' style={{ background: '#FBF6F0' }} size='large' type="primary" shape="square" icon={<ShoppingCartOutlined />} title="Purchase Now">Purchase Now</Button>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Banner;