import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { User, Edit, Rocket, Users, Palette, Code, Star, Check, ArrowRight, Globe, Zap, Shield, Smartphone, BarChart3, Mail, Github, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { getCurrentLocale } from "@/locales/server"
import Link from "next/link"

export default async function Page() {
	const locale = await getCurrentLocale()
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
			{/* Navigation */}
			<nav className="container mx-auto px-4 py-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
							<User className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-bold text-gray-900">PortfolioBuilder</span>
					</div>
					<div className="hidden md:flex items-center gap-8">
						<a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
							Features
						</a>
						<a href="#showcase" className="text-gray-600 hover:text-gray-900 transition-colors">
							Showcase
						</a>
						<a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
							Pricing
						</a>
						<Link href={`${locale}/auth/login`}>
							<Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
								Sign In
							</Button>
						</Link>
						<Link href={`${locale}/auth/login`}>
							<Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
						</Link>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="container mx-auto px-4 py-16 lg:py-24">
				<div className="text-center mb-12">
					<Badge className="bg-blue-100 text-blue-700 lg:text-lg border-blue-200 mb-6 whitespace-break-spaces">🚀 Join 10,000+ creators building stunning portfolios</Badge>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
								Build Beautiful
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Portfolios </span>
								Without Code
							</h1>
							<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
								Create, customize, and publish professional portfolio websites in minutes. No coding skills required. Choose from 50+ stunning templates and showcase your work like a
								pro.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
								Start Building Free
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
							<Button size="lg" variant="outline" className="border-2 border-gray-200 px-8 py-4 text-lg rounded-xl hover:bg-gray-50">
								View Live Examples
							</Button>
						</div>

						<div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
							<div className="flex items-center gap-2">
								<div className="flex -space-x-2">
									{[1, 2, 3, 4].map((i) => (
										<div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-white"></div>
									))}
								</div>
								<span className="text-sm text-gray-600">10,000+ happy creators</span>
							</div>
							<div className="flex items-center gap-1">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
								))}
								<span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
							</div>
						</div>
					</div>

					{/* Enhanced Portfolio Preview */}
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20"></div>
						<Card className="relative w-full max-w-md mx-auto bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl rounded-3xl overflow-hidden border-0">
							<div className=" p-8 text-white">
								<div className="flex items-center gap-4 mb-8">
									<div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 overflow-hidden border-4 border-white/20">
										<Image src="/placeholder.svg?height=80&width=80" alt="Samuel Lee" width={80} height={80} className="w-full h-full object-cover" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold">Samuel Lee</h3>
										<p className="text-blue-300 text-lg">Senior Web Developer</p>
										<div className="flex items-center gap-1 mt-1">
											<div className="w-2 h-2 bg-green-400 rounded-full"></div>
											<span className="text-sm text-gray-300">Available for hire</span>
										</div>
									</div>
								</div>

								<Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-lg mb-6 w-full">
									<Mail className="w-4 h-4 mr-2" />
									Download Resume
								</Button>

								<div className="space-y-6">
									<div>
										<h4 className="text-lg font-semibold mb-3">About Me</h4>
										<p className="text-sm text-gray-300 leading-relaxed">
											Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-4 text-sm">
										<div className="flex items-center gap-2 text-gray-300">
											<Globe className="w-4 h-4 text-blue-400" />
											<span>San Francisco, CA</span>
										</div>
										<div className="flex items-center gap-2 text-gray-300">
											<Mail className="w-4 h-4 text-blue-400" />
											<span>samuel@dev.com</span>
										</div>
										<div className="flex items-center gap-2 text-gray-300">
											<Github className="w-4 h-4 text-blue-400" />
											<span>github.com/samuel</span>
										</div>
										<div className="flex items-center gap-2 text-gray-300">
											<Linkedin className="w-4 h-4 text-blue-400" />
											<span>linkedin.com/samuel</span>
										</div>
									</div>

									<div className="flex gap-2">
										<Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React</Badge>
										<Badge className="bg-green-500/20 text-green-300 border-green-500/30">Node.js</Badge>
										<Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">AWS</Badge>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
					{[
						{ number: "10,000+", label: "Active Users", icon: Users },
						{ number: "50+", label: "Templates", icon: Palette },
						{ number: "99.9%", label: "Uptime", icon: Zap },
						{ number: "24/7", label: "Support", icon: Shield },
					].map((stat, index) => (
						<div key={index} className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<stat.icon className="w-8 h-8 text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>
			</section>

			{/* Process Steps - Enhanced */}
			<section className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get Online in 3 Simple Steps</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Our streamlined process gets you from idea to live portfolio in under 10 minutes</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 relative">
					{/* Connection lines */}
					<div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>

					{[
						{
							step: "01",
							title: "Sign Up & Choose",
							description: "Create your account with Google or email. Browse our collection of 50+ professional templates designed by experts.",
							icon: User,
							features: ["Google/Email signup", "50+ templates", "Mobile responsive"],
						},
						{
							step: "02",
							title: "Customize & Create",
							description: "Fill in your information using our intuitive form builder. Add your projects, skills, and experience with drag-and-drop simplicity.",
							icon: Edit,
							features: ["Drag & drop builder", "Rich text editor", "Media uploads"],
						},
						{
							step: "03",
							title: "Publish & Share",
							description: "Launch your portfolio on a free subdomain or connect your custom domain. Share your professional presence with the world.",
							icon: Rocket,
							features: ["Free subdomain", "Custom domain", "SEO optimized"],
						},
					].map((step, index) => (
						<Card key={index} className="bg-white border-0 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
							<CardContent className="space-y-6">
								<div className="flex items-center justify-between mb-4">
									<div className="text-6xl font-bold text-blue-100">{step.step}</div>
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
										<step.icon className="w-8 h-8 text-white" />
									</div>
								</div>
								<h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
								<p className="text-gray-600 leading-relaxed">{step.description}</p>
								<ul className="space-y-2">
									{step.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
											<Check className="w-4 h-4 text-green-500" />
											{feature}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Features Section - Enhanced */}
			<section id="features" className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Stand Out</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Powerful features designed to help you create a portfolio that gets noticed by employers and clients</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Multiple Portfolios",
							description: "Create unlimited portfolios for different purposes - one for design work, another for development projects.",
							icon: Users,
							color: "from-blue-500 to-blue-600",
						},
						{
							title: "50+ Premium Templates",
							description: "Choose from our curated collection of templates designed by professionals for maximum impact.",
							icon: Palette,
							color: "from-purple-500 to-purple-600",
						},
						{
							title: "Custom Domains",
							description: "Use your own domain or get a free subdomain. SSL certificates and CDN included for lightning-fast loading.",
							icon: LinkIcon,
							color: "from-green-500 to-green-600",
						},
						{
							title: "No Code Required",
							description: "Build professional portfolios without writing a single line of code. Our visual editor does all the work.",
							icon: Code,
							color: "from-red-500 to-red-600",
						},
						{
							title: "Mobile Optimized",
							description: "All templates are fully responsive and look perfect on desktop, tablet, and mobile devices.",
							icon: Smartphone,
							color: "from-indigo-500 to-indigo-600",
						},
						{
							title: "Analytics Dashboard",
							description: "Track visitors, page views, and engagement with built-in analytics. See which projects get the most attention.",
							icon: BarChart3,
							color: "from-orange-500 to-orange-600",
						},
						{
							title: "SEO Optimized",
							description: "Built-in SEO features help your portfolio rank higher in search results and get discovered by more people.",
							icon: Globe,
							color: "from-teal-500 to-teal-600",
						},
						{
							title: "Lightning Fast",
							description: "Optimized for speed with global CDN, image compression, and modern web technologies.",
							icon: Zap,
							color: "from-yellow-500 to-yellow-600",
						},
						{
							title: "24/7 Support",
							description: "Get help when you need it with our responsive support team and comprehensive documentation.",
							icon: Shield,
							color: "from-pink-500 to-pink-600",
						},
					].map((feature, index) => (
						<Card key={index} className="bg-white border-0 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
							<CardContent className="space-y-4">
								<div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
									<feature.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
								<p className="text-gray-600 leading-relaxed">{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Testimonials */}
			<section className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Loved by Creators Worldwide</h2>
					<p className="text-xl text-gray-600">See what our users have to say about their experience</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							name: "Sarah Chen",
							role: "UX Designer",
							company: "Google",
							content: "PortfolioBuilder helped me land my dream job at Google. The templates are stunning and the customization options are endless.",
							rating: 5,
							avatar: "/placeholder.svg?height=60&width=60",
						},
						{
							name: "Marcus Johnson",
							role: "Freelance Developer",
							company: "Self-employed",
							content: "I've tried many portfolio builders, but this one is by far the best. My client inquiries increased by 300% after switching.",
							rating: 5,
							avatar: "/placeholder.svg?height=60&width=60",
						},
						{
							name: "Emily Rodriguez",
							role: "Photographer",
							company: "Studio ER",
							content: "The image optimization and gallery features are incredible. My portfolio loads instantly and looks amazing on all devices.",
							rating: 5,
							avatar: "/placeholder.svg?height=60&width=60",
						},
					].map((testimonial, index) => (
						<Card key={index} className="bg-white border-0 p-8 rounded-3xl shadow-lg">
							<CardContent className="space-y-6">
								<div className="flex items-center gap-1">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
									))}
								</div>
								<p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
								<div className="flex items-center gap-4">
									<Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} width={60} height={60} className="w-12 h-12 rounded-full object-cover" />
									<div>
										<div className="font-semibold text-gray-900">{testimonial.name}</div>
										<div className="text-sm text-gray-600">
											{testimonial.role} at {testimonial.company}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Portfolio Showcase - Enhanced */}
			<section id="showcase" className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Live Portfolio Showcase</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore real portfolios created by our users across different industries and professions</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{
							name: "Mara Nguyen",
							role: "Senior Developer",
							bg: "bg-gradient-to-br from-slate-800 to-slate-900",
							textColor: "text-white",
							specialty: "Full-Stack",
							projects: "12 Projects",
						},
						{
							name: "John Kim",
							role: "Product Designer",
							bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
							textColor: "text-gray-900",
							specialty: "UI/UX Design",
							projects: "8 Projects",
						},
						{
							name: "Farily Turner",
							role: "Data Scientist",
							bg: "bg-gradient-to-br from-purple-50 to-pink-50",
							textColor: "text-gray-900",
							specialty: "Machine Learning",
							projects: "15 Projects",
						},
						{
							name: "Ryan Chen",
							role: "Creative Director",
							bg: "bg-gradient-to-br from-green-50 to-teal-50",
							textColor: "text-gray-900",
							specialty: "Brand Design",
							projects: "20 Projects",
						},
					].map((portfolio, index) => (
						<Card key={index} className={`${portfolio.bg} border-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group`}>
							<CardContent className="p-8 space-y-6">
								<div className="aspect-[4/3] bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
									<div className="text-center">
										<div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/20">
											<Image src="/placeholder.svg?height=80&width=80" alt={portfolio.name} width={80} height={80} className="w-full h-full object-cover" />
										</div>
										<h4 className={`text-xl font-bold ${portfolio.textColor} mb-1`}>{portfolio.name}</h4>
										<p className={`text-sm ${portfolio.textColor} opacity-80 mb-2`}>{portfolio.role}</p>
										<div className="flex items-center justify-center gap-4 text-xs opacity-70">
											<span className={portfolio.textColor}>{portfolio.specialty}</span>
											<span className={portfolio.textColor}>•</span>
											<span className={portfolio.textColor}>{portfolio.projects}</span>
										</div>
									</div>
								</div>
								<Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white group-hover:text-gray-900 transition-all">
									View Portfolio
									<ArrowRight className="w-4 h-4 ml-2" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Pricing Section - Enhanced */}
			<section id="pricing" className="container mx-auto px-8 py-16">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Start free, upgrade when you're ready. No hidden fees, no surprises.</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{[
						{
							name: "Free",
							price: "$0",
							period: "forever",
							description: "Perfect for getting started",
							features: ["1 Portfolio", "5 Basic Templates", "Subdomain hosting", "Basic customization", "Community support"],
							cta: "Start Free",
							popular: false,
						},
						{
							name: "Pro",
							price: "$5",
							period: "per portfolio/year",
							description: "Best for professionals",
							features: ["Unlimited Portfolios", "50+ Premium Templates", "Custom Domain", "Advanced Analytics", "Priority Support", "SEO Tools", "Remove Branding"],
							cta: "Start Pro Trial",
							popular: true,
						},
						{
							name: "Agency",
							price: "$15",
							period: "per month",
							description: "For teams and agencies",
							features: ["Everything in Pro", "Team Collaboration", "White-label Solution", "API Access", "Custom Integrations", "Dedicated Support", "Training Sessions"],
							cta: "Contact Sales",
							popular: false,
						},
					].map((plan, index) => (
						<Card
							key={index}
							className={`relative border-0 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
								plan.popular ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white scale-105" : "bg-white"
							}`}
						>
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<Badge className="bg-yellow-400 text-yellow-900 px-4 py-1">Most Popular</Badge>
								</div>
							)}
							<CardContent className="p-8 space-y-6">
								<div className="text-center">
									<h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
									<div className="mb-4">
										<span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
										<span className={`text-lg ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>/{plan.period}</span>
									</div>
									<p className={`${plan.popular ? "text-blue-100" : "text-gray-600"}`}>{plan.description}</p>
								</div>

								<ul className="space-y-3">
									{plan.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3">
											<Check className={`w-5 h-5 ${plan.popular ? "text-green-300" : "text-green-500"}`} />
											<span className={`${plan.popular ? "text-blue-100" : "text-gray-700"}`}>{feature}</span>
										</li>
									))}
								</ul>

								<Button
									className={`w-full py-3 rounded-xl text-lg font-semibold ${plan.popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"}`}
								>
									{plan.cta}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<p className="text-gray-600 mb-4">All plans include:</p>
					<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-500" />
							99.9% Uptime SLA
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-500" />
							SSL Certificate
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-500" />
							Global CDN
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-500" />
							Mobile Responsive
						</span>
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="container mx-auto px-4 py-16">
				<Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 rounded-3xl overflow-hidden">
					<CardContent className="p-12 text-center text-white">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated with Portfolio Tips</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Get weekly tips on building better portfolios, design trends, and career advice delivered to your inbox.</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<Input placeholder="Enter your email address" className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl" />
							<Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8">Subscribe</Button>
						</div>
						<p className="text-sm text-blue-100 mt-4">No spam, unsubscribe anytime.</p>
					</CardContent>
				</Card>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white">
				<div className="container mx-auto px-4 py-16">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
									<User className="w-5 h-5 text-white" />
								</div>
								<span className="text-xl font-bold">PortfolioBuilder</span>
							</div>
							<p className="text-gray-400">Build beautiful portfolios without code. Join thousands of creators showcasing their work professionally.</p>
							<div className="flex gap-4">
								<Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
									<Twitter className="w-5 h-5" />
								</Button>
								<Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
									<Github className="w-5 h-5" />
								</Button>
								<Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
									<Linkedin className="w-5 h-5" />
								</Button>
							</div>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Templates
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Showcase
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Support</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Help Center
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Contact Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Status
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Blog
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Press
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400">© 2024 PortfolioBuilder. All rights reserved.</p>
						<div className="flex gap-6 text-gray-400 text-sm mt-4 md:mt-0">
							<a href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Terms of Service
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
