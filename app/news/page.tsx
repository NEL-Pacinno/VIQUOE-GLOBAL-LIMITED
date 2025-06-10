import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  const featuredNews = {
    title: "Viquoe Global Expands Operations to Southeast Asia",
    excerpt:
      "Strategic expansion includes new logistics hubs in Singapore and Malaysia, strengthening our international trade capabilities.",
    date: "December 15, 2024",
    author: "Corporate Communications",
    category: "Expansion",
    image: "/placeholder.svg?height=400&width=600",
  }

  const newsArticles = [
    {
      title: "New Partnership with Leading Automotive Manufacturer",
      excerpt:
        "Strategic alliance to supply vehicles across North American markets, expanding our automobile division significantly.",
      date: "December 10, 2024",
      author: "Sales Team",
      category: "Partnership",
      readTime: "3 min read",
    },
    {
      title: "Sustainable Construction Practices Initiative Launched",
      excerpt: "Implementing green building standards and sustainable materials across all construction projects.",
      date: "December 5, 2024",
      author: "Construction Division",
      category: "Sustainability",
      readTime: "4 min read",
    },
    {
      title: "Record-Breaking Quarter in International Trade",
      excerpt: "Q4 2024 shows 35% growth in trade volume, with significant increases in Asia-Pacific markets.",
      date: "November 28, 2024",
      author: "Trade Division",
      category: "Performance",
      readTime: "2 min read",
    },
    {
      title: "Advanced Logistics Technology Implementation",
      excerpt: "New AI-powered route optimization and real-time tracking systems improve delivery efficiency by 25%.",
      date: "November 20, 2024",
      author: "Technology Team",
      category: "Innovation",
      readTime: "5 min read",
    },
    {
      title: "Supply Chain Resilience Program Success",
      excerpt: "Multi-tier supplier diversification strategy reduces risk and improves reliability for all clients.",
      date: "November 15, 2024",
      author: "Supply Chain Team",
      category: "Operations",
      readTime: "3 min read",
    },
    {
      title: "Employee Recognition Awards 2024",
      excerpt: "Celebrating outstanding achievements across all divisions with annual recognition ceremony.",
      date: "November 10, 2024",
      author: "Human Resources",
      category: "Company Culture",
      readTime: "2 min read",
    },
  ]

  const categories = [
    "All News",
    "Expansion",
    "Partnership",
    "Sustainability",
    "Performance",
    "Innovation",
    "Operations",
    "Company Culture",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed about Viquoe Global's latest developments, achievements, and industry insights across all our
            business verticals.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-slate-100 h-64 lg:h-auto flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-200">
                  {featuredNews.category}
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredNews.title}</h2>
                <p className="text-slate-600 mb-6">{featuredNews.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredNews.author}</span>
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
                <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <Link href="#" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-orange-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-orange-100">
            Subscribe to our newsletter for the latest news and industry insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-md text-slate-900" />
            <Button variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
