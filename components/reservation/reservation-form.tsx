import { useState } from "react";
import { timeSlots } from "@/config/booking-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUserFriends,
  faClock,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FormDataType } from "@/app/(main)/book/page";
import { FormSection } from "./form-section";
import { ContactForm } from "./contact-form";

interface ReservationFormProps {
  initialData: FormDataType;
  onSubmit: (data: FormDataType) => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormDataType>(initialData);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white/10 rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <FormSection title="Reservation Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block mb-2 text-white/80" htmlFor="date">
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
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary scheme-dark"
              />
            </div>

            <div>
              <label className="block mb-2 text-white/80" htmlFor="time">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
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
            <label className="block mb-2 text-white/80" htmlFor="guests">
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
              <option value="9+">9+ guests (please specify in notes)</option>
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
        </FormSection>

        <ContactForm formData={formData} onChange={handleInputChange} />

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
  );
};
