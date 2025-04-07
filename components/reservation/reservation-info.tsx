import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FormSection } from "@/components/reservation/form-section";

export const ReservationInfo: React.FC = () => {
  return (
    <div className="bg-white/10 rounded-lg p-6 h-fit">
      <h2 className="font-chillax text-lg text-primary mb-6">
        Reservation Information
      </h2>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="font-chillax text-md underline underline-offset-4 mb-2">
            Opening Hours
          </h3>
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
          <h3 className="font-chillax text-md underline underline-offset-4 mb-2">
            Reservation Policies
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>Reservations can be made up to 30 days in advance.</li>
            <li>
              We hold your table for 15 minutes past the reservation time.
            </li>
            <li>For parties of 8 or more, please call us directly.</li>
            <li>A credit card is required for parties of 6 or more.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-chillax text-md underline underline-offset-4 mb-2">
            Need Assistance?
          </h3>
          <p className="text-white/80 mb-2">
            For immediate assistance or same-day reservations, please call us
            directly:
          </p>
          <a
            href="tel:+11234567890"
            className="flex items-center justify-center gap-2 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors mt-4"
          >
            <FontAwesomeIcon icon={faPhone} className="text-primary" />
            (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
};
