"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Check, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { HiUserGroup } from "react-icons/hi2";
import {
  FaTag,
  FaCrown,
  FaGift,
  FaComments,
  FaChartLine,
  FaBarcode,
  FaMobileScreen,
  FaRocket as FaRocketAlt,
} from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdVerified, MdNotifications } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";

const PRIMARY_COLOR = "#800020";
const ACCENT_COLOR = "#FCE7EB";

// Type Definitions//
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface IconCardProps {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  isBenefit?: boolean;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

interface CountdownProps {
  targetDate: Date;
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    let styles = `px-5 py-2.5 sm:px-6 sm:py-3 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base`;

    if (variant === "primary") {
      styles += ` bg-[${PRIMARY_COLOR}] text-white hover:bg-opacity-90`;
    } else if (variant === "secondary") {
      styles += ` bg-white text-[${PRIMARY_COLOR}] border border-[${PRIMARY_COLOR}] hover:bg-gray-50`;
    }
    return (
      <button ref={ref} className={`${styles} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => (
    <input
      type={type}
      className={`
        flex h-10 w-full rounded-lg 
        border border-gray-300 
        bg-background px-4 py-2 text-sm 
        
        focus-visible:outline-none 
        
        focus-visible:ring-2 
        focus-visible:ring-[${PRIMARY_COLOR}] 
        focus-visible:ring-offset-0 
        focus-visible:border-transparent 
        
        // Standard placeholder/disabled styles
        placeholder:text-muted-foreground 
        disabled:cursor-not-allowed disabled:opacity-50 
        shadow-sm 
        ${className}
      `}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border bg-card text-card-foreground shadow-sm p-5 md:p-8 ${className}`}
  >
    {children}
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ children, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 block py-3 md:py-0 px-4" // Added horizontal padding for sidebar items
  >
    {children}
  </a>
);

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownState | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      let calculatedTime: CountdownState | null = null;

      if (difference > 0) {
        calculatedTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(calculatedTime);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: React.ReactElement[] = [];
  if (timeLeft) {
    Object.keys(timeLeft).forEach((intervalKey) => {
      const interval = intervalKey as keyof CountdownState;
      const value = timeLeft[interval];

      timerComponents.push(
        <div
          key={interval}
          className="flex flex-col items-center mx-1 sm:mx-2 md:mx-4 p-4 sm:p-6 bg-white/10 bg-opacity-10 rounded-xl w-16 sm:w-20 md:w-35 shadow-lg"
        >
          <span className="text-xl sm:text-3xl md:text-5xl font-extrabold tabular-nums">
            {value < 10 ? `0${value}` : value || "00"}
          </span>
          <span className="text-xs uppercase tracking-wider mt-1 opacity-80">
            {interval.substring(0, 1)}
          </span>
          <span className="hidden sm:block text-xs md:text-sm uppercase tracking-wider mt-1 opacity-80">
            {interval}
          </span>
        </div>
      );
    });
  }

  return (
    <div className="flex justify-center mt-6">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-white text-lg">Launching Soon!</span>
      )}
    </div>
  );
};

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  isBenefit = false,
}) => {
  return (
    <div
      className={`rounded-xl p-5 sm:p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full
        ${
          isBenefit
            ? "bg-[#FFF5F7] border border-[#F7D9DD]"
            : "bg-white border border-gray-200"
        }
      `}
    >
      <div
        className={`inline-flex p-3 rounded-lg mb-3 sm:mb-4 
          ${isBenefit ? "bg-[#800020]" : "bg-[#F7D9DD]"}
        `}
      >
        <Icon
          size={22}
          strokeWidth={2}
          className={isBenefit ? "text-white" : "text-[#800020]"}
        />
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md p-4 sm:p-5 border border-gray-100">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-base pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 pt-3 mt-3 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Waitlist: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Waitlist form submitted!");

    const messageBox = document.getElementById("waitlist-message-box");
    if (messageBox) {
      messageBox.textContent = "✅ Success! You have joined the waitlist.";
      messageBox.classList.remove("hidden");
      messageBox.classList.add("block");
      setTimeout(() => messageBox.classList.remove("block"), 5000);
      setTimeout(() => messageBox.classList.add("hidden"), 5300);
    }
  };
  const handleScrollToJoin = () => {
    const joinSection = document.getElementById("join");
    joinSection?.scrollIntoView({ behavior: "smooth" });
  };

  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 45);

  return (
    <div
      className="min-h-screen bg-white font-inter"
      style={
        {
          "--primary": PRIMARY_COLOR,
          "--accent": ACCENT_COLOR,
        } as React.CSSProperties
      }
    >
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/logo.png"
                alt="StockKeeper Logo"
                width={30}
                height={30}
                className="h-8 w-auto"
              />
              <span className="text-xl sm:text-[24px] font-bold text-[#111827]">
                StockKeeper
              </span>
            </a>

            {/* 1. WRAP nav and button in a single container and hide on mobile */}
            <div className="hidden md:flex items-center">
              <nav className="flex space-x-3 items-center">
                <NavItem href="#features">Features</NavItem>
                <NavItem href="#benefits">Benefits</NavItem>
                <NavItem href="#faq">FAQ</NavItem>
              </nav>

              <Button
                className={`
            text-sm ml-6
            px-5 py-2.5 sm:px-6 sm:py-3 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
            
            bg-[${PRIMARY_COLOR}] text-white border border-transparent 
            
            hover:bg-white 
            hover:border-[#800020]
            hover:text-[#000000] 
            hover:cursor-pointer
          `}
                onClick={handleScrollToJoin}
              >
                Join Waitlist
              </Button>
            </div>

            {/* 2. Mobile Menu Toggle Button */}
            <button
              className="md:hidden p-2 cursor-pointer" // No need for hover:cursor-pointer here
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-40 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Sidebar Panel (Unchanged) */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 max-w-full shadow-2xl z-50 transform transition-transform duration-300 ease-in-out`}
          style={{
            backgroundColor: ACCENT_COLOR,
            transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
          }}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200 cursor-pointer">
            <span className="text-lg font-bold text-[#111827]">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-gray-900 cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 py-4">
            <NavItem href="#features" onClick={handleNavItemClick}>
              Features
            </NavItem>
            <NavItem href="#benefits" onClick={handleNavItemClick}>
              Benefits
            </NavItem>
            <NavItem href="#faq" onClick={handleNavItemClick}>
              FAQ
            </NavItem>
            {/* Join Waitlist Button (Mobile) */}
            <div className="pt-4 mt-2 border-t border-gray-200 px-4">
              <Button
                variant="primary"
                className="w-full text-base"
                style={{ background: PRIMARY_COLOR }}
                onClick={() => {
                  handleNavItemClick();
                  handleScrollToJoin();
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div
        id="waitlist-message-box"
        className="hidden fixed top-20 left-1/2 -translate-x-1/2 z-100 p-3 rounded-lg bg-green-100 text-green-800 font-medium shadow-xl transition-all duration-300"
      >
        Success message placeholder
      </div>
      {/* --- HERO SECTION --- */}
      <section className="py-12 md:py-24 text-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div
            onClick={handleScrollToJoin}
            className="bg-[#FCE7EB] font-bold text-xs sm:text-[14px] mx-auto flex items-center justify-center rounded-3xl w-auto max-w-xs sm:max-w-md p-2 mb-4 sm:mb-6 cursor-pointer"
            style={{
              color: PRIMARY_COLOR,
              animation: "pulseScaleShadow 2s infinite",
            }}
          >
            <FaRocketAlt className="mr-2 h-4 w-4" />
            Launching Soon - Reserve Your Spot Now
            <style jsx>{`
              @keyframes pulseScaleShadow {
                0%,
                100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(252, 231, 235, 0.5);
                }
                50% {
                  transform: scale(1.05);
                  box-shadow: 0 0 20px 10px rgba(252, 231, 235, 0.5);
                }
              }
            `}</style>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Smart Inventory Management
            <br />
            <span className="" style={{ color: PRIMARY_COLOR }}>
              Made Simple
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join <b>2,847</b> businesses waiting for the revolutionary platform
            that will transform how they handle stock, shipments, and supply
            chain logistics.
          </p>
          <Button
            variant="primary"
            className={`
    text-base sm:text-lg flex items-center mx-auto justify-center gap-2 
    border border-transparent hover:cursor-pointer
    hover:bg-white 
    hover:text-[#800020] 
    hover:border-[#800020]
  `}
            onClick={handleScrollToJoin}
          >
            <MdNotifications />
            Join the Waitlist
          </Button>
        </div>
        <div className="text-[#6B7280] mt-3 text-sm">
          Get 50% off when we launch • No credit card required
        </div>
      </section>
      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative rounded-xl overflow-hidden ">
            <Image
              src="/dashboard-preview.png"
              alt="StockKeeper Dashboard Preview"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute top-4 right-4 sm:top-7 sm:right-12 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl gap-2"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                <FaCalendarCheck size={16} />
              </div>
              <div>
                <p className="font-bold text-lg sm:text-[24px]">Q2 2026</p>
                <p className="font-medium text-[10px] sm:text-[14px]">
                  Launch Date
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-9 sm:left-16 bg-white text-xs sm:text-sm font-semibold shadow-lg flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl gap-2">
              <div className="bg-[#FCE7EB] p-2 sm:p-3 rounded-full">
                <HiUserGroup size={16} style={{ color: PRIMARY_COLOR }} />
              </div>
              <div>
                <p className="font-bold text-lg sm:text-[24px] text-[#111827]">
                  2867
                </p>
                <p className="font-medium text-[10px] sm:text-[14px] text-[#4B5563]">
                  On waitlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- COUNTDOWN --- */}
      <section
        className="py-10 md:py-16 text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <div className="text-center container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Launching in</h2>
          <p className="text-sm opacity-80 mb-6">
            Dont miss the exclusive early adopter benefits!
          </p>
          <Countdown targetDate={launchDate} />
        </div>
      </section>
      {/* --- BENEFITS SECTION --- */}
      <section id="benefits" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Join the Waitlist?
            </h2>
            <p className="text-base text-gray-600">
              Early adopters get exclusive benefits and special pricing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <IconCard
              icon={FaTag}
              title="50% Off First Year"
              description="Exclusive early bird pricing for waitlist members. Save hundreds on your subscription."
              isBenefit={true}
            />
            <IconCard
              icon={FaCrown}
              title="VIP Priority Access"
              description="Be the first to try out new features when we roll them out. Skip the queue entirely."
              isBenefit={true}
            />
            <IconCard
              icon={FaGift}
              title="Exclusive Features"
              description="Get access to premium features not available to regular users at launch."
              isBenefit={true}
            />
            <IconCard
              icon={SlEarphonesAlt}
              title="Priority Support"
              description="Guaranteed onboarding assistance and priority customer support for life."
            />
            <IconCard
              icon={FaComments}
              title="Shape the Product"
              description="Direct input into our roadmap. Your feedback will prioritize development."
            />
            <IconCard
              icon={MdVerified}
              title="Founder's Badge"
              description="Receive a special Founder's badge and recognition in our community."
            />
          </div>
        </div>
      </section>
      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Whats Coming in StockKeeper
            </h2>
            <p className="text-base text-gray-600">
              Powerful features designed to revolutionize inventory management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IconCard
              icon={FaChartLine}
              title="Real-Time Tracking"
              description="Monitor stock levels, movements, and supply chain status across all locations instantly."
              isBenefit={false}
            />
            <IconCard
              icon={MdNotifications}
              title="Smart Alerts"
              description="Automatic notifications for low stock, expiry dates, and optimal reorder points."
              isBenefit={false}
            />
            <IconCard
              icon={FaBarcode}
              title="Barcode Scanning"
              description="Integrated barcode/QR code support with your phone for all major inventory actions."
              isBenefit={false}
            />
            <IconCard
              icon={FaMobileScreen}
              title="Mobile First"
              description="Dedicated iOS and Android apps for managing inventory anywhere, anytime."
              isBenefit={false}
            />
          </div>
        </div>
      </section>
      {/* Form */}
      <section className="py-16 md:py-24 bg-gray-50" id="join">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Secure Your Spot Today
          </h2>
          <p className="text-md text-gray-600 mb-10 md:mb-12">
            Join 2,847 businesses already on the waitlist!
          </p>

          <Card className="bg-white p-5 md:p-10 shadow-xl">
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left mb-1">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left mb-1">
                    Company Name (Optional)
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Company"
                    className="placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full text-base md:text-lg py-3.5 mt-2 flex items-center justify-center gap-2"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <FaRocketAlt size={20} className="mr-1" />
                Join the Waitlist Now
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Well notify you as soon as we launch. No spam, ever.
              </p>
              <div className="pt-6 border-t border-gray-100 mt-6">
                <div
                  className={`
              grid grid-cols-2 gap-y-4 max-w-sm mx-auto
              md:flex md:justify-around md:max-w-full md:mx-0
            `}
                >
                  {[
                    "50% Off",
                    "Priority Access",
                    "Exclusive Features",
                    "Free Trial",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex flex-col items-center shrink-0 md:w-auto"
                    >
                      <span className="h-6 w-6 sm:h-5 sm:w-5 rounded-full bg-[#34D399] text-white flex items-center justify-center mb-1">
                        <Check className="h-4 w-4 sm:h-3 sm:w-3" />
                      </span>
                      <span className="text-sm text-[#4B5563] mt-1 font-medium text-center px-1">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>
      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-md text-gray-600">
              Everything you need to know about the waitlist
            </p>
          </div>
          <div className="space-y-4">
            <FAQItem
              question="When will StockKeeper launch?"
              answer="We're planning to launch in Q2 2026. Waitlist members will be notified first and get early access before the public launch."
            />
            <FAQItem
              question="Is joining the waitlist free?"
              answer="Yes, absolutely! Joining the waitlist is completely free and comes with no obligations. You'll just receive updates and early access when we launch."
            />
            <FAQItem
              question="What are the early bird benefits?"
              answer="Waitlist members get 50% off their first year, priority access, exclusive features, dedicated support, and the ability to influence our product roadmap."
            />
            <FAQItem
              question="Will my data be secure?"
              answer="Absolutely. We use bank-level encryption and follow industry best practices for data security. Your information will never be shared with third parties."
            />
            <FAQItem
              question="Can I cancel my waitlist registration?"
              answer="Yes, you can unsubscribe from the waitlist at any time using the link in any of our emails. No questions asked."
            />
            <FAQItem
              question="What happens after I join?"
              answer="You'll receive a confirmation email immediately, followed by regular updates about our progress. When we launch, you'll be among the first to know and get priority access."
            />
          </div>
        </div>
      </section>
      {/* --- FOOTER --- */}
      <footer className="bg-[#111827] text-white mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Image
                src="/logo.png"
                alt="StockKeeper Logo"
                width={30}
                height={30}
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold">StockKeeper</span>
              {/* <div>
                Smart inventory management made simple for modern businesses.
              </div> */}
            </div>

            <div className="flex flex-col sm:flex-row items-left space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-xs sm:text-sm">
              <span className="order-2 sm:order-1">
                &copy; 2024 StockKeeper. All rights reserved.
              </span>
              <div className="flex space-x-4 order-1 sm:order-2">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
