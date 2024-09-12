import { Outlet, useLocation } from 'react-router-dom';
import GoToTop from './GoToTop';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) { 
	return (
		<div className='h-[100vh]'>
			<Toaster />
			<div
				className={`relative z-20 min-h-[100vh]`}
			>
				<GoToTop />
				<Outlet />
			</div>
		</div>
	);
}
