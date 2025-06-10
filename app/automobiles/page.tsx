import { Car, Truck, Bus, Wrench, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AutomobilesPage() {
  const vehicleTypes = [
    {
      icon: Car,
      title: "Passenger Vehicles",
      description: "Sedans, SUVs, hatchbacks, and luxury cars for personal and corporate use",
      features: ["New & Used Options", "Financing Available", "Extended Warranties", "Trade-in Programs"],
    },
    {
      icon: Truck,
      title: "Commercial Vehicles",
      description: "Trucks, vans, and commercial fleet vehicles for business operations",
      features: ["Fleet Discounts", "Maintenance Packages", "Custom Configurations", "Leasing Options"],
    },
    {
      icon: Bus,
      title: "Specialized Vehicles",
      description: "Buses, construction vehicles, and specialized transportation solutions",
      features: ["Custom Builds", "Industry Compliance", "Training Included", "Parts Support"],
    },
  ]

  const brands = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Nissan",
    "Hyundai",
    "Kia",
    "Mazda",
  ]

  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive automotive service and repair solutions",
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Protection plans for peace of mind and long-term value",
    },
    {
      icon: Award,
      title: "Certified Pre-Owned",
      description: "Quality assured used vehicles with comprehensive inspections",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Automobile Sales</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete range of vehicles for all your transportation needs. From personal cars to commercial fleets, we
            provide quality automobiles with comprehensive support services.
          </p>
        </div>

        {/* Vehicle Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Vehicle Categories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {vehicleTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
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

        {/* Brands */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Authorized Dealer Network</h2>
          <p className="text-center text-slate-600 mb-8">We represent leading automotive brands worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <Badge key={index} variant="outline" className="justify-center py-2 text-sm">
                {brand}
              </Badge>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Vehicle?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact our automotive specialists for personalized recommendations and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Browse Inventory
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
