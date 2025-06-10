import { ArrowRight, Car, Truck, Building, Globe, Package, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const services = [
    {
      icon: Car,
      title: "Automobile Sales",
      description: "Complete range of vehicles for all your transportation needs",
      href: "/automobiles",
    },
    {
      icon: Truck,
      title: "Road Logistics & Supply",
      description: "Efficient transportation and distribution services across regions",
      href: "/logistics",
    },
    {
      icon: Building,
      title: "General Contractors",
      description: "Construction and infrastructure project management",
      href: "/construction",
    },
    {
      icon: Globe,
      title: "Import & Export",
      description: "International trade of diverse products and goods",
      href: "/trade",
    },
    {
      icon: Package,
      title: "General Goods Supply",
      description: "Reliable distribution and supply chain solutions",
      href: "/supply",
    },
    {
      icon: Users,
      title: "International Trade Facilitation",
      description: "Connecting global markets with regulatory expertise",
      href: "/facilitation",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Viquoe Global Ltd</h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-200">
              Your Trusted Partner in Automobiles, Logistics, Construction, and International Trade
            </p>
            <p className="text-lg mb-10 text-slate-300 max-w-3xl mx-auto">
              From automobile sales to global trade facilitation, we deliver comprehensive solutions that drive your
              business forward across multiple industries and markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Business Verticals</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions across multiple industries, delivering excellence in every sector we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-6">{service.description}</CardDescription>
                    <Link href={service.href}>
                      <Button
                        variant="outline"
                        className="group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Viquoe Global Ltd?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Multi-Industry Expertise</h3>
                    <p className="text-slate-600">
                      Comprehensive knowledge across automobiles, logistics, construction, and international trade
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                    <p className="text-slate-600">
                      International trade capabilities with regulatory expertise and market connections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reliable Solutions</h3>
                    <p className="text-slate-600">
                      Proven track record in delivering efficient and cost-effective business solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">End-to-End Service</h3>
                    <p className="text-slate-600">
                      Complete project management from planning to execution across all business verticals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let's discuss how Viquoe Global Ltd can support your business needs across our diverse service offerings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Get a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
