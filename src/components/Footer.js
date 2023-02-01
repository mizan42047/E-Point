import { Avatar, Space } from "antd";
import Image from "next/image";
import styles from '@/styles/footer.module.scss';
import PageList from "./PageList";
import Link from "next/link";
import { FacebookFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={styles.footer__grid}>
					<div className={styles['footer__grid--item']}>
						<Image src='/FastDelivery.svg' alt='Fast Delivery' width={45} height={45} />
						<p className="footer__item--description">
							Free shipping for order more than $240.
						</p>
					</div>
					<div className={styles['footer__grid--item']}>
						<Image src='/warranty.svg' alt='Warranty' width={45} height={45} />
						<p className="footer__item--description">
							Five years of warranty on all products
						</p>
					</div>
					<div className={styles['footer__grid--item']}>
						<Image src='/return.svg' alt='Fast Delivery' width={45} height={45} />
						<p className="footer__item--description">
							30 days free return & replacments
						</p>
					</div>
					<div className={styles['footer__grid--item']}>
						<Image src='/apple.svg' alt='Fast Delivery' width={45} height={45} />
						<p className="footer__item--description">
							Our Apps are available in Appstore.
						</p>
					</div>
					<div className={styles['footer__grid--item']}>
						<Image src='/googleplay.svg' alt='Fast Delivery' width={45} height={45} />
						<p className="footer__item--description">
							Android app is also available in Playstore.
						</p>
					</div>
				</div>
				<div className={styles.grid__links}>
					<div className={styles['grid__links--item']}>
						<PageList title="Shopping" lists={[
							{
								name: 'My Account',
								path: '/my-account'
							},
							{
								name: 'Shipping',
								path: '/shipping'
							},
							{
								name: 'Orders',
								path: '/orders'
							},
							{
								name: 'Terms & Conditions',
								path: '/terms-condition'
							},
						]} />
					</div>
					<div className={styles['grid__links--item']}>
						<PageList title="Quick Links" lists={[
							{
								name: 'About Us',
								path: '/about-us'
							},
							{
								name: 'Shop Locator',
								path: '/shop-locator'
							},
							{
								name: 'Privacy & Policy',
								path: '/privacy-policy'
							},
							{
								name: 'Contact Us',
								path: '/contct-us'
							},
						]} />
					</div>
					<div className={styles['grid__links--item']}>
						<PageList title="Shopping" lists={[
							{
								name: 'My Account',
								path: '/my-account'
							},
							{
								name: 'Shipping',
								path: '/shipping'
							},
							{
								name: 'Orders',
								path: '/orders'
							},
							{
								name: 'Terms & Conditions',
								path: '/terms-condition'
							},
						]} />
					</div>
					<div className={styles['grid__links--item']}>
						<PageList title="Quick Links" lists={[
							{
								name: 'About Us',
								path: '/about-us'
							},
							{
								name: 'Shop Locator',
								path: '/shop-locator'
							},
							{
								name: 'Privacy & Policy',
								path: '/privacy-policy'
							},
							{
								name: 'Contact Us',
								path: '/contct-us'
							},
						]} />
					</div>
					<div className={styles['grid__links--item']}>
						<div className="page__list">
							<h3 className="list__title">Contact</h3>
							<div className="page__list--items">
								PO Box. 16122, Collins <br /> Street, Victoria, Australia.
							</div>
							<h3 className={styles['social__list--title']}>Social Links</h3>
							<Space wrap style={{ padding: '8px 0' }}>
								<Link href='https://google.com' target='_blank'>
									<Avatar shape="circle" size="medium" style={{ background: '#0674e7' }}>
										<FacebookFilled />
									</Avatar>
								</Link>
								<Link href='https://google.com' target='_blank'>
									<Avatar shape="circle" size="medium" style={{ background: '#de4d40' }}>
										<MailFilled />
									</Avatar>
								</Link>
								<Link href='https://google.com' target='_blank'>
									<Avatar shape="circle" size="medium" style={{ background: '#028f14ad' }}>
										<PhoneFilled />
									</Avatar>
								</Link>
							</Space>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;