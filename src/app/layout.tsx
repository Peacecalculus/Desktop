'use client';

import './globals.css';
import LayoutWrapper from './layout/LayoutWrapper';
import { usePathname } from 'next/navigation';

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const path = usePathname();
	const isWaitlistPage =
		path === '/' || path === '/waitlist/success' || path === '/waitlist/error';

	return (
		<html lang='en'>
			<body className={`antialiased`}>
				{isWaitlistPage ? (
					children
				) : (
					<LayoutWrapper>{children}</LayoutWrapper>
				)}
			</body>
		</html>
	);
}
