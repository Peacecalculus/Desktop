import { Card } from '@/components/ui/card';
import { Target, Lightbulb } from 'lucide-react';
import { PRIMARY_COLOR, ACCENT_COLOR } from '@/lib/constants';

export default function MissionVision() {
	return (
		<section className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='grid lg:grid-cols-2 gap-12'>
					<Card className='bg-white border-0 shadow-xl rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
						<div
							className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
							style={{ backgroundColor: ACCENT_COLOR }}
						>
							<Target className='w-9 h-9' style={{ color: PRIMARY_COLOR }} />
						</div>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>
							Our Mission
						</h3>
						<p className='text-lg text-gray-600 leading-relaxed'>
							To empower businesses of all sizes with intelligent
							inventory management tools that are simple to use,
							powerful to run, and beautiful to look at. We
							believe every business deserves software that works
							for them — not the other way around.
						</p>
					</Card>

					<Card className='bg-white border-0 shadow-xl rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
						<div
							className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
							style={{ backgroundColor: ACCENT_COLOR }}
						>
							<Lightbulb className='w-9 h-9' style={{ color: PRIMARY_COLOR }} />
						</div>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>
							Our Vision
						</h3>
						<p className='text-lg text-gray-600 leading-relaxed'>
							To become the world&apos;s most trusted inventory
							management platform, helping millions of businesses
							eliminate stock headaches and unlock new growth
							opportunities. We envision a future where inventory
							is never a bottleneck — only a superpower.
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
}