// "use client";
// import Image from "next/image";
// export default function MobileAppPage() {
// 	return (
// 		<main className="bg-background min-h-screen w-full">
// 			{/* HERO SECTION */}
// 			<section className="w-full bg-white pt-10 pb-0 flex flex-col items-center">
// 				<div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
// 		            {/* ...existing code... */}
// 					<div className="flex-1 flex flex-col gap-4">
// 						<span className="text-xs text-muted-foreground mb-2 flex items-center gap-2 bg-[#FCE7EB] w-[150px] text-center rounded">
// 							<Image src="/phoneicon.png" alt="phoneicon" width={8} height={18} />
//  							Available on iOS & Android
// 						</span>
// 						<h1 className="text-3xl md:text-[30px] leading-relaxed font-bold mb-2">Manage Inventory<br /><span  className="text-[#800020]">Anywhere, Anytime</span></h1>
// 						<p className="text-muted-foreground mb-4">Download the StockKeeper mobile app and take control of your inventory on the go. Scan barcodes, update stock levels, and get real-time alerts right from your phone.</p>
// 						<div className="flex gap-3 mb-2">
// 							<a href="#" className="inline-block">
// 								<Image src="/appstore.png" alt="Download on App Store" width={140} height={40} />
// 							</a>
// 							<a href="#" className="inline-block">
// 								<Image src="/googleplay.png" alt="Get it on Google Play" width={140} height={40} />
// 							</a>
// 						</div>
// 						<div className="flex gap-4 text-xs text-muted-foreground items-center">
// 							<span>⭐ 4.8/5 Rating</span>
// 							<span>50K+ Downloads</span>
// 							<span>✅ 100% Secure</span>
// 						</div>
// 					</div>
// 					{/* Right: Phone Image */}
// 					<div className="flex-1 flex justify-center items-center">
// 						<div className="relative w-[320px] h-[320px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
// 							<Image src="/phone-placeholder.png" alt="Mobile app on phone" width={280} height={280} />
// 							{/* You can replace /phone-placeholder.png with your actual phone screenshot later */}
// 							<div className="absolute bottom-4 left-4 bg-white rounded px-3 py-1 text-xs font-semibold shadow">Free<br /><span className="text-muted-foreground">To Download</span></div>
// 						</div>
// 					</div>
// 				</div>
// 				{/* Stats Bar */}
// 				<div className="w-full bg-primary text-white py-6 mt-8">
// 					<div className="max-w-6xl mx-auto flex justify-between items-center px-4">
// 						<div className="flex-1 text-center">
// 							<div className="text-[30px] font-bold font-[700]">50K+</div>
// 							<div className="text-xs">App Downloads</div>
// 						</div>
// 						<div className="flex-1 text-center">
// 							<div className="text-[30px] font-bold font-[700]">4.8<span className="text-lg">★</span></div>
// 							<div className="text-xs">Average Rating</div>
// 						</div>
// 						<div className="flex-1 text-center">
// 							<div className="text-[30px] font-bold font-[700]">24/7</div>
// 							<div className="text-xs">Access Anywhere</div>
// 						</div>
// 						<div className="flex-1 text-center">
// 							<div className="text-[30px] font-bold font-[700]">100%</div>
// 							<div className="text-xs">Cloud Synced</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* FEATURES SECTION */}
// 			<section className="max-w-6xl mx-auto py-12 px-4">
// 				<h2 className="text-2xl font-bold text-center mb-4">Powerful Features in Your Pocket</h2>
// 				<p className="text-center text-muted-foreground mb-8">Everything you need to manage inventory from your mobile device</p>
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<Image src="/barcode-icon.png" alt="Barcode Scanner" width={32} height={32} />
// 						<h3 className="font-semibold mt-2 mb-1">Barcode Scanner</h3>
// 						<p className="text-xs text-muted-foreground text-center">Scan products instantly with your phone camera. Add, update, or check stock levels in seconds.</p>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<Image src="/notification-icon.png" alt="Push Notifications" width={32} height={32} />
// 						<h3 className="font-semibold mt-2 mb-1">Push Notifications</h3>
// 						<p className="text-xs text-muted-foreground text-center">Get instant alerts for low stock, expiring items, and important inventory updates.</p>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<Image src="/camera-icon.png" alt="Photo Capture" width={32} height={32} />
// 						<h3 className="font-semibold mt-2 mb-1">Photo Capture</h3>
// 						<p className="text-xs text-muted-foreground text-center">Take photos of products and attach them to inventory items for easy identification.</p>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<Image src="/sync-icon.png" alt="Real-Time Sync" width={32} height={32} />
// 						<h3 className="font-semibold mt-2 mb-1">Real-Time Sync</h3>
// 						<p className="text-xs text-muted-foreground text-center">All changes sync instantly across all devices. Your team always has the latest data.</p>
// 					</div>
// 				</div>
// 			</section>

