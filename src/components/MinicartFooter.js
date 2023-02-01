import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Link from "next/link";

const MinicartFooter = () => {
	return (
		<div className="minicart__footer">
			<Link href="/cart">
				<Button size="large" style={{ background: '#000', borderRadius: '0', width: '100%' }} type="primary" icon={<ShoppingCartOutlined />}>Cart</Button>
			</Link>
			<Link href="/checkout">
				<Button size="large" style={{ background: '#000', borderRadius: '0', width: '100%' }} type="primary" icon={<ShoppingOutlined />}>Checkout</Button>
			</Link>
		</div>
	)
}

export default MinicartFooter;