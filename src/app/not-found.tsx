"use client"
import Link from "next/link";
import Image from "next/image"; 

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center p-4">
      <div className="max-w-xl text-center">
        {/* Container styled like your screenshot's central box */}
        <div className="bg-white p-12 rounded-lg shadow-xl text-black">
          {/* Red Box Icon Area */}
          <div className="flex justify-center mb-6">
            <Image
              src="/four-box.png"
              alt="User icon"
              width={52}
              height={52}
              className="h-35 w-35 object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-3">404</h1>
          <h2 className="text-xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page youre looking for doesnt exist or has been moved.
          </p>

          <div className="flex justify-center space-x-4">
            <Link href="/" passHref legacyBehavior>
              <a className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-150">
                ← Back to Home
              </a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-150">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
