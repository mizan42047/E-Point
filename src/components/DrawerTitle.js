import { Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "@next/font/google";
const righteous = Bebas_Neue({
  weight: '400',
  subsets: ["latin"]
 });

const DrawerTitle = () => {
  return (
    <Link href='/'>
      <Space size={2} className={righteous.className}>
        <Image src='/logo.png' alt='Logo' width={40} height={40} />
        <h1 className="drawer-title">E-Point</h1>
      </Space>
    </Link>
  )
}

export default DrawerTitle;