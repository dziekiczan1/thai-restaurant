"use client";
import React, { useState } from "react";
import { PageTitle, SectionTitle } from "@/components/page-title";
import { CallToAction } from "@/components/cta";
import { FAQCard } from "@/components/faq-item";
import { WorkshopList } from "@/components/workshop-card";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Workshop() {
  const workshops = [
    {
      id: 1,
      title: "Pasta Making Masterclass",
      chef: "Chef Maria Rodriguez",
      image: "/images/pasta-workshop.jpg",
      description:
        "Learn the art of handmade pasta from scratch. From delicate tortellini to perfect pappardelle, master traditional techniques and contemporary flavors.",
      dates: ["April 15, 2025", "May 20, 2025"],
      price: 120,
      duration: "3 hours",
      capacity: 12,
      level: "Beginner to Intermediate",
      includes: [
        "All ingredients",
        "Recipe booklet",
        "Wine pairing",
        "Take-home pasta kit",
      ],
    },
    {
      id: 2,
      title: "Farm-to-Table Experience",
      chef: "Chef Thomas Lin",
      image: "/images/farm-workshop.jpg",
      description:
        "Join us for a unique experience starting at our partner farm where you'll harvest fresh ingredients, followed by a cooking workshop to transform them into a stunning seasonal meal.",
      dates: ["April 22, 2025", "May 27, 2025"],
      price: 165,
      duration: "5 hours",
      capacity: 8,
      level: "All levels",
      includes: [
        "Transportation to farm",
        "Farm tour",
        "Harvesting session",
        "Cooking workshop",
        "Full meal with wine",
      ],
    },
    {
      id: 3,
      title: "Artisanal Bread Baking",
      chef: "Baker Sophie Williams",
      image: "/images/bread-workshop.jpg",
      description:
        "Discover the secrets to perfect sourdough, focaccia, and artisanal loaves. Learn about fermentation, kneading techniques, and how to achieve that perfect crust.",
      dates: ["April 29, 2025", "May 13, 2025"],
      price: 95,
      duration: "4 hours",
      capacity: 10,
      level: "All levels",
      includes: [
        "All ingredients",
        "Sourdough starter to take home",
        "Recipe collection",
        "Bread tasting with accompaniments",
      ],
    },
    {
      id: 4,
      title: "Cocktail Crafting & Mixology",
      chef: "Mixologist James Carter",
      image: "/images/cocktail-workshop.jpg",
      description:
        "Elevate your home bar with professional mixology techniques. Learn to craft signature cocktails, balance flavors, and present drinks with style.",
      dates: ["May 6, 2025", "June 3, 2025"],
      price: 85,
      duration: "2.5 hours",
      capacity: 14,
      level: "All levels",
      includes: [
        "All ingredients",
        "Cocktail shaker set",
        "Recipe cards",
        "Tasting of all creations",
      ],
    },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "Do I need to bring anything?",
      answer:
        "Just yourself and your enthusiasm! We provide all necessary ingredients, equipment, and aprons. You may want to bring a container for any leftovers, though we also have packaging available.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Please let us know about any allergies or dietary restrictions when booking. We can accommodate most requirements with advance notice.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Workshops can be rescheduled up to 7 days before the event. Cancellations made within 7 days of the workshop are eligible for a 50% refund or full credit toward a future workshop.",
    },
  ];

  const [expandedWorkshop, setExpandedWorkshop] = useState<number | null>(null);

  const toggleWorkshopDetails = (id: number) => {
    if (expandedWorkshop === id) {
      setExpandedWorkshop(null);
    } else {
      setExpandedWorkshop(id);
    }
  };

  return (
    <div className="w-full text-white min-h-screen overflow-y-auto">
      <div className="max-w-3xl mx-auto py-12">
        <PageTitle text="Culinary Workshops" centered />

        <div className="text-center mb-12">
          <p className="text-lg">
            Immerse yourself in the culinary arts with our hands-on workshops
            led by our talented chefs. From technique mastery to ingredient
            exploration, each class offers a unique experience for food
            enthusiasts of all levels.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-12">
          <img
            src="/main.webp"
            alt="Featured workshop experience"
            className="w-full h-[300px] object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-chillax text-primary text-2xl mb-2">
              Upcoming Workshops
            </h3>
            <p className="text-white/90">
              Join our culinary team for immersive, hands-on cooking experiences
            </p>
          </div>
        </div>

        <WorkshopList
          workshops={workshops}
          expandedWorkshop={expandedWorkshop}
          toggleWorkshopDetails={toggleWorkshopDetails}
        />

        <CallToAction
          title="Private Workshops"
          description="Looking for a unique team-building experience or special celebration? We offer private workshops tailored to your group's interests and skill levels."
          buttonText="Inquire About Private Events"
          className={`mt-12`}
        />

        <div className="mt-12">
          <SectionTitle text="FAQs" />

          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <FAQCard
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
