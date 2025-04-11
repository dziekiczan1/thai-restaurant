import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { FormDataType } from "@/app/(main)/book/page";

interface ReservationConfirmationProps {
  formData: FormDataType;
  onNewReservation: () => void;
}

export const ReservationConfirmation: React.FC<
  ReservationConfirmationProps
> = ({ formData, onNewReservation }) => {
  return (
    <div className="bg-primary/20 border-2 border-primary rounded-lg p-8 text-center animate-fade-in">
      <FontAwesomeIcon
        icon={faChampagneGlasses}
        className="text-5xl text-primary mb-4"
      />
      <h2 className="font-chillax text-xl mb-4 font-medium">
        Thank You for Your Reservation!
      </h2>
      <p className="text-lg mb-6">
        We&rsquo;ve received your reservation request for {formData.guests}{" "}
        guests on {formData.date} at {formData.time}. A confirmation will be
        sent to {formData.email} shortly.
      </p>
      <div className="bg-white/10 p-4 rounded-lg mb-6 inline-block">
        <h3 className="font-chillax text-base mb-2 underline underline-offset-4">
          Reservation Details:
        </h3>
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
            <strong>Seating Preference:</strong> {formData.seatingPreference}
          </p>
        )}
      </div>
      <div>
        <button
          onClick={onNewReservation}
          className="bg-primary text-black py-3 px-8 rounded-lg text-lg font-medium hover:bg-primary/80 transition-colors"
        >
          Make Another Reservation
        </button>
      </div>
    </div>
  );
};
