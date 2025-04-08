interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
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
