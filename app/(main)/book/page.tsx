"use client";
import { useState } from "react";
import { PageTitle } from "@/components/page-title";
import { CallToAction } from "@/components/cta";
import { IntroText } from "@/components/intro-text";
import { ReservationForm } from "@/components/reservation/reservation-form";
import { ReservationConfirmation } from "@/components/reservation/reservation-confirmation";
import { ReservationInfo } from "@/components/reservation/reservation-info";

export type FormDataType = {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  occasion: string;
  specialRequests: string;
  seatingPreference: string;
};

export default function BookTablePage() {
  const [formData, setFormData] = useState<FormDataType>({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    occasion: "",
    specialRequests: "",
    seatingPreference: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = (data: FormDataType) => {
    setFormData(data);
    setShowConfirmation(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const makeNewReservation = () => {
    setFormData({
      date: "",
      time: "",
      guests: "2",
      name: "",
      email: "",
      phone: "",
      occasion: "",
      specialRequests: "",
      seatingPreference: "",
    });
    setShowConfirmation(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <PageTitle text="Reserve Your Table" />
      <IntroText
        text={`Join us for an unforgettable dining experience. Book your table online and secure your preferred date and time.`}
      />

      {showConfirmation ? (
        <ReservationConfirmation
          formData={formData}
          onNewReservation={makeNewReservation}
        />
      ) : (
        <div className="flex flex-col gap-8">
          <ReservationForm initialData={formData} onSubmit={handleFormSubmit} />
          <ReservationInfo />
        </div>
      )}

      <CallToAction
        title="Planning a Special Event?"
        description="For private dining, large groups, or special occasions, our events team is ready to help create a memorable experience."
        buttonText="Inquire About Private Dining"
        className={`mt-12`}
      />
    </div>
  );
}
