import { FaCalendar, FaCircleCheck, FaRocket } from "react-icons/fa6";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="bg-[#800020] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Inventory Management?
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses already using StockKeeper. Start your
          free trial today!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            variant="secondary"
            className="flex items-center justify-center gap-2 py-4 font-semibold cursor-pointer"
          >
            <FaRocket /> Start Your 14-Day Free Trial
          </Button>
          <Button className="flex items-center justify-center gap-2 py-4 font-semibold outline-2 outline-white cursor-pointer">
            <FaCalendar /> Schedule a Demo
          </Button>
        </div>

        <div className="flex flex-row gap-8 items-center justify-center text-[#FCE7EB] mt-8">
          <div className="flex flex-row items-center justify-center gap-4 text-sm">
            <FaCircleCheck />
            <p>No credit card required</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 text-sm">
            <FaCircleCheck />
            <p>Setup in minutes</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 text-sm">
            <FaCircleCheck />
            <p>Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
