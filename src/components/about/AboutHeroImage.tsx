import Image from 'next/image';

export default function AboutHeroImage() {
	return (
		<section className='max-w-7xl mx-auto px-6 -mt-10 mb-20'>
			<div className='rounded-3xl overflow-hidden shadow-2xl border border-gray-100'>
				{/* Replace with your real image */}
				<div className='bg-gray-200 border-2 border-dashed rounded-3xl w-full h-96 md:h-[520px]' />
				{/* <Image src="/business-handshake-partnership-image.png" alt="Team collaborating" className="w-full h-full object-cover" /> */}
			</div>
		</section>
	);
}
