import { Card } from '@/components/ui/card';
import { Heart, Zap, Shield, Sparkles, Target, Users } from 'lucide-react';
import { PRIMARY_COLOR, ACCENT_COLOR } from '@/lib/constants';

const values = [
	{
		icon: Heart,
		title: 'Customer First',
		desc: 'We obsess over customer success. Your win is our win.',
	},
	{
		icon: Zap,
		title: 'Innovation',
		desc: 'We constantly push boundaries and embrace cutting-edge solutions.',
	},
	{
		icon: Shield,
		title: 'Integrity',
		desc: 'We do the right thing — always. Transparency and honesty are non-negotiable.',
	},
	{
		icon: Sparkles,
		title: 'Simplicity',
		desc: 'We design software that’s powerful yet incredibly easy to use.',
	},
	{
		icon: Target,
		title: 'Excellence',
		desc: 'Good enough isn’t enough. We strive for exceptional in everything.',
	},
	{
		icon: Users,
		title: 'Collaboration',
		desc: 'We win as a team. Together, we achieve more.',
	},
];

export default function CoreValues() {
	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-6'>
				<h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>
					Our Core Values
				</h2>
				<p className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'>
					The principles that guide everything we do
				</p>

				<div className='grid md:grid-cols-3 gap-8'>
					{values.map(({ icon: Icon, title, desc }) => (
						<Card
							key={title}
							className='bg-gray-50 border-0 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
							<div
								className='w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6'
								style={{ backgroundColor: ACCENT_COLOR }}
							>
								<Icon className='w-8 h-8' style={{ color: PRIMARY_COLOR }} />
							</div>
							<h4 className='text-xl font-bold text-gray-900 mb-3'>
								{title}
							</h4>
							<p className='text-gray-600'>{desc}</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}