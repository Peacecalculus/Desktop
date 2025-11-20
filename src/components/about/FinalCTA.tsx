import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const FinalCTA: React.FC = () => {
  return (
    <section className='bg-[#800020] py-24 text-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center space-y-6'>
          <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
            Ready to Transform Your Inventory?
          </h2>
          <p className='text-lg md:text-xl text-white/80'>
            Join businesses that are saving time, reducing errors, and improving visibility with StockKeeper.
          </p>
        </div>

        <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link href='/waitlist'>
            <Button
              className='cursor-pointer bg-[#fff] text-[#800020] border border-[#800020] hover:bg-[#800020] hover:text-white hover:border-[#fff] px-10 h-14 text-lg font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-101'
            >
              Start Free Trial
            </Button>
          </Link>

          <Link href='/contact'>
            <Button
              variant='outline'
              className='cursor-pointer border-white text-white bg-transparent hover:bg-white hover:text-[#800020] hover:border-[#800020] px-10 h-14 text-lg font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105'
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA