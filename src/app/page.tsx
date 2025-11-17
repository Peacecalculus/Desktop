"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  ClipboardCheck, 
  Camera, 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  FileText,
  CheckCircle2,
  Warehouse,
  HardHat,
  Building2,
  Wrench,
  BarChart3,
  Bell
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8" style={{color: '#800020'}} />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">StoreKeeper</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium transition-colors" style={{"--hover-color": "#800020"} as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Features</Link>
              <Link href="#benefits" className="text-sm font-medium transition-colors" style={{"--hover-color": "#800020"} as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Benefits</Link>
              <Link href="#use-cases" className="text-sm font-medium transition-colors" style={{"--hover-color": "#800020"} as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Use Cases</Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors" style={{"--hover-color": "#800020"} as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Pricing</Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="hover:opacity-90" style={{backgroundColor: '#f5e6e8', color: '#800020'}}>
                Simple Inventory Management
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                Track Your Inventory in <span style={{color: '#800020'}}>Real Time</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                StoreKeeper is a lightweight inventory tracking system designed for warehouses, construction sites, 
                and maintenance departments. Keep tabs on what's in stock, who's using it, and when it's time to restock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="#demo">Watch Demo</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] rounded-2xl p-8 shadow-2xl" style={{background: 'linear-gradient(to bottom right, #800020, #4d0013)'}}>
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
              <div className="relative h-full flex items-center justify-center">
                <Package className="h-48 w-48 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 text-white" style={{backgroundColor: '#800020'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div style={{color: '#f5e6e8'}}>Items Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div style={{color: '#f5e6e8'}}>Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div style={{color: '#f5e6e8'}}>Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div style={{color: '#f5e6e8'}}>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Core Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Manage Inventory
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Built for simplicity and speed, designed for non-technical staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="border-2 transition-colors hover:border-[#800020]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: '#f5e6e8'}}>
                  <Package className="h-6 w-6" style={{color: '#800020'}} />
                </div>
                <CardTitle>Item Management</CardTitle>
                <CardDescription>
                  Complete CRUD operations for all your inventory items with photos, categories, and detailed descriptions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle>Check-In/Check-Out</CardTitle>
                <CardDescription>
                  Track who's using what, when they took it, and when they returned it with full accountability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-colors hover:border-[#800020]">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle>Item Snapshots</CardTitle>
                <CardDescription>
                  Capture quick photos to document condition, damage, or identification directly from your device
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-colors hover:border-[#800020]">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                </div>
                <CardTitle>Quantity Adjustments</CardTitle>
                <CardDescription>
                  Easily increment or reduce stock levels with automatic logging of all quantity changes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-colors hover:border-[#800020]">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-red-600 dark:text-red-300" />
                </div>
                <CardTitle>Activity Logs</CardTitle>
                <CardDescription>
                  Complete audit trail of all inventory movements with filtering, sorting, and CSV export capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-colors hover:border-[#800020]">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                </div>
                <CardTitle>Low Stock Alerts</CardTitle>
                <CardDescription>
                  Configurable thresholds with automatic notifications when items need restocking
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Use Cases</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Perfect for Multiple Industries
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              From construction sites to warehouses, StoreKeeper adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#f5e6e8'}}>
                  <Warehouse className="h-8 w-8" style={{color: '#800020'}} />
                </div>
                <CardTitle>Warehouses</CardTitle>
                <CardDescription>
                  Track pallets, boxes, and bulk inventory with ease
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                </div>
                <CardTitle>Construction Sites</CardTitle>
                <CardDescription>
                  Manage tools, materials, and equipment across multiple locations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle>Office Supply Rooms</CardTitle>
                <CardDescription>
                  Keep track of stationery, electronics, and office essentials
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle>Maintenance Departments</CardTitle>
                <CardDescription>
                  Organize spare parts, tools, and maintenance supplies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why StoreKeeper?</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Built for Speed, Simplicity, and Reliability
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#f5e6e8'}}>
                    <Clock className="h-6 w-6" style={{color: '#800020'}} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      See inventory changes instantly as they happen. No delays, no confusion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Designed for non-technical staff. No training required, just intuitive workflows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Accountability</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Know exactly who took what and when with comprehensive activity logs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Export logs, analyze trends, and make data-driven decisions about your inventory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl p-8 shadow-xl" style={{background: 'linear-gradient(to bottom right, #800020, #4d0013)'}}>
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white space-y-8">
                  <Package className="h-32 w-32 mx-auto opacity-90" />
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">StoreKeeper</h3>
                    <p className="text-lg opacity-90 max-w-md">
                      Trusted by warehouses, construction sites, and maintenance teams worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#800020'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Take Control of Your Inventory?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#f5e6e8'}}>
            Join hundreds of businesses that trust StoreKeeper for their inventory management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-6 w-6" style={{color: '#800020'}} />
                <span className="text-xl font-bold">StoreKeeper</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Simple inventory tracking for teams that need to know what's in stock, who's using it, and when to restock.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#features" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Features</Link></li>
                <li><Link href="#pricing" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Pricing</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Integrations</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Blog</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Careers</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Privacy</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Terms</Link></li>
                <li><Link href="#" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#800020'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-slate-600 dark:text-slate-400">
            <p>&copy; 2025 StoreKeeper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
