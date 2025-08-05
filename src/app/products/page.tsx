"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ProcessOverview from "@/components/blocks/process-overview";
import CTASection from "@/components/blocks/cta-section";

// const PRODUCTS = [
//   {
//     name: "Compression Springs",
//     description:
//       "Engineered for durability and precision, our compression springs are ideal for a wide range of industrial applications.",
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//     slug: "compression-springs",
//   },
//   {
//     name: "Tension Springs",
//     description:
//       "High-performance tension springs designed for reliability and consistent force in demanding environments.",
//     image:
//       "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
//     slug: "tension-springs",
//   },
//   {
//     name: "Torsion Springs",
//     description:
//       "Custom torsion springs manufactured to your specifications for rotational force applications.",
//     image:
//       "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
//     slug: "torsion-springs",
//   },
//   {
//     name: "Wire Forms",
//     description:
//       "Precision wire forms for unique and complex requirements, crafted with advanced manufacturing techniques.",
//     image:
//       "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
//     slug: "wire-forms",
//   },
//   {
//     name: "Flat Springs",
//     description:
//       "Versatile flat springs for electrical, automotive, and industrial uses, made from premium materials.",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
//     slug: "flat-springs",
//   },
//   {
//     name: "Custom Springs",
//     description:
//       "Collaborate with our engineers to create springs tailored to your exact needs and specifications.",
//     image:
//       "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=600&q=80",
//     slug: "custom-springs",
//   },
// ];

const specifications = [
  { label: "Size Range", value: "14mm - 110mm" },
  { label: "Material", value: "Low Carbon Alloy Steel" },
  { label: "Wire Diameter", value: "2mm - 25mm" },
  { label: "Free Length", value: "20mm - 500mm" },
  { label: "Load Capacity", value: "Up to 50,000N" },
  { label: "Surface Finish", value: "Zinc Plated / Powder Coated" },
];

const Products = () => {
  return (
    <div>
      {/* Top gradient background */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 min-h-screen"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: `linear-gradient(to top right, var(--brand), var(--brand))`,
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>

      {/* Bottom gradient background */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] min-h-screen"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: `linear-gradient(to top right, var(--brand), var(--brand))`,
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>

      <div className="flex flex-col max-w-7xl mx-auto gap-10 md:gap-20 pt-32 p-4">
        {/* Hero Section */}
        <section className="relative z-20 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl text-center"
          >
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-brand/10 text-brand font-semibold tracking-wide text-sm md:text-base">
              Precision Engineered Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
              Helical
              <br />
              <span className="text-brand"> Compression Springs </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Engineered for reliability in the most demanding industrial
              applications. Our springs deliver consistent performance across a
              wide range of operating conditions.
            </p>
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Link href="#products">Explore Products</Link>
            </Button>
          </motion.div>
        </section>

        <section id="products" className="w-full p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative shadow-2xl rounded-2xl overflow-hidden">
              <Image
                width={500}
                height={500}
                src={"/images/springs-product.jpg"}
                alt="Precision helical compression springs"
                className="w-full"
              />
            </div>
            <div className="relative shadow-2xl rounded-2xl overflow-hidden hidden md:flex">
              <Image
                width={500}
                height={500}
                src={"/images/springs-product.jpg"}
                alt="Precision helical compression springs"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision-engineered to meet the most stringent industrial
              requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec) => (
              <Card
                key={spec.label}
                className="bg-gradient-to-br from-background via-muted/50 to-background"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {spec.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground mt-1">
                        {spec.value}
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-brand" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section>
          <ProcessOverview />
        </section>

        {/* CTA Section */}
        <section className="mb-10 md:mb-20">
          <div className="text-center bg-brand/20 backdrop:backdrop-blur-3xl rounded-2xl p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Need Custom Springs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our engineering team can design and manufacture springs to your
              exact specifications. Get a custom quote for your application
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
              >
                <Button className="btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Discuss Requirements
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* products */}
        {/* <div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
          id="products"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Our Products
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of precision-engineered springs and wire forms,
              trusted by industry leaders worldwide.
            </p>
          </motion.div>

          <div className="grid gap-10 md:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-gradient-to-br from-background via-muted/50 to-background border border-border/50 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex flex-col h-full"
                >
                  <div className="relative h-56 md:h-64 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-fit mt-auto group-hover:bg-brand group-hover:text-white transition-colors"
                    >
                      Learn More
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>


        <section className="w-full mx-auto relative">
        <CTASection />
      </section>
    </div>
  );
};

export default Products;
