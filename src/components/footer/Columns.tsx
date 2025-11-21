import Link from "next/link";

export default function FooterColumns() {
	return (
		<>
			{/* Product */}
			<div className="col-span-1">
				<h3 className="font-semibold mb-4 text-white">Product</h3>
				<ul className="space-y-3 text-sm text-gray-400">
					<li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
					<li><Link href="/mobile-app" className="hover:text-white transition-colors">Mobile Apps</Link></li>
					<li><Link href="/updates" className="hover:text-white transition-colors">Updates</Link></li>
				</ul>
			</div>

			{/* Support */}
			<div className="col-span-1">
				<h3 className="font-semibold mb-4 text-white">Support</h3>
				<ul className="space-y-3 text-sm text-gray-400">
					<li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
					<li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
				</ul>
			</div>

			{/* Company */}
			<div className="col-span-1">
				<h3 className="font-semibold mb-4 text-white">Company</h3>
				<ul className="space-y-3 text-sm text-gray-400">
					<li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
					<li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
					<li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
				</ul>
			</div>
		</>
	);
}