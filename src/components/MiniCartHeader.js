import { Badge, Space } from "antd";
import Link from "next/link";

const MiniCartHeader = () => {
	return (
		<div className="minicart__header">
			<Space size={3}>
				<Badge
					showZero
					count={0}
					style={{ backgroundColor: '#52c41a' }}
				/>
				<h3 className="minicart__title">Item</h3>
			</Space>
			<Link href='/cart' className="view__cart">
				View Cart
			</Link>
		</div>

	)
}

export default MiniCartHeader;