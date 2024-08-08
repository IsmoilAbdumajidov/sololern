import { useState } from 'react';
import Button from '../Button/Bg';
import { createPortal } from 'react-dom';

export default function Portal({
	ModalContent,
	classNameBtn,
	state,
	text,
	variant,
	data
}) {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<Button
				text={text}
				variant={variant}
				func={() => setShowModal(true)}
				extraClass={classNameBtn}
			/>

			{showModal &&
				createPortal(
					<ModalContent
						state={state}
						data={data}
						onClose={() => setShowModal(false)}
					/>,
					document.body
				)}
		</>
	);
}
