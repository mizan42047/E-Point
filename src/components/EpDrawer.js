import { FacebookFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import { Avatar, Drawer, Space } from "antd";
import Link from "next/link";
import DrawerTitle from "./DrawerTitle";

const EpDrawer = ({ isDrawerOpen, setIsDrawerOpen, drawerTitle, children, footerContent }) => {
	const onClose = () => {
		setIsDrawerOpen(false);
	}
	return (
		<Drawer
			title={drawerTitle ? drawerTitle : <DrawerTitle/>}
			placement='right'
			closable={false}
			onClose={onClose}
			open={isDrawerOpen}
			key='right'
			width='min(378px, 60vw)'
			footer={footerContent ? footerContent : <Space wrap style={{ padding: '8px 0' }}>
			<Link href='https://google.com' target='_blank'>
				<Avatar shape="circle" size="small" style={{ background: '#0674e7' }}>
					<FacebookFilled />
				</Avatar>
			</Link>
			<Link href='https://google.com' target='_blank'>
				<Avatar shape="circle" size="small" style={{ background: '#de4d40' }}>
					<MailFilled />
				</Avatar>
			</Link>
			<Link href='https://google.com' target='_blank'>
				<Avatar shape="circle" size="small" style={{ background: '#028f14ad' }}>
					<PhoneFilled />
				</Avatar>
			</Link>
		</Space>}
		>
			{children}
		</Drawer>
	)
}

export default EpDrawer;