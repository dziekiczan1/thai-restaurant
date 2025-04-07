import { FormDataType } from "@/app/(main)/book/page";
import { FormSection } from "./form-section";

interface ContactFormProps {
  formData: FormDataType;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  onChange,
}) => {
  return (
    <>
      <FormSection title="Contact Information">
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
            onChange={onChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
            placeholder="Your full name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-white/80" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={onChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-white/80" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={onChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-white/80" htmlFor="occasion">
            Special Occasion (Optional)
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={onChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
          >
            <option value="">Select if applicable</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date Night">Date Night</option>
            <option value="Business Dinner">Business Dinner</option>
            <option value="Celebration">Celebration</option>
            <option value="Other">Other (please specify in notes)</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-white/80" htmlFor="specialRequests">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={onChange}
            rows={4}
            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
            placeholder="Please let us know about any dietary restrictions, allergies, or special requests."
          ></textarea>
        </div>
      </FormSection>
    </>
  );
};
