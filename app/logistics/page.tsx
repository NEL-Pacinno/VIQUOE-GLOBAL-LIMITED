import { Truck, MapPin, Clock, Package, Route, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LogisticsPage() {
  const services = [
    {
      icon: Truck,
      title: "Transportation Services",
      description: "Reliable road transportation for goods of all sizes",
      features: ["Full Truckload (FTL)", "Less Than Truckload (LTL)", "Express Delivery", "Scheduled Routes"],
    },
    {
      icon: Package,
      title: "Warehousing & Distribution",
      description: "Secure storage and efficient distribution networks",
      features: ["Climate-Controlled Storage", "Inventory Management", "Cross-Docking", "Pick & Pack Services"],
    },
    {
      icon: Route,
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization and management",
      features: ["Route Optimization", "Demand Planning", "Vendor Management", "Cost Analysis"],
    },
  ]

  const capabilities = [
    { name: "On-Time Delivery", percentage: 98 },
    { name: "Customer Satisfaction", percentage: 96 },
    { name: "Fleet Utilization", percentage: 94 },
    { name: "Cost Efficiency", percentage: 92 },
  ]

  const coverage = [
    "Local Distribution",
    "Regional Networks",
    "Interstate Commerce",
    "Cross-Border Transport",
    "Last-Mile Delivery",
    "Reverse Logistics",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Road Logistics & Supply</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive transportation and distribution services ensuring efficient movement of goods within and
            across regions with reliability and cost-effectiveness.
          </p>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Logistics Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{capability.name}</span>
                  <span className="text-orange-600 font-bold">{capability.percentage}%</span>
                </div>
                <Progress value={capability.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Coverage</h2>
              <p className="text-slate-600 mb-8">
                Our extensive network covers all major routes and destinations, providing flexible solutions for
                businesses of all sizes across multiple regions and markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {coverage.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Vehicles in Fleet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Distribution Centers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
                  <div className="text-sm text-slate-600">Miles Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Tracking */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-lg text-slate-600">Real-time tracking and management systems</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>GPS Tracking</CardTitle>
                <CardDescription>Real-time location monitoring for all shipments</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Delivery Scheduling</CardTitle>
                <CardDescription>Optimized routing and delivery time predictions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Cargo Security</CardTitle>
                <CardDescription>Advanced security systems and insurance coverage</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Supply Chain Today</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a customized logistics solution that reduces costs and improves efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Track Shipment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
