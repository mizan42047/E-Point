import { Modal } from "antd";

const EpModal = ({isModalOpen, setIsModalOpen, children}) => {
	const handleCloseModal = ()=> {
		setIsModalOpen(false);
	}
	return (
		<Modal
			centered
			open={isModalOpen}
			onCancel={handleCloseModal}
			okButtonProps={{
				style: {display: 'none'}
			}}
			cancelButtonProps={{
				style: {display: 'none'}
			}}
		>
			{children}
		</Modal>

	)
}

export default EpModal;