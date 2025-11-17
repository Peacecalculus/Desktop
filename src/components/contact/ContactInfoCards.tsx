import { Card } from '@/components/ui/card';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ContactInfoCards() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/stockkeeper' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/stockkeeper' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/stockkeeper' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/stockkeeper' },
  ];

  return (
    <div className="space-y-10">
      {/* Email */}
      <Card className="bg-white border-0 shadow-xl rounded-3xl p-8 flex items-start gap-6 hover:shadow-2xl transition-shadow">
        <div className="bg-[#F9D0D9] p-4 rounded-2xl">
          <Mail className="w-8 h-8 text-[#800020]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Email</h3>
          <p className="text-gray-600 mt-1">Our team is here to help</p>
          <a
            href="mailto:support@stockkeeper.com"
            className="text-[#800020] font-bold text-lg mt-3 block hover:underline"
          >
            support@stockkeeper.com
          </a>
        </div>
      </Card>

      {/* Phone */}
      <Card className="bg-white border-0 shadow-xl rounded-3xl p-8 flex items-start gap-6 hover:shadow-2xl transition-shadow">
        <div className="bg-[#F9D0D9] p-4 rounded-2xl">
          <Phone className="w-8 h-8 text-[#800020]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Phone</h3>
          <p className="text-gray-600 mt-1">Mon–Fri from 8am to 6pm</p>
          <a
            href="tel:+1234567890"
            className="text-[#800020] font-bold text-lg mt-3 block hover:underline"
          >
            +1 (234) 567-890
          </a>
        </div>
      </Card>

      {/* Social Follow Card */}
      <Card className="bg-[#800020] text-white rounded-3xl p-10 shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <p className="text-red-100 mb-8">Stay connected on social media</p>
        <div className="flex gap-5">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              className="bg-white/20 hover:bg-white/30 w-14 h-14 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
}