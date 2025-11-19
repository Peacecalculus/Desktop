import { PRIMARY_MAROON, INPUT_BG } from "./shared";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <div className="col-span-2 mt-6 md:mt-0">
      <h3 className="font-semibold mb-3">Subscribe to Our Newsletter</h3>
      <p className="text-gray-400 text-sm mb-4">
        Get the latest updates and inventory management tips.
      </p>

      <div className="flex gap-2 items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-3 px-4 w-full rounded-l-md text-sm text-white focus:outline-none border-[#374151]"
          style={{ backgroundColor: INPUT_BG }}
        />

        <Button
          className="py-3 px-6 rounded-r-md text-sm font-semibold whitespace-nowrap hover:brightness-110 hover:cursor-pointer"
          style={{ backgroundColor: PRIMARY_MAROON, color: "white" }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}