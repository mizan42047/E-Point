import { Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const DrawerTitle = () => {
  return (
    <Link href='/'>
      <Space size={2}>
        <Image src='/logo.png' alt='Logo' width={40} height={40} />
        <h1 className="drawer-title">E-Point</h1>
      </Space>
    </Link>
  )
}

export default DrawerTitle;