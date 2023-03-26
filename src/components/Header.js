import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Avatar, Badge, Button, Select, Space } from 'antd';
import { FacebookFilled, LoginOutlined, MailFilled, MenuOutlined, PhoneFilled, SearchOutlined, ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import styles from '@/styles/header.module.scss';
import { useState } from 'react';
import EpDrawer from './EpDrawer';
import MiniCartHeader from './MiniCartHeader';
import MinicartFooter from './MinicartFooter';
import EpModal from './EpModal';

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isMiniCartDrawerOpen, setIsMiniCartDrawerOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { pathname } = useRouter();
	const handleResponsiveMenu = () => {
		setIsDrawerOpen(true);
	}
	const handleMiniCart = () => {
		setIsMiniCartDrawerOpen(true);
	}

	const handleSearh = () => {
		setIsModalOpen(true);
	}

	const onChange = (value) => {
		console.log(`selected ${value}`);
	};
	const onSearch = (value) => {
		console.log('search:', value);
	};
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__content}>
					<div className={styles.header__logo}>
						<Link href='/'>
							<Image src='/logo.png' alt='Logo' width={60} height={60} className={styles.logo__img} />
						</Link>
					</div>
					<ul className={styles.header__menu}>
						<li className={styles.menu__item}>
							<Link className={pathname === '/' ? styles.active : undefined} href='/'>Shop</Link>
						</li>
						<li className={styles.menu__item}>
							<Link className={pathname === '/cart' ? styles.active : undefined} href='/cart'>Cart</Link>
						</li>
						<li className={styles.menu__item}>
							<Link className={pathname === '/checkout' ? styles.active : undefined} href='/checkout'>Checkout</Link>
						</li>
						<li className={styles.menu__item}>
							<Link className={pathname === '/blog' ? styles.active : undefined} href='/my-account'>Blog</Link>
						</li>
						<li className={styles.menu__item}>
							<Link className={pathname === '/news' ? styles.active : undefined} href='/my-account'>News</Link>
						</li>
						<li className={styles.menu__item}>
							<Link className={pathname === '/my-account' ? styles.active : undefined} href='/my-account'>My Account</Link>
						</li>
					</ul>
					<Space size={20}>
						<Badge count={5} onClick={handleMiniCart} style={{ cursor: 'pointer' }}>
							<Avatar shape="square" size="medium" style={{ background: '#CFA97C', cursor: 'pointer' }}>
								<ShoppingCartOutlined />
							</Avatar>
						</Badge>
						<Button onClick={handleSearh} style={{ background: '#CFA97C' }} size='middle' type="primary" shape="square" icon={<SearchOutlined />} />
						<Button onClick={handleResponsiveMenu} className={styles.responsiveMenuBar} style={{ background: '#CFA97C' }} size='middle' type="primary" shape="square" icon={<MenuOutlined />} />

					</Space>
					<Space className={styles.register}>
						<Button style={{ background: '#CFA97C' }} type="primary" icon={<LoginOutlined />}>
							Login
						</Button>
						<Button style={{ background: '#CFA97C' }} type="primary" icon={<UserAddOutlined />}>
							Sign in
						</Button>
					</Space>

					<ul className={styles.social__menu}>
						<li className={styles['social__menu--item']}>
							<Link href='https://google.com' target='_blank'>
								<Avatar shape="circle" size="medium" style={{ background: '#0674e7' }}>
									<FacebookFilled />
								</Avatar>
							</Link>
						</li>
						<li className={styles['social__menu--item']}>
							<Link href='https://google.com' target='_blank'>
								<Avatar shape="circle" size="medium" style={{ background: '#de4d40' }}>
									<MailFilled />
								</Avatar>
							</Link>
						</li>
						<li className={styles['social__menu--item']}>
							<Link href='https://google.com' target='_blank'>
								<Avatar shape="circle" size="medium" style={{ background: '#028f14ad' }}>
									<PhoneFilled />
								</Avatar>
							</Link>
						</li>
					</ul>
				</div>
			</header>
			<EpDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
				<ul className={styles['responsive-mobile-menu']}>
					<li className={styles.menu__item}>
						<Link className={pathname === '/' ? styles.active : undefined} href='/'>Shop</Link>
					</li>
					<li className={styles.menu__item}>
						<Link className={pathname === '/cart' ? styles.active : undefined} href='/cart'>Cart</Link>
					</li>
					<li className={styles.menu__item}>
						<Link className={pathname === '/checkout' ? styles.active : undefined} href='/checkout'>Checkout</Link>
					</li>
					<li className={styles.menu__item}>
						<Link className={pathname === '/blog' ? styles.active : undefined} href='/my-account'>Blog</Link>
					</li>
					<li className={styles.menu__item}>
						<Link className={pathname === '/news' ? styles.active : undefined} href='/my-account'>News</Link>
					</li>
					<li className={styles.menu__item}>
						<Link className={pathname === '/my-account' ? styles.active : undefined} href='/my-account'>My Account</Link>
					</li>
				</ul>
				<Space wrap style={{ padding: '8px 0' }}>
					<Button size='small' style={{ background: '#CFA97C' }} type="primary" icon={<LoginOutlined />}>
						Login
					</Button>
					<Button size='small' style={{ background: '#CFA97C' }} type="primary" icon={<UserAddOutlined />}>
						Sign in
					</Button>
				</Space>
			</EpDrawer>
			<EpDrawer isDrawerOpen={isMiniCartDrawerOpen} setIsDrawerOpen={setIsMiniCartDrawerOpen} drawerTitle={<MiniCartHeader />} footerContent={<MinicartFooter />}></EpDrawer>

			<EpModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
				<Select
					style={{width: '100%', padding: '4rem 0'}}
					showSearch
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={onChange}
					onSearch={onSearch}
					filterOption={(input, option) =>
						(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
					}
					options={[
						{
							value: 'jack',
							label: 'Jack',
						},
						{
							value: 'lucy',
							label: 'Lucy',
						},
						{
							value: 'tom',
							label: 'Tom',
						},
					]}
				/>
			</EpModal>
		</>
	)
}

export default Header;