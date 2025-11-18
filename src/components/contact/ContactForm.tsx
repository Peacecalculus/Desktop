'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	email: z.string().email('Invalid email address'),
	subject: z.string().min(3, 'Subject is required'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: FormData) => {
		await new Promise((resolve) => setTimeout(resolve, 1200));
		console.log('Submitted:', data);
		toast.success("Thank you! We'll get back to you soon.");
		reset();
	};

	return (
		<Card className='bg-white border-0 shadow-2xl rounded-3xl overflow-hidden'>
			<div className='p-10 md:p-12'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='space-y-8'>
					<div className='grid md:grid-cols-2 gap-8'>
						<div>
							<Label
								htmlFor='name'
								className='text-gray-700 font-semibold mb-3 block'>
								Name
							</Label>
							<Input
								id='name'
								placeholder='Your name'
								{...register('name')}
								className='h-14 rounded-xl border-gray-300 focus:border-[#800020] focus:ring-[#800020]'
							/>
							{errors.name && (
								<p className='text-red-500 text-sm mt-2'>
									{errors.name.message}
								</p>
							)}
						</div>

						<div>
							<Label
								htmlFor='email'
								className='text-gray-700 font-semibold mb-3 block'>
								Email
							</Label>
							<Input
								id='email'
								type='email'
								placeholder='you@example.com'
								{...register('email')}
								className='h-14 rounded-xl border-gray-300 focus:border-[#800020] focus:ring-[#800020]'
							/>
							{errors.email && (
								<p className='text-red-500 text-sm mt-2'>
									{errors.email.message}
								</p>
							)}
						</div>
					</div>

					<div>
						<Label
							htmlFor='subject'
							className='text-gray-700 font-semibold mb-3 block'>
							Subject
						</Label>
						<Input
							id='subject'
							placeholder='How can we help?'
							{...register('subject')}
							className='h-14 rounded-xl border-gray-300 focus:border-[#800020] focus:ring-[#800020]'
						/>
						{errors.subject && (
							<p className='text-red-500 text-sm mt-2'>
								{errors.subject.message}
							</p>
						)}
					</div>

					<div>
						<Label
							htmlFor='message'
							className='text-gray-700 font-semibold mb-3 block'>
							Message
						</Label>
						<Textarea
							id='message'
							placeholder='Tell us more about your inquiry...'
							rows={7}
							{...register('message')}
							className='rounded-xl border-gray-300 focus:border-[#800020] focus:ring-[#800020] resize-none'
						/>
						{errors.message && (
							<p className='text-red-500 text-sm mt-2'>
								{errors.message.message}
							</p>
						)}
					</div>

					<Button
						type='submit'
						disabled={isSubmitting}
						className='w-full h-16 bg-[#800020] hover:bg-[#600018] text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3'>
						{isSubmitting ? 'Sending...' : 'Send Message'}
						<Send className='w-5 h-5' />
					</Button>
				</form>
			</div>
		</Card>
	);
}
