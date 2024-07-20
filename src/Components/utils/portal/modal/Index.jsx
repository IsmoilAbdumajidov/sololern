export default function Modal({ title, className, children }) {
	return (
		<div className='w-full z-50 h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm bg-black/30 bottom-0 right-0'>
			<div
				className={`bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-md w-full sm:w-auto mx-4 sm:min-w-[500px] max-h-[90vh] overflow-y-scroll ${className}`}
			>
				<h1 className='text-2xl font-medium mx-auto text-center mb-6'>
					{title}
				</h1>
				<div>{children}</div>
			</div>
		</div>
	);
}