// 			{/* SEE IT IN ACTION SECTION */}
// 			<section className="max-w-6xl mx-auto py-12 px-4">
// 				<h2 className="text-xl font-bold text-center mb-4">See It In Action</h2>
// 				<p className="text-center text-muted-foreground mb-8">A glimpse of the StockKeeper mobile experience</p>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					<div className="flex flex-col items-center">
// 						<div className="w-[180px] h-[360px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden mb-2">
// 							<Image src="/dashboard-phone.png" alt="Dashboard Overview" width={160} height={320} />
// 						</div>
// 						<h4 className="font-semibold mb-1">Dashboard Overview</h4>
// 						<p className="text-xs text-muted-foreground text-center">Quick access to all your inventory metrics and insights</p>
// 					</div>
// 					<div className="flex flex-col items-center">
// 						<div className="w-[180px] h-[360px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden mb-2">
// 							<Image src="/barcode-phone.png" alt="Barcode Scanning" width={160} height={320} />
// 						</div>
// 						<h4 className="font-semibold mb-1">Barcode Scanning</h4>
// 						<p className="text-xs text-muted-foreground text-center">Scan products instantly with your phone camera</p>
// 					</div>
// 					<div className="flex flex-col items-center">
// 						<div className="w-[180px] h-[360px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden mb-2">
// 							<Image src="/details-phone.png" alt="Product Details" width={160} height={320} />
// 						</div>
// 						<h4 className="font-semibold mb-1">Product Details</h4>
// 						<p className="text-xs text-muted-foreground text-center">View and update product information on the go</p>
// 					</div>
// 				</div>
// 			</section>

// 			{/* USER REVIEWS SECTION */}
// 			<section className="max-w-6xl mx-auto py-12 px-4">
// 				<h2 className="text-xl font-bold text-center mb-4">What Users Are Saying</h2>
// 				<p className="text-center text-muted-foreground mb-8">Real reviews from real users</p>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<div className="flex gap-1 text-yellow-500 mb-2">★ ★ ★ ★ ★</div>
// 						<p className="text-xs text-center mb-2">The mobile app is a game-changer! I can scan products and update inventory while walking through the store. So convenient!</p>
// 						<div className="text-xs text-muted-foreground">James Wilsen<br />Store Manager</div>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<div className="flex gap-1 text-yellow-500 mb-2">★ ★ ★ ★ ★</div>
// 						<p className="text-xs text-center mb-2">Real-time sync is perfect for our team. Everyone sees updates instantly. No more mistakes or delays!</p>
// 						<div className="text-xs text-muted-foreground">Emily Rodriguez<br />Operations Lead</div>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<div className="flex gap-1 text-yellow-500 mb-2">★ ★ ★ ★ ★</div>
// 						<p className="text-xs text-center mb-2">Push notifications keep me informed about low stock levels. I can reorder products before we run out. Highly recommend!</p>
// 						<div className="text-xs text-muted-foreground">Michael Chen<br />Business Owner</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* GET STARTED IN 3 EASY STEPS SECTION */}
// 			<section className="max-w-6xl mx-auto py-12 px-4">
// 				<h2 className="text-xl font-bold text-center mb-4">Get Started in 3 Easy Steps</h2>
// 				<p className="text-center text-muted-foreground mb-8">Download and start managing inventory in minutes</p>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<div className="text-primary text-2xl font-bold mb-2">1</div>
// 						<h4 className="font-semibold mb-1">Download the App</h4>
// 						<p className="text-xs text-muted-foreground text-center">Get StockKeeper from the App Store or Google Play Store for free</p>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<div className="text-primary text-2xl font-bold mb-2">2</div>
// 						<h4 className="font-semibold mb-1">Create Account</h4>
// 						<p className="text-xs text-muted-foreground text-center">Sign up with your email or use your existing StockKeeper account</p>
// 					</div>
// 					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
// 						<div className="text-primary text-2xl font-bold mb-2">3</div>
// 						<h4 className="font-semibold mb-1">Start Managing</h4>
// 						<p className="text-xs text-muted-foreground text-center">Begin tracking inventory, scanning products, and optimizing stock levels</p>
// 					</div>
// 				</div>
// 			</section>

