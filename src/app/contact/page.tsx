import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoCards from '@/components/contact/ContactInfoCards';

export default function ContactPage() {
	return (
		<>
			<ContactHero />
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-start'>
						<ContactForm />
						<ContactInfoCards />
					</div>
				</div>
			</section>
		</>
	);
}
