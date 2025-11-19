import Image from "next/image";
import { PRIMARY_MAROON } from "./shared";

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

      {/* <div className="flex space-x-3 mt-6">
        <SocialIcon>f</SocialIcon>
        <SocialIcon>t</SocialIcon>
        <SocialIcon>in</SocialIcon>
        <SocialIcon>i</SocialIcon>
      </div> */}
    </div>
  );
}