"use client";
import React, { useState } from "react";
import {
  faCalendarAlt,
  faUserFriends,
  faClock,
  faUtensils,
  faChampagneGlasses,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BookTablePage() {
  // State for the reservation form
  const [formData, setFormData] = useState({
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

  // State for showing confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Available time slots
  const timeSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Reservation details:", formData);
    // Show confirmation
    setShowConfirmation(true);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset form and confirmation
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
    <div className="w-full text-white min-h-screen lg:overflow-y-auto">
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="font-bitter text-5xl md:text-6xl text-primary text-center mb-6">
          Reserve Your Table
        </h1>

        <div className="text-center mb-12">
          <p className="text-lg">
            Join us for an unforgettable dining experience. Book your table
            online and secure your preferred date and time.
          </p>
        </div>

        {showConfirmation ? (
          <div className="bg-primary/20 border-2 border-primary rounded-lg p-8 text-center animate-fade-in">
            <FontAwesomeIcon
              icon={faChampagneGlasses}
              className="text-5xl text-primary mb-4"
            />
            <h2 className="font-bitter text-3xl mb-4">
              Thank You for Your Reservation!
            </h2>
            <p className="text-lg mb-6">
              We've received your reservation request for {formData.guests}{" "}
              guests on {formData.date} at {formData.time}. A confirmation will
              be sent to {formData.email} shortly.
            </p>
            <div className="bg-white/10 p-4 rounded-lg mb-6 inline-block">
              <h3 className="font-bitter text-xl mb-2">Reservation Details</h3>
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Time:</strong> {formData.time}
              </p>
              <p>
                <strong>Party Size:</strong> {formData.guests} guests
              </p>
              {formData.occasion && (
                <p>
                  <strong>Occasion:</strong> {formData.occasion}
                </p>
              )}
              {formData.seatingPreference && (
                <p>
                  <strong>Seating Preference:</strong>{" "}
                  {formData.seatingPreference}
                </p>
              )}
            </div>
            <div>
              <button
                onClick={makeNewReservation}
                className="bg-primary text-black py-3 px-8 rounded-lg text-lg font-medium hover:bg-primary/80 transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <div>
              <div className="bg-white/10 rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                  <h2 className="font-bitter text-2xl text-primary mb-6">
                    Reservation Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        className="block mb-2 text-white/80"
                        htmlFor="date"
                      >
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="mr-2 text-primary"
                        />
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-2 text-white/80"
                        htmlFor="time"
                      >
                        <FontAwesomeIcon
                          icon={faClock}
                          className="mr-2 text-primary"
                        />
                        Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                      >
                        <option value="" hidden>
                          Select a time
                        </option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block mb-2 text-white/80"
                      htmlFor="guests"
                    >
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="mr-2 text-primary"
                      />
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value="9+">
                        9+ guests (please specify in notes)
                      </option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block mb-2 text-white/80"
                      htmlFor="seatingPreference"
                    >
                      <FontAwesomeIcon
                        icon={faUtensils}
                        className="mr-2 text-primary"
                      />
                      Seating Preference
                    </label>
                    <select
                      id="seatingPreference"
                      name="seatingPreference"
                      value={formData.seatingPreference}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                    >
                      <option value="">No preference</option>
                      <option value="Window">Window</option>
                      <option value="Outdoor">
                        Outdoor patio (weather permitting)
                      </option>
                      <option value="Quiet">Quiet area</option>
                      <option value="Bar">Near the bar</option>
                    </select>
                  </div>

                  <h2 className="font-bitter text-2xl text-primary mb-6">
                    Contact Information
                  </h2>

                  <div className="mb-6">
                    <label className="block mb-2 text-white/80" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        className="block mb-2 text-white/80"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-2 text-white/80"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block mb-2 text-white/80"
                      htmlFor="occasion"
                    >
                      Special Occasion (Optional)
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                    >
                      <option value="">Select if applicable</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Date Night">Date Night</option>
                      <option value="Business Dinner">Business Dinner</option>
                      <option value="Celebration">Celebration</option>
                      <option value="Other">
                        Other (please specify in notes)
                      </option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label
                      className="block mb-2 text-white/80"
                      htmlFor="specialRequests"
                    >
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                      placeholder="Please let us know about any dietary restrictions, allergies, or special requests."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary text-black py-3 px-8 rounded-lg text-lg font-medium hover:bg-primary/80 transition-colors"
                    >
                      Reserve My Table
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 h-fit">
              <h2 className="font-bitter text-2xl text-primary mb-6">
                Reservation Information
              </h2>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-bitter text-xl mb-2">Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tuesday - Thursday:</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday - Saturday:</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>5:00 PM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Monday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bitter text-xl mb-2">
                    Reservation Policies
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Reservations can be made up to 30 days in advance.</li>
                    <li>
                      We hold your table for 15 minutes past the reservation
                      time.
                    </li>
                    <li>For parties of 8 or more, please call us directly.</li>
                    <li>A credit card is required for parties of 6 or more.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bitter text-xl mb-2">Need Assistance?</h3>
                  <p className="text-white/80 mb-2">
                    For immediate assistance or same-day reservations, please
                    call us directly:
                  </p>
                  <a
                    href="tel:+11234567890"
                    className="flex items-center justify-center gap-2 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-primary" />
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="border-2 border-primary rounded-lg p-8 text-center mt-12">
          <h3 className="text-3xl font-bitter mb-4">
            Planning a Special Event?
          </h3>
          <p className="mb-6">
            For private dining, large groups, or special occasions, our events
            team is ready to help create a memorable experience.
          </p>
          <button className="bg-primary text-black py-3 px-8 rounded-lg text-lg font-medium hover:bg-primary/80 transition-colors">
            Inquire About Private Dining
          </button>
        </div>
      </div>
    </div>
  );
}