// 			{/* FOOTER SECTION */}
// 			<footer className="w-full bg-primary text-white py-10 mt-8">
// 				<div className="max-w-6xl mx-auto flex flex-col items-center px-4">
// 					<h2 className="text-xl font-bold text-center mb-4">Ready to Take Control of Your Inventory?</h2>
// 					<p className="text-center text-white mb-6">Download the StockKeeper app today and experience the future of inventory management</p>
// 					<div className="flex gap-3 mb-4">
// 						<a href="#" className="inline-block">
// 							<Image src="/appstore.png" alt="Download on App Store" width={140} height={40} />
// 						</a>
// 						<a href="#" className="inline-block">
// 							<Image src="/googleplay.png" alt="Get it on Google Play" width={140} height={40} />
// 						</a>
// 					</div>
// 					<div className="flex gap-4 text-xs text-white items-center mb-2">
// 						<span>✔️ Free to download</span>
// 						<span>✔️ Real-time sync</span>
// 						<span>✔️ No credit card required</span>
// 					</div>
// 					<div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-white mt-6 gap-2">
// 						<span>StockKeeper</span>
// 						<div className="flex gap-4">
// 							<a href="#" className="hover:underline">Privacy Policy</a>
// 							<a href="#" className="hover:underline">Terms of Service</a>
// 							<a href="#" className="hover:underline">Support</a>
// 						</div>
// 						<span>© 2024 StockKeeper. All rights reserved.</span>
// 					</div>
// 				</div>
// 			</footer>
// 		</main>
// 	);
// }





// app/mobile-app/page.tsx

import Image from "next/image"

const stats = [
  { label: "App Downloads", value: "50K+" },
  { label: "Average Rating", value: "4.8★" },
  { label: "Access Anywhere", value: "24/7" },
  { label: "Cloud Synced", value: "100%" },
]

const features = [
  {
    title: "Barcode Scanner",
    description:
      "Scan products instantly with your phone camera. Add, update, or check stock levels in seconds.",
    // TODO: replace with real icon path
    icon: "/barcode.png",
  },
  {
    title: "Push Notifications",
    description:
      "Get instant alerts for low stock, expiring items, and important inventory updates.",
    icon: "/bell.png",
  },
  {
    title: "Photo Capture",
    description:
      "Take photos of products and attach them to inventory items for easy identification.",
    icon: "/cam.png",
  },
  {
    title: "Real-Time Sync",
    description:
      "All changes sync instantly across all devices. Your team always has the latest data.",
    icon: "/reload.png",
  },
]

const actionShots = [
  {
    title: "Dashboard Overview",
    description: "Quick access to all your inventory metrics and insights.",
    // TODO: replace with real screenshot
    image: "/dashboard.png",
  },
  {
    title: "Barcode Scanning",
    description: "Scan products directly from your phone camera.",
    image: "/scan.png",
  },
  {
    title: "Product Details",
    description: "View and update product information on the go.",
    image: "/product.png",
  },
]

