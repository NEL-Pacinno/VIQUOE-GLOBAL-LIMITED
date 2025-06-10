import { Globe, Ship, Plane, FileText, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TradePage() {
  const services = [
    {
      icon: Ship,
      title: "Import Services",
      description: "Comprehensive import solutions for diverse product categories",
      features: ["Customs Clearance", "Documentation", "Quality Inspection", "Logistics Coordination"],
    },
    {
      icon: Plane,
      title: "Export Services",
      description: "Global export capabilities to expand your market reach",
      features: ["Market Research", "Export Documentation", "Shipping Arrangements", "Compliance Management"],
    },
    {
      icon: FileText,
      title: "Trade Documentation",
      description: "Complete documentation and regulatory compliance services",
      features: ["Letters of Credit", "Bills of Lading", "Certificates of Origin", "Insurance Documentation"],
    },
  ]

  const productCategories = [
    "Electronics & Technology",
    "Textiles & Apparel",
    "Machinery & Equipment",
    "Food & Beverages",
    "Raw Materials",
    "Consumer Goods",
    "Medical Equipment",
    "Automotive Parts",
  ]

  const tradeRoutes = [
    { region: "North America", countries: "USA, Canada, Mexico" },
    { region: "Europe", countries: "UK, Germany, France, Netherlands" },
    { region: "Asia Pacific", countries: "China, Japan, South Korea, Singapore" },
    { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
    { region: "Africa", countries: "South Africa, Nigeria, Kenya" },
    { region: "South America", countries: "Brazil, Argentina, Chile" },
  ]

  const advantages = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Established partnerships in over 50 countries worldwide",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and risk mitigation strategies",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time market data and trend analysis for informed decisions",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Import & Export Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive international trade services connecting global markets. We facilitate seamless import and
            export operations with expertise in regulatory compliance and logistics coordination.
          </p>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Trade Services</h2>
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

        {/* Product Categories */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
          <p className="text-center text-slate-600 mb-8">
            We handle diverse product categories across all major industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <Badge key={index} variant="outline" className="justify-center py-3 text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Trade Routes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Global Trade Routes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeRoutes.map((route, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{route.region}</CardTitle>
                  <CardDescription>{route.countries}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Trade Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle>{advantage.title}</CardTitle>
                    <CardDescription>{advantage.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Trade Statistics */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Trade Performance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$500M+</div>
              <div className="text-sm text-slate-600">Annual Trade Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-slate-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-sm text-slate-600">Successful Shipments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-sm text-slate-600">On-Time Delivery</div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Trade Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your trade requirements" },
              { step: "02", title: "Documentation", desc: "Preparing all necessary trade documents" },
              { step: "03", title: "Compliance", desc: "Ensuring regulatory compliance" },
              { step: "04", title: "Logistics", desc: "Coordinating shipping and delivery" },
              { step: "05", title: "Completion", desc: "Final delivery and documentation" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-slate-600 text-xs">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Expand Your Global Reach</h2>
          <p className="text-xl mb-8 text-orange-100">
            Connect with international markets through our comprehensive trade services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Start Trading
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Market Analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
