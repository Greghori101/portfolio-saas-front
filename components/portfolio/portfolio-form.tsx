"use client"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plus, Trash2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ActionResponse } from "@/types/actions"
import { createPortfolio } from "@/app/actions/portfolios"
import { PortfolioInput } from "@/schemas/portfolio"
import { Certificate, Education, Experience, Link, Project, Service, Skill, Testimonial } from "@/types/portfolio"

interface FormErrors {
	[key: string]: string[] | undefined
}

export default function PortfolioForm() {
	const [state, formAction, isPending] = useActionState(createPortfolio, { data: {}, success: false, message: "" })

	const [formData, setFormData] = useState({
		name: "",
		role: "",
		specialty: "",
		bio: "",
		description: "",
		is_active: true,
		domain: "",
		domain_type: "subdomain",
		theme_id: "",
		settings: {},
		projects: [],
		experiences: [],
		skills: [],
		links: [],
		educations: [],
		testimonials: [],
		services: [],
		certificates: [],
	})

	const errors: FormErrors = state?.errors || {}

	const updateFormData = (path: string, value: any) => {
		setFormData((prev) => {
			const keys = path.split(".")
			const newData = { ...prev }
			let current: any = newData

			for (let i = 0; i < keys.length - 1; i++) {
				const key = keys[i]
				if (key.includes("[") && key.includes("]")) {
					const arrayKey = key.split("[")[0]
					const index = Number.parseInt(key.split("[")[1].split("]")[0])
					if (!current[arrayKey]) current[arrayKey] = []
					if (!current[arrayKey][index]) current[arrayKey][index] = {}
					current = current[arrayKey][index]
				} else {
					if (!current[key]) current[key] = {}
					current = current[key]
				}
			}

			const lastKey = keys[keys.length - 1]
			current[lastKey] = value

			return newData
		})
	}

	const addArrayItem = (arrayName: keyof PortfolioInput, defaultItem: any) => {
		setFormData((prev) => ({
			...prev,
			[arrayName]: [...(prev[arrayName] as any[]), defaultItem],
		}))
	}

	const removeArrayItem = (arrayName: keyof PortfolioInput, index: number) => {
		setFormData((prev) => ({
			...prev,
			[arrayName]: (prev[arrayName] as any[]).filter((_, i) => i !== index),
		}))
	}

	const handleSubmit = (formDataObj: FormData) => {
		formDataObj.set("portfolioData", JSON.stringify(formData))
		formAction(formDataObj)
	}

	const DatePicker = ({ value, onChange, placeholder }: { value: Date | undefined; onChange: (date: Date | undefined) => void; placeholder: string }) => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !value && "text-muted-foreground")}>
					{value ? format(value, "PPP") : <span>{placeholder}</span>}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar mode="single" selected={value} onSelect={onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
			</PopoverContent>
		</Popover>
	)

	const ErrorMessage = ({ fieldName }: { fieldName: string }) => {
		const fieldErrors = errors[fieldName]
		if (!fieldErrors || fieldErrors.length === 0) return null
		return <p className="text-sm text-red-500 mt-1">{fieldErrors[0]}</p>
	}

	return (
		<div className="max-w-6xl mx-auto p-6 space-y-8">
			<div className="text-center space-y-2">
				<h1 className="text-3xl font-bold">Create Portfolio</h1>
				<p className="text-muted-foreground">Build your comprehensive professional portfolio</p>
			</div>

			{state?.success && (
				<div className="bg-green-50 border border-green-200 rounded-lg p-4">
					<p className="text-green-800">{state.message}</p>
				</div>
			)}

			{state?.success === false && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-800">{state.message}</p>
				</div>
			)}

			<form action={handleSubmit} className="space-y-8">
				<Tabs defaultValue="basic" className="w-full">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="basic">Basic Info</TabsTrigger>
						<TabsTrigger value="professional">Professional</TabsTrigger>
						<TabsTrigger value="content">Content</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>

					<TabsContent value="basic" className="space-y-6">
						{/* Basic Information */}
						<Card>
							<CardHeader>
								<CardTitle>Basic Information</CardTitle>
								<CardDescription>Your core professional details</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name">Full Name *</Label>
										<Input
											id="name"
											value={formData.name}
											onChange={(e) => updateFormData("name", e.target.value)}
											placeholder="John Doe"
											className={errors.name ? "border-red-500" : ""}
										/>
										<ErrorMessage fieldName="name" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="role">Professional Role *</Label>
										<Input
											id="role"
											value={formData.role}
											onChange={(e) => updateFormData("role", e.target.value)}
											placeholder="Full Stack Developer"
											className={errors.role ? "border-red-500" : ""}
										/>
										<ErrorMessage fieldName="role" />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="specialty">Specialty/Focus Area *</Label>
									<Input
										id="specialty"
										value={formData.specialty}
										onChange={(e) => updateFormData("specialty", e.target.value)}
										placeholder="React, Node.js, Cloud Architecture"
										className={errors.specialty ? "border-red-500" : ""}
									/>
									<ErrorMessage fieldName="specialty" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="bio">Bio *</Label>
									<Textarea
										id="bio"
										value={formData.bio}
										onChange={(e) => updateFormData("bio", e.target.value)}
										placeholder="A brief introduction about yourself (minimum 10 characters)"
										className={cn("min-h-[80px]", errors.bio ? "border-red-500" : "")}
									/>
									<ErrorMessage fieldName="bio" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="description">Detailed Description</Label>
									<Textarea
										id="description"
										value={formData.description || ""}
										onChange={(e) => updateFormData("description", e.target.value)}
										placeholder="Detailed description of your background and experience"
										className="min-h-[120px]"
									/>
								</div>
							</CardContent>
						</Card>

						{/* Links */}
						<Card>
							<CardHeader>
								<CardTitle>Social & Professional Links</CardTitle>
								<CardDescription>Add your online presence</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.links?.map((link: Link, index) => (
									<div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg">
										<div className="space-y-2">
											<Label>Platform</Label>
											<Input value={link.platform} onChange={(e) => updateFormData(`links[${index}].platform`, e.target.value)} placeholder="LinkedIn" />
										</div>
										<div className="space-y-2">
											<Label>URL</Label>
											<Input value={link.url} onChange={(e) => updateFormData(`links[${index}].url`, e.target.value)} placeholder="https://linkedin.com/in/johndoe" />
										</div>
										<div className="flex items-end gap-2">
											<div className="flex items-center space-x-2">
												<Switch checked={link.is_active ?? true} onCheckedChange={(checked) => updateFormData(`links[${index}].is_active`, checked)} />
												<Label>Active</Label>
											</div>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("links", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</div>
								))}
								<Button type="button" variant="outline" onClick={() => addArrayItem("links", { platform: "", url: "", is_active: true })}>
									<Plus className="h-4 w-4 mr-2" />
									Add Link
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="professional" className="space-y-6">
						{/* Experience */}
						<Card>
							<CardHeader>
								<CardTitle>Work Experience</CardTitle>
								<CardDescription>Your professional work history</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.experiences?.map((experience: Experience, index) => (
									<div key={index} className="p-4 border rounded-lg space-y-4">
										<div className="flex justify-between items-center">
											<h4 className="font-medium">Experience {index + 1}</h4>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("experiences", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Company *</Label>
												<Input value={experience.company} onChange={(e) => updateFormData(`experiences[${index}].company`, e.target.value)} placeholder="Company Name" />
											</div>
											<div className="space-y-2">
												<Label>Job Title *</Label>
												<Input value={experience.title} onChange={(e) => updateFormData(`experiences[${index}].title`, e.target.value)} placeholder="Senior Developer" />
											</div>
										</div>
										<div className="space-y-2">
											<Label>Description</Label>
											<Textarea
												value={experience.description || ""}
												onChange={(e) => updateFormData(`experiences[${index}].description`, e.target.value)}
												placeholder="Describe your role and achievements"
											/>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<div className="space-y-2">
												<Label>Start Date *</Label>
												<DatePicker value={experience.started_at} onChange={(date) => updateFormData(`experiences[${index}].started_at`, date)} placeholder="Pick start date" />
											</div>
											<div className="space-y-2">
												<Label>End Date</Label>
												<DatePicker value={experience.ended_at} onChange={(date) => updateFormData(`experiences[${index}].ended_at`, date)} placeholder="Pick end date" />
											</div>
											<div className="flex items-center space-x-2 pt-6">
												<Switch checked={experience.is_current ?? false} onCheckedChange={(checked) => updateFormData(`experiences[${index}].is_current`, checked)} />
												<Label>Current Position</Label>
											</div>
										</div>
									</div>
								))}
								<Button
									type="button"
									variant="outline"
									onClick={() =>
										addArrayItem("experiences", {
											company: "",
											title: "",
											description: "",
											started_at: new Date(),
											is_current: false,
										})
									}
								>
									<Plus className="h-4 w-4 mr-2" />
									Add Experience
								</Button>
							</CardContent>
						</Card>

						{/* Skills */}
						<Card>
							<CardHeader>
								<CardTitle>Skills</CardTitle>
								<CardDescription>Your technical and professional skills</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.skills?.map((skill: Skill, index) => (
									<div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg">
										<div className="space-y-2">
											<Label>Skill Name</Label>
											<Input value={skill.name} onChange={(e) => updateFormData(`skills[${index}].name`, e.target.value)} placeholder="React.js" />
										</div>
										<div className="space-y-2">
											<Label>Level</Label>
											<Select value={skill.level} onValueChange={(value) => updateFormData(`skills[${index}].level`, value)}>
												<SelectTrigger>
													<SelectValue placeholder="Select level" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Beginner">Beginner</SelectItem>
													<SelectItem value="Intermediate">Intermediate</SelectItem>
													<SelectItem value="Advanced">Advanced</SelectItem>
													<SelectItem value="Expert">Expert</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div className="flex items-end">
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("skills", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</div>
								))}
								<Button type="button" variant="outline" onClick={() => addArrayItem("skills", { name: "", level: "" })}>
									<Plus className="h-4 w-4 mr-2" />
									Add Skill
								</Button>
							</CardContent>
						</Card>

						{/* Education */}
						<Card>
							<CardHeader>
								<CardTitle>Education</CardTitle>
								<CardDescription>Your educational background</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.educations?.map((education: Education, index) => (
									<div key={index} className="p-4 border rounded-lg space-y-4">
										<div className="flex justify-between items-center">
											<h4 className="font-medium">Education {index + 1}</h4>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("educations", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<div className="space-y-2">
												<Label>Institution *</Label>
												<Input
													value={education.institution}
													onChange={(e) => updateFormData(`educations[${index}].institution`, e.target.value)}
													placeholder="University Name"
												/>
											</div>
											<div className="space-y-2">
												<Label>Degree *</Label>
												<Input value={education.degree} onChange={(e) => updateFormData(`educations[${index}].degree`, e.target.value)} placeholder="Bachelor's" />
											</div>
											<div className="space-y-2">
												<Label>Field of Study *</Label>
												<Input value={education.field} onChange={(e) => updateFormData(`educations[${index}].field`, e.target.value)} placeholder="Computer Science" />
											</div>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Start Date *</Label>
												<DatePicker value={education.started_at} onChange={(date) => updateFormData(`educations[${index}].started_at`, date)} placeholder="Pick start date" />
											</div>
											<div className="space-y-2">
												<Label>End Date</Label>
												<DatePicker value={education.ended_at} onChange={(date) => updateFormData(`educations[${index}].ended_at`, date)} placeholder="Pick end date" />
											</div>
										</div>
									</div>
								))}
								<Button
									type="button"
									variant="outline"
									onClick={() =>
										addArrayItem("educations", {
											institution: "",
											degree: "",
											field: "",
											started_at: new Date(),
										})
									}
								>
									<Plus className="h-4 w-4 mr-2" />
									Add Education
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="content" className="space-y-6">
						{/* Projects */}
						<Card>
							<CardHeader>
								<CardTitle>Projects</CardTitle>
								<CardDescription>Showcase your work and projects</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.projects?.map((project: Project, index) => (
									<div key={index} className="p-4 border rounded-lg space-y-4">
										<div className="flex justify-between items-center">
											<h4 className="font-medium">Project {index + 1}</h4>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("projects", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Project Title *</Label>
												<Input value={project.title} onChange={(e) => updateFormData(`projects[${index}].title`, e.target.value)} placeholder="My Awesome Project" />
											</div>
											<div className="space-y-2">
												<Label>Project URL</Label>
												<Input value={project.url || ""} onChange={(e) => updateFormData(`projects[${index}].url`, e.target.value)} placeholder="https://myproject.com" />
											</div>
										</div>
										<div className="space-y-2">
											<Label>Description</Label>
											<Textarea
												value={project.description || ""}
												onChange={(e) => updateFormData(`projects[${index}].description`, e.target.value)}
												placeholder="Describe your project"
											/>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Start Date</Label>
												<DatePicker value={project.started_at} onChange={(date) => updateFormData(`projects[${index}].started_at`, date)} placeholder="Pick start date" />
											</div>
											<div className="space-y-2">
												<Label>End Date</Label>
												<DatePicker value={project.ended_at} onChange={(date) => updateFormData(`projects[${index}].ended_at`, date)} placeholder="Pick end date" />
											</div>
										</div>
									</div>
								))}
								<Button type="button" variant="outline" onClick={() => addArrayItem("projects", { title: "", description: "", url: "" })}>
									<Plus className="h-4 w-4 mr-2" />
									Add Project
								</Button>
							</CardContent>
						</Card>

						{/* Services */}
						<Card>
							<CardHeader>
								<CardTitle>Services</CardTitle>
								<CardDescription>Services you offer to clients</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.services?.map((service: Service, index) => (
									<div key={index} className="p-4 border rounded-lg space-y-4">
										<div className="flex justify-between items-center">
											<h4 className="font-medium">Service {index + 1}</h4>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("services", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
										<div className="space-y-2">
											<Label>Service Title *</Label>
											<Input value={service.title} onChange={(e) => updateFormData(`services[${index}].title`, e.target.value)} placeholder="Web Development" />
										</div>
										<div className="space-y-2">
											<Label>Description</Label>
											<Textarea
												value={service.description || ""}
												onChange={(e) => updateFormData(`services[${index}].description`, e.target.value)}
												placeholder="Describe your service"
											/>
										</div>
									</div>
								))}
								<Button type="button" variant="outline" onClick={() => addArrayItem("services", { title: "", description: "" })}>
									<Plus className="h-4 w-4 mr-2" />
									Add Service
								</Button>
							</CardContent>
						</Card>

						{/* Testimonials */}
						<Card>
							<CardHeader>
								<CardTitle>Testimonials</CardTitle>
								<CardDescription>Client testimonials and reviews</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.testimonials?.map((testimonial: Testimonial, index) => (
									<div key={index} className="p-4 border rounded-lg space-y-4">
										<div className="flex justify-between items-center">
											<h4 className="font-medium">Testimonial {index + 1}</h4>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("testimonials", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Author *</Label>
												<Input value={testimonial.author} onChange={(e) => updateFormData(`testimonials[${index}].author`, e.target.value)} placeholder="Client Name" />
											</div>
											<div className="space-y-2">
												<Label>Position</Label>
												<Input
													value={testimonial.position || ""}
													onChange={(e) => updateFormData(`testimonials[${index}].position`, e.target.value)}
													placeholder="CEO at Company"
												/>
											</div>
										</div>
										<div className="space-y-2">
											<Label>Quote *</Label>
											<Textarea value={testimonial.quote} onChange={(e) => updateFormData(`testimonials[${index}].quote`, e.target.value)} placeholder="The testimonial quote" />
										</div>
									</div>
								))}
								<Button type="button" variant="outline" onClick={() => addArrayItem("testimonials", { author: "", quote: "", position: "" })}>
									<Plus className="h-4 w-4 mr-2" />
									Add Testimonial
								</Button>
							</CardContent>
						</Card>

						{/* Certificates */}
						<Card>
							<CardHeader>
								<CardTitle>Certificates</CardTitle>
								<CardDescription>Professional certifications and achievements</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								{formData.certificates?.map((certificate: Certificate, index) => (
									<div key={index} className="p-4 border rounded-lg space-y-4">
										<div className="flex justify-between items-center">
											<h4 className="font-medium">Certificate {index + 1}</h4>
											<Button type="button" variant="destructive" size="sm" onClick={() => removeArrayItem("certificates", index)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Certificate Title *</Label>
												<Input
													value={certificate.title}
													onChange={(e) => updateFormData(`certificates[${index}].title`, e.target.value)}
													placeholder="AWS Certified Developer"
												/>
											</div>
											<div className="space-y-2">
												<Label>Issuer *</Label>
												<Input value={certificate.issuer} onChange={(e) => updateFormData(`certificates[${index}].issuer`, e.target.value)} placeholder="Amazon Web Services" />
											</div>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<div className="space-y-2">
												<Label>Issue Date *</Label>
												<DatePicker value={certificate.issued_at} onChange={(date) => updateFormData(`certificates[${index}].issued_at`, date)} placeholder="Pick issue date" />
											</div>
											<div className="space-y-2">
												<Label>Expiry Date</Label>
												<DatePicker
													value={certificate.expires_at}
													onChange={(date) => updateFormData(`certificates[${index}].expires_at`, date)}
													placeholder="Pick expiry date"
												/>
											</div>
											<div className="space-y-2">
												<Label>Certificate URL</Label>
												<Input
													value={certificate.certificate_url || ""}
													onChange={(e) => updateFormData(`certificates[${index}].certificate_url`, e.target.value)}
													placeholder="https://certificate-url.com"
												/>
											</div>
										</div>
									</div>
								))}
								<Button
									type="button"
									variant="outline"
									onClick={() =>
										addArrayItem("certificates", {
											title: "",
											issuer: "",
											issued_at: new Date(),
										})
									}
								>
									<Plus className="h-4 w-4 mr-2" />
									Add Certificate
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="settings" className="space-y-6">
						{/* Domain Settings */}
						<Card>
							<CardHeader>
								<CardTitle>Domain & Settings</CardTitle>
								<CardDescription>Configure your portfolio settings</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="domain">Domain URL</Label>
										<Input
											id="domain"
											value={formData.domain || ""}
											onChange={(e) => updateFormData("domain", e.target.value)}
											placeholder="https://johndoe.com"
											className={errors.domain ? "border-red-500" : ""}
										/>
										<ErrorMessage fieldName="domain" />
									</div>
									<div className="space-y-2">
										<Label>Domain Type *</Label>
										<Select value={formData.domain_type} onValueChange={(value: string) => updateFormData("domain_type", value)}>
											<SelectTrigger className={errors.domain_type ? "border-red-500" : ""}>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="subdomain">Subdomain</SelectItem>
												<SelectItem value="custom">Custom Domain</SelectItem>
											</SelectContent>
										</Select>
										<ErrorMessage fieldName="domain_type" />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="theme_id">Theme ID *</Label>
									<Input
										id="theme_id"
										value={formData.theme_id}
										onChange={(e) => updateFormData("theme_id", e.target.value)}
										placeholder="550e8400-e29b-41d4-a716-446655440000"
										className={errors.theme_id ? "border-red-500" : ""}
									/>
									<p className="text-sm text-muted-foreground">UUID of the theme to use for this portfolio</p>
									<ErrorMessage fieldName="theme_id" />
								</div>
								<div className="flex items-center space-x-2">
									<Switch checked={formData.is_active ?? true} onCheckedChange={(checked) => updateFormData("is_active", checked)} />
									<Label>Portfolio is Active</Label>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				<Separator />

				<div className="flex justify-end space-x-4">
					<Button type="button" variant="outline" disabled={isPending}>
						Save as Draft
					</Button>
					<Button type="submit" disabled={isPending}>
						{isPending ? "Creating..." : "Create Portfolio"}
					</Button>
				</div>
			</form>
		</div>
	)
}
