"use client";

import PageHero from "@/components/sections/PageHero";
import {
  BookOpen,
  Calculator,
  Calendar,
  CheckCircle,
  FileText,
  Home,
  Phone,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Relocation Guides",
    description: "Comprehensive guides for moving to Las Vegas",
    resources: [
      "Las Vegas Neighborhood Guide",
      "Moving Checklist",
      "School District Information",
      "Cost of Living Calculator",
    ],
  },
  {
    icon: Calculator,
    title: "Financial Tools",
    description: "Tools to help you plan your relocation budget",
    resources: [
      "Mortgage Calculator",
      "Property Tax Estimator",
      "Moving Cost Calculator",
      "ROI Investment Calculator",
    ],
  },
  {
    icon: FileText,
    title: "Legal Resources",
    description: "Important legal information for your move",
    resources: [
      "Nevada State Laws",
      "Real Estate Regulations",
      "Tax Information",
      "Business Registration Guide",
    ],
  },
  {
    icon: Home,
    title: "Property Resources",
    description: "Everything you need to know about Las Vegas real estate",
    resources: [
      "Market Trends Report",
      "Property Search Tips",
      "Home Inspection Guide",
      "Closing Process Overview",
    ],
  },
];

const featuredArticles = [
  {
    title: "Top 10 Reasons to Move to Las Vegas in 2024",
    excerpt:
      "Discover why Las Vegas is becoming the top destination for relocation in the United States.",
    readTime: "5 min read",
    category: "Relocation Tips",
  },
  {
    title: "Complete Guide to Las Vegas Neighborhoods",
    excerpt:
      "Find the perfect neighborhood that matches your lifestyle and budget in Las Vegas.",
    readTime: "8 min read",
    category: "Neighborhood Guide",
  },
  {
    title: "Investment Opportunities in Las Vegas Real Estate",
    excerpt:
      "Learn about the best investment opportunities and market trends in Las Vegas.",
    readTime: "6 min read",
    category: "Investment",
  },
  {
    title: "Moving from California to Nevada: What You Need to Know",
    excerpt:
      "Essential information for Californians considering a move to Las Vegas.",
    readTime: "7 min read",
    category: "Relocation Tips",
  },
];

const tools = [
  {
    icon: Calculator,
    title: "Cost of Living Calculator",
    description: "Compare your current city's cost of living with Las Vegas",
    href: "#calculator",
  },
  {
    icon: Home,
    title: "Property Search Tool",
    description: "Find your perfect home in Las Vegas with our advanced search",
    href: "#search",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Get detailed market insights and trends for Las Vegas",
    href: "#market",
  },
  {
    icon: Users,
    title: "Community Finder",
    description: "Discover the best communities for your lifestyle",
    href: "#community",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Resources & Tools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Las Vegas Relocation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                Resources
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Everything you need to know about relocating to Las Vegas. From
              guides and tools to market insights and neighborhood information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2"
              >
                Book a Showing
              </a>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources organized by category to help you with
              every aspect of your relocation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.resources.map((resource) => (
                    <li
                      key={resource}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      {resource}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights and tips to help you make informed decisions about
              your Las Vegas relocation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our tools to plan your relocation and make informed decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {tool.description}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Launch Tool
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse available properties in Las Vegas while exploring our
              relocation resources
            </p>
          </motion.div>

          {/* RealScout Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_HIGH"
              listing-status="For Sale"
              property-types="SFR,MF,OTHER"
              price-min="400000"
              price-max="800000"
            ></realscout-office-listings>
          </motion.div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Properties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Featured Properties
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_HIGH"
                listing-status="For Sale"
                property-types="SFR"
                price-min="500000"
                price-max="900000"
              ></realscout-office-listings>
            </motion.div>

            {/* Investment Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Investment Opportunities
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_LOW"
                listing-status="For Sale"
                property-types="MF,SFR"
                price-min="300000"
                price-max="600000"
              ></realscout-office-listings>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Las Vegas Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized assistance with your relocation from our expert
              team
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                Book a Showing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
