import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { PRIMARY_MAROON } from "./shared";

const SocialIcon = ({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
  >
    {children}
  </Link>
);

export default function FooterBrand() {
  return (
    <div className="col-span-2">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="h-6 w-6 rounded overflow-hidden"
          style={{ backgroundColor: PRIMARY_MAROON }}
        >
          <Image
            src="/logo.png"
            alt="StockKeeper Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-cover"
          />
        </div>

        <span className="text-xl font-bold">StockKeeper</span>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Smart inventory management made simple for modern businesses.
      </p>

      <div className="flex space-x-3 mt-6">
        <SocialIcon href="https://facebook.com" label="Facebook">
          <Facebook size={20} />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" label="Twitter">
          <Twitter size={20} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" label="LinkedIn">
          <Linkedin size={20} />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" label="Instagram">
          <Instagram size={20} />
        </SocialIcon>
      </div>
    </div>
  );
}
