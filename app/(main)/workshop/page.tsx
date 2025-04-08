"use client";
import React, { useState } from "react";
import { PageTitle, SectionTitle } from "@/components/page-title";
import { CallToAction } from "@/components/cta";
import { FAQCard } from "@/components/faq-item";
import { WorkshopList } from "@/components/workshop-card";
import { IntroText } from "@/components/intro-text";
import { workshops } from "@/config/workshop-data";
import { faqItems } from "@/config/faq-data";

export default function Workshop() {
  const [expandedWorkshop, setExpandedWorkshop] = useState<number | null>(null);

  const toggleWorkshopDetails = (id: number) => {
    if (expandedWorkshop === id) {
      setExpandedWorkshop(null);
    } else {
      setExpandedWorkshop(id);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <PageTitle text="Culinary Workshops" />
      <IntroText
        text={`Immerse yourself in the culinary arts with our hands-on workshops led by our talented chefs. From technique mastery to ingredient exploration, each class offers a unique experience for food enthusiasts of all levels.`}
      />

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
  );
}
