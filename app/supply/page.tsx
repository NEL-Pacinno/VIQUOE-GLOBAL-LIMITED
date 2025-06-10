import { Package, Warehouse, Truck, BarChart, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SupplyPage() {
  const services = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Comprehensive sourcing solutions for diverse product categories",
      features: ["Supplier Identification", "Quality Assessment", "Price Negotiation", "Contract Management"],
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description: "Efficient inventory control and warehouse management systems",
      features: ["Stock Optimization", "Demand Forecasting", "Automated Reordering", "Real-time Tracking"],
    },
    {
      icon: Truck,
      title: "Distribution Network",
      description: "Extensive distribution network for timely product delivery",
      features: ["Multi-channel Distribution", "Last-mile Delivery", "Express Services", "Bulk Distribution"],
    },
  ]

  const industries = [
    "Manufacturing",
    "Retail & E-commerce",
    "Healthcare",
    "Food & Beverage",
    "Construction",
    "Technology",
    "Automotive",
    "Hospitality",
  ]

  const productLines = [
    { category: "Industrial Supplies", items: "Tools, Equipment, Safety Gear" },
    { category: "Office Supplies", items: "Stationery, Furniture, Electronics" },
    { category: "Medical Supplies", items: "Equipment, Consumables, PPE" },
    { category: "Food Products", items: "Packaged Foods, Beverages, Ingredients" },
    { category: "Construction Materials", items: "Hardware, Tools, Safety Equipment" },
    { category: "Technology Products", items: "Electronics, Components, Accessories" },
  ]

  const capabilities = [
    {
      icon: BarChart,
      title: "Demand Planning",
      description: "Advanced analytics for accurate demand forecasting and planning",
    },
    {
      icon: Clock,
      title: "Just-in-Time Delivery",
      description: "Optimized delivery schedules to minimize inventory costs",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes for all supplied products",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">General Goods Supply</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive supply chain solutions distributing various products across industries. We act as your
            reliable supplier, meeting diverse demands with efficiency and quality.
          </p>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Supply Chain Services</h2>
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

        {/* Industries Served */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
          <p className="text-center text-slate-600 mb-8">Supplying diverse products across multiple industry sectors</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Badge key={index} variant="outline" className="justify-center py-3 text-sm">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Product Lines */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((line, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{line.category}</CardTitle>
                  <CardDescription>{line.items}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle>{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Supply Chain Metrics */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Supply Chain Performance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
              <div className="text-sm text-slate-600">Products in Catalog</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm text-slate-600">Trusted Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-slate-600">Order Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24hrs</div>
              <div className="text-sm text-slate-600">Average Fulfillment</div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Supply Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cost Optimization</h3>
                    <p className="text-slate-600">
                      Leverage our buying power and supplier relationships for competitive pricing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                    <p className="text-slate-600">
                      Consistent supply availability with backup suppliers and contingency planning
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Scalability</h3>
                    <p className="text-slate-600">
                      Flexible solutions that grow with your business needs and market demands
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Supply Chain Benefits</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Cost Reduction</span>
                  <span className="font-bold text-orange-600">Up to 25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Inventory Optimization</span>
                  <span className="font-bold text-orange-600">30% Reduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Order Fulfillment</span>
                  <span className="font-bold text-orange-600">Same Day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Quality Assurance</span>
                  <span className="font-bold text-orange-600">99.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Supply Chain Today</h2>
          <p className="text-xl mb-8 text-orange-100">
            Partner with us for reliable, cost-effective supply chain solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Request Catalog
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Get Supply Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
