import Image from 'next/image'

export default function OurStory() {
	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='grid md:grid-cols-2 items-center gap-10'>
					<div>
						<Image
							src='/inventory-management.png'
							alt='Inventory management illustration'
							width={900}
							height={700}
							className='w-full h-auto rounded-xl shadow-md'
							priority={false}
						/>
					</div>
					<div className='text-center md:text-left'>
						<h2 className='text-4xl font-bold text-gray-900 mb-8'>
							Our Story
						</h2>
						<p className='text-lg text-gray-600 leading-relaxed'>
							StockKeeper was founded in 2020 by a group of entrepreneurs who experienced first-hand the challenges of managing inventory across multiple warehouses. Frustrated with clunky, expensive software, they knew there had to be a better way.
							<br />
							<br />
							We started with a simple mission: build the inventory tool we always wished existed — fast, beautiful, and intuitive. Today, over 5,000 businesses across 30+ countries trust StockKeeper to run their operations smoothly.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