const testimonials = [
  {
    name: "James Wilson",
    role: "Store Manager",
    text: `"The mobile app is a game-changer! I can scan products and update inventory while walking through the store. So convenient!"`,
    // optional avatar
    avatar: "/image1.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Lead",
    text: `"Push alerts keep me updated about low stock levels. I can reorder before we run out. Highly recommend!"`,
    avatar: "/image2.png",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    text: `"I love that everything syncs in real-time across our team. No more guessing what’s in stock."`,
    avatar: "/image3.png",
  },
]

const steps = [
  {
    title: "Download the App",
    description: "Get StockKeeper from the App Store or Google Play Store for free.",
    icon: "/download.png",
  },
  {
    title: "Create Account",
    description: "Sign up with your email or use your existing StockKeeper account.",
    icon: "/account.png",
  },
  {
    title: "Start Managing",
    description:
      "Begin tracking inventory, scanning products, and optimizing stock levels.",
    icon: "/start.png",
  },
]

export default function MobileAppPage() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col bg-white">
        {/* ================= HERO ================= */}
        <section className="grid gap-10 border-b border-slate-100 bg-white px-6 py-10 md:px-10 lg:grid-cols-2 lg:items-center lg:py-16">
          {/* Left: Text */}
          <div className="space-y-6">
      <div className="flex gap-[2px] bg-[#FCE7EB] w-[280px] rounded-[13px]">
         <Image
    src="/phoneicon.png"
    alt="phoneicon"
    width={4}
    height={10}
    className="h-4 w-4 object-contain bg-[#800020]"
  />
  <p className="text-[14px] text-[#800020] font-bold uppercase  leading-relaxed">
    Available on iOS & Android
  </p>
  </div>

            <div className="space-y-3">
              <h1 className="text-[40px] font-bold font-weight-[700] leading-tight text-slate-900 md:text-[34px]">
                Manage Inventory
                <br />
             <span className="text-[#800020]">   Anywhere, Anytime</span>
              </h1>
              <p className="max-w-md text-[15px] font-weight-[400] font-semibold leading-relaxed text-[#4B5563]">
                Download the StockKeeper mobile app and take control of your
                inventory on the go. Scan barcodes, update stock levels, and get
                real-time alerts right from your phone.
              </p>
            </div>

            {/* Store buttons */}
           {/* Store buttons */}
<div className="flex flex-wrap items-center gap-3">
  {/* App Store button */}
  <button className="relative h-14 w-44 rounded-lg bg-black flex items-center justify-center gap-3">
    <span className="inline-block h-5 w-5 border-2 border-white bg-transparent rounded-[4px]" />
    <div className="flex flex-col items-start">
      <span className="text-xs text-white">Download on the</span>
      <span className="text-lg font-semibold text-white">App Store</span>
    </div>
  </button>
  {/* Google Play button */}
  <button className="relative h-14 w-44 rounded-lg bg-black flex items-center justify-center gap-3">
    <span className="inline-block h-5 w-5 border-2 border-white bg-transparent rounded-[4px]" />
    <div className="flex flex-col items-start">
      <span className="text-xs text-white">GET IT ON</span>
      <span className="text-lg font-semibold text-white">Google Play</span>
    </div>
  </button>
</div>

{/* Rating row with colored rectangles */}
<div className="flex flex-wrap items-center gap-6 text-[11px] text-slate-500 mt-2">
  <div className="flex items-center gap-1">
    <span className="inline-block h-2 w-3 bg-yellow-400 mr-1" style={{borderRadius: '2px'}} />
    <span className="font-semibold text-slate-900">4.8/5</span>
    <span>Rating</span>
  </div>
  <div className="flex items-center gap-1">
    <span className="inline-block h-2 w-3 bg-[#800020] mr-1" style={{borderRadius: '2px'}} />
    <span className="font-semibold text-slate-900">50K+</span>
    <span>Downloads</span>
  </div>
  <div className="flex items-center gap-1">
    <span className="inline-block h-2 w-3 bg-emerald-500 mr-1" style={{borderRadius: '2px'}} />
    <span>100% Secure</span>
  </div>
