import React from 'react'
import { Button } from '@/components/ui/button'

export default function FinalCTA() {
	return (
    <section className="bg-[#800020] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Us on Our Journey
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          Whether youre looking to transform your inventory management or just
          want to say hi, we&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            className="flex items-center bg-white text-[#800020] justify-center gap-2 py-4 px-6 font-semibold 
             rounded-md cursor-pointer border border-transparent
             transition-all duration-300 ease-out
             hover:bg-[#800020] hover:text-white hover:border-white hover:shadow-lg"
          >
             Start Free Trial
          </Button>

          <Button
            className="flex items-center justify-center gap-2 py-4 px-6 font-semibold cursor-pointer 
             text-white border border-white rounded-md
             transition-all duration-300 ease-out
             hover:bg-white hover:text-[#800020] hover:shadow-lg"
          >
             Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
