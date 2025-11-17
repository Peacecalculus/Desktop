import { Button } from '@/components/ui/button';

export default function FinalCTA() {
	return (
		<section className='bg-[#800020] py-20'>
			<div className='max-w-4xl mx-auto px-6 text-center text-white'>
				<h2 className='text-4xl md:text-5xl font-bold mb-6'>
					Join Us on Our Journey
				</h2>
				<p className='text-xl text-red-100 mb-10 max-w-2xl mx-auto'>
					Whether youre looking to transform your inventory management
					or just want to say hi, we&apos;d love to hear from you.
				</p>
				<div className='flex flex-col sm:flex-row gap-6 justify-center'>
					<Button
						size='lg'
						className='bg-white text-[#800020] hover:bg-gray-100 px-10 h-14 text-lg font-bold rounded-xl'>
						Start Free Trial
					</Button>
					<Button
						size='lg'
						variant='outline'
						className='border-white text-white hover:bg-white/10 px-10 h-14 text-lg font-bold rounded-xl'>
						Get in Touch
					</Button>
				</div>
			</div>
		</section>
	);
}