</div>
          </div>
        {/* Right: phone mockup with overlapping "Free" badge */}
<div className="flex items-center justify-center">
  {/* Wrapper so the badge can sit partly outside the phone card */}
  <div className="relative w-full max-w-md">
    {/* Phone card */}
    <div className="relative overflow-hidden rounded-[28px] bg-white shadow-xl">
      {/* Keeps a nice tall aspect ratio for the phone */}
      <div className="relative w-full aspect-[3/4]">
        <Image
          src="/screen.png"            // your phone image
          alt="Mobile app on phone"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Overlapping "Free" badge */}
    <div className="absolute bottom-[-26px] left-8 flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-lg border border-slate-100">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg border-2 border-emerald-400">
        {/* small filled square inside the border, like the design */}
        <span className="h-3 w-3 rounded-[4px] bg-emerald-400" />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-slate-900">Free</span>
        <span className="text-xs text-slate-500">To Download</span>
      </div>
    </div>
  </div>
</div>

        </section>

        {/* ================= STATS BAR ================= */}
        <section className="bg-[#7b001f] px-6 py-6 text-white md:px-10">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1 text-[16px] font-[400]">
                <p className="text-[30px] font-bold font-[700]">
                  {stat.value}
                </p>
                <p className="text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[40px] font-weight-[700] text-[#111827] font-bold md:text-[30px] leading-relaxed">
              Powerful Features in Your Pocket
            </h2>
            <p className="mt-[-3px] text-[16px] text-[#4B5563] font-weight-[400] leading-relaxed">
              Everything you need to manage inventory from your mobile device.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded- text-[18px] font-bold  text-[#111827] border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fae9ec]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
{/* ================= SEE IT IN ACTION ================= */}
<section className="border-t border-slate-100 px-6 py-10 md:px-10 md:py-14">
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-xl fontweight-[700] text-[#111827] md:text-[30px] font-bold leading-12">
      See It In Action
    </h2>
    <p className="mt-0   text-[18px] text-[#4B5563] font-weight-[400] font-semiboldleading-7">
      A glimpse of the StockKeeper mobile experience.
    </p>
  </div>

  <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
    {actionShots.map((shot) => (
      <div
        key={shot.title}
        className="flex flex-col items-center text-center text-[18px] font-bold  text-[#111827] leading-7"
      >
        {/* Image card */}
        <div
          className="
            relative w-full max-w-xs 
            aspect-[3/5] overflow-hidden 
            rounded-3xl bg-slate-100 
            shadow-[0_22px_40px_rgba(15,23,42,0.18)]
          "
        >
          <Image
            src={shot.image}
            alt={shot.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm font-semibold text-slate-900">
          {shot.title}
        </p>
        <p className="mt-1 text-[12px] text-[#4B5563] max-w-80 leading-6 font-weight-[400]">
          {shot.description}
        </p>
      </div>
    ))}
  </div>
</section>

       
        {/* ================= TESTIMONIALS ================= */}
        <section className="border-t border-slate-100 px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-weight-[700] text-[#111827] md:text-[30px] font-bold leading-12">
              What Users Are Saying
            </h2>
            <p className="mt-1 text-[18px] text-[#111827] font-weight-[400] leading-7">
              Real reviews from real users.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-sm"
              >
                <p className="text-xs leading-relaxed mt-3 text-slate-700">{t.text}</p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#111827] leading-6">
                      {t.name}
                    </p>
                   
					<p className=" font-weight-[400] text-[14px]  text-[#4B5563] leading-5">
						{t.role}
					</p>
                    <p className="text-[11px] font-weight-[400] text-[#4B5563] leading-5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

{/* ================= STEPS ================= */}
<section className="border-t border-slate-100 px-6 py-10 md:px-10 md:py-14">
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-xl font-bold font-weight-[700] text-[#111827] md:text-[30px] leading-12 	">
      Get Started in 3 Easy Steps
    </h2>
    <p className="mt-1 text-[18px] text-[#4B5563] font-weight-[400] leading-7">
      Download and start managing inventory in minutes.
    </p>
  </div>

  {/* Steps container */}
 <div className="mx-auto mt-10 grid max-w-2xl gap-8 md:grid-cols-3">
    {steps.map((step, index) => (
      <div
        key={step.title}
        className="flex flex-col items-center text-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-lg"
      >
        {/* Step Number */}
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#800020] text-[14px] font-semibold text-[white]">
          {index + 1}
        </div>

        {/* Step Icon */}
        <div className="relative h-10 w-10">
          <Image
            src={step.icon}
            alt={step.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Step Title */}
        <h3 className="text-[16px] font-bold font-weight-[700] text-[#111827] leading-5">
          {step.title}
        </h3>

        {/* Step Description */}
        <p className="text-[12px] leading-4 text-[#4B5563] font-semibold max-w-[200px]">
          {step.description}
        </p>
      </div>
    ))}
  </div>
</section>
    

        {/* ================= CTA ================= */}
        <section className="bg-[#7b001f] px-6 py-10 text-white md:px-10 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center mb-4 text-center gap-6">
            <div className="space-y-2">
              <p className="text-[30px]  font-bold leading-12  tracking-wide text-[#FFFFFF]">
                Ready to Take Control of Your <br /> Inventory?
              </p>
              <h2 className="text-[16px] font-semibold  leading-5">
                Download the StockKeeper app today and experience the future of
                inventory management.
              </h2>
            </div>
            </div>

            {/* Store buttons again */}
         <div className="flex flex-wrap items-center justify-center gap-3">
  {/* App Store Button */}
  <button className="flex h-16 w-44 items-center gap-3 rounded-lg bg-white px-3 shadow-md">
    <Image
      src="/apple.png"
      alt="App Store"
      width={30}
      height={30}
      className="object-contain"
    />
    <div className="flex flex-col items-start leading-tight">
      <span className="text-[12px] leading-5 text-black">Download on the</span>
      <span className="text-[18px] font-bold leading-5     text-black">App Store</span>
    </div>
  </button>

  {/* Google Play Button */}
  <button className="flex h-16 w-44 items-center gap-3 rounded-lg bg-white px-3 shadow-md">
    <Image
      src="/gets.png"
      alt="Google Play"
      width={30}
      height={30}
      className="object-contain"
    />
    <div className="flex flex-col items-start leading-tight">
      <span className="text-[12px] leading-5 text-black">GET IT ON</span>
      <span className="text-[18px] font-bold leading-5 text-black">Google Play</span>
    </div>
  </button>
</div>
{/* BOTTOM FEATURES (FREE • SYNC • NO CARD) */}
<div className="mt-4 flex items-center justify-center gap-6">

  {/* Free to download */}
  <div className="flex items-center gap-2">
    <Image
      src="/good.png"           // <-- replace with your icon
      alt="free icon"
      width={14}
      height={14}
      className="object-contain"
    />
    <span className="text-[14px] text-white">Free to download</span>
  </div>

  {/* Real-time sync */}
  <div className="flex items-center gap-2">
    <Image
      src="/good.png"           // <-- replace with your icon
      alt="sync icon"
      width={14}
      height={14}
      className="object-contain"
    />
    <span className="text-[14px] text-white">Real-time sync</span>
  </div>

  {/* No credit card required */}
  <div className="flex items-center gap-2">
    <Image
      src="/good.png"         // <-- replace with your icon
      alt="no card icon"
      width={14}
      height={14}
      className="object-contain"
    />
    <span className="text-[14px] text-whhite">No credit card required</span>
  </div>

</div>



        </section>

   
     
      </div>
    </main>
  )
}
