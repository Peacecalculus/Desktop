import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoCards from '@/components/contact/ContactInfoCards';

export default function ContactPage() {
	return (
		<>
			<ContactHero />
			<section className='pt-10 pb-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid gap-8 items-start lg:grid-cols-[60%_40%]'>
						<ContactForm />
						<ContactInfoCards />
					</div>
				</div>
			</section>
		</>
	);
}
