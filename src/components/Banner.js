import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import { Space } from 'antd';

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
					modules={[Autoplay, Parallax, Pagination]}
					className="e-point-swiper"
				>
					<SwiperSlide>
						<Space size={0} style={{width: "100%"}}>
							<Image src='/lady-1.png' alt='lady' width={1200} height={1200}/>
							<Image src='/lady-2.png' alt='lady' width={1200} height={1200}/>
						</Space>
						<h1>Slider 1</h1>
					</SwiperSlide>
					<SwiperSlide>
						<Space size={0}>
							<Image src='/lady-3.png' alt='lady' width={1200} height={1200}/>
							<Image src='/lady-4.png' alt='lady' width={1200} height={1200}/>
						</Space>
						<h1>Slider 2</h1>
					</SwiperSlide>
					<SwiperSlide>
						<Space size={0}>
							<Image src='/men-1.png' alt='lady' width={1200} height={1200}/>
							<Image src='/men-2.png' alt='lady' width={1200} height={1200}/>
						</Space>
					</SwiperSlide>
					<SwiperSlide>
						<Space size={0}>
							<Image src='/men-3.png' alt='lady' width={1200} height={1200}/>
							<Image src='/men-4.png' alt='lady' width={1200} height={1200}/>
						</Space>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Banner;