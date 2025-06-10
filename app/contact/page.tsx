import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/actions/contact"
import { useActionState } from "react"

export default function ContactPage() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your business needs? Get in touch with our team for personalized solutions across all our
            service areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-orange-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">Main Office</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
                <p className="text-slate-600 mt-4 mb-2">International</p>
                <p className="font-semibold">+1 (555) 987-6543</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-orange-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">General Inquiries</p>
                <p className="font-semibold">info@viquoeglobal.com</p>
                <p className="text-slate-600 mt-4 mb-2">Sales</p>
                <p className="font-semibold">sales@viquoeglobal.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">Headquarters</p>
                <p className="font-semibold">
                  123 Business District
                  <br />
                  Global Trade Center
                  <br />
                  International City, IC 12345
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={action} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automobiles">Automobile Sales</SelectItem>
                        <SelectItem value="logistics">Road Logistics & Supply</SelectItem>
                        <SelectItem value="construction">General Contractors</SelectItem>
                        <SelectItem value="import-export">Import & Export</SelectItem>
                        <SelectItem value="supply">General Goods Supply</SelectItem>
                        <SelectItem value="facilitation">Trade Facilitation</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full bg-orange-600 hover:bg-orange-700">
                    <Send className="mr-2 h-4 w-4" />
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>

                  {state && (
                    <div
                      className={`mt-4 p-4 rounded-md ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                    >
                      {state.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
              <CardDescription>Visit our headquarters or any of our regional offices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
                <p className="text-slate-500">Interactive Map Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
