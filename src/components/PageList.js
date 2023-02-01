import Link from "next/link";

const PageList = ({ title, lists }) => {
	const pageLists = lists ? [...lists] : [];
	return (
		<div className="page__list">
			{
				title && <h3 className="list__title">{title}</h3>
			}
			<div className="page__list--items">
				{
					pageLists && pageLists.map((item, index) => {
						return (
							<Link key={index} href={item.path}>{item.name}</Link>
						)
					})
				}
			</div>
		</div>
	)
}

export default PageList;