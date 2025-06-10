import { Users, Target, Award, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term partnerships with our clients through trust, reliability, and mutual success.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting markets worldwide with our extensive network and international expertise.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing innovative approaches and technologies to solve complex business challenges.",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Viquoe Global Ltd</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A multi-faceted business enterprise committed to delivering comprehensive solutions across automobiles,
            logistics, construction, and international trade.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Founded with a vision to bridge multiple industries and markets, Viquoe Global Ltd has grown into a
                trusted partner for businesses seeking comprehensive solutions across diverse sectors.
              </p>
              <p>
                Our journey began with a simple belief: that success comes from understanding our clients' unique needs
                and delivering tailored solutions that drive real results. Today, we operate across six major business
                verticals, serving clients in over 50 countries worldwide.
              </p>
              <p>
                From automobile sales to international trade facilitation, our integrated approach allows us to provide
                end-to-end solutions that streamline operations and maximize efficiency for our partners.
              </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-sm text-slate-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Global Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600">
                To provide comprehensive, reliable, and innovative solutions across multiple industries, enabling our
                clients to achieve their business objectives while fostering sustainable growth and global connectivity.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600">
                To be the leading global partner for integrated business solutions, recognized for our excellence,
                innovation, and commitment to creating value across all industries we serve.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Business Verticals Overview */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Business Verticals</h2>
            <p className="text-lg text-slate-600">Comprehensive solutions across six key industries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Automobile Sales</h3>
              <p className="text-slate-600 text-sm">Complete range of vehicles for all transportation needs</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Road Logistics & Supply</h3>
              <p className="text-slate-600 text-sm">Efficient transportation and distribution services</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">General Contractors</h3>
              <p className="text-slate-600 text-sm">Construction and infrastructure project management</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Import & Export</h3>
              <p className="text-slate-600 text-sm">International trade of diverse products and goods</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">General Goods Supply</h3>
              <p className="text-slate-600 text-sm">Reliable distribution and supply chain solutions</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Trade Facilitation</h3>
              <p className="text-slate-600 text-sm">Connecting global markets with regulatory expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
