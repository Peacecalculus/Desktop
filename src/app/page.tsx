'use client';

import WaitList from '@/pages/external/waitlistPage';
// import Footer from '@components/Footer';
// import Navigation from '@components/Navigation';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	return (
		<>
			<WaitList />
			<button onClick={() => router.push('/about')}>About</button>
			<button onClick={() => router.push('/contact')}>Contact</button>
		</>
	);
}