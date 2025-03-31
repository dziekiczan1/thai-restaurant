import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQCard: React.FC<FAQItem> = ({ question, answer }) => {
  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h4 className="font-chillax text-primary text-lg mb-2">{question}</h4>
      <p>{answer}</p>
    </div>
  );
};
