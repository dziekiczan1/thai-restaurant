import React from "react";
import Image from "next/image";
import {
  faUtensils,
  faCalendarAlt,
  faUserFriends,
  faChevronDown,
  faChevronUp,
  faMoneyBill,
  faClock,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Workshop {
  id: number;
  title: string;
  chef: string;
  image: string;
  description: string;
  dates: string[];
  price: number;
  duration: string;
  capacity: number;
  level: string;
  includes: string[];
}

interface InfoBadgeProps {
  icon: IconDefinition;
  text: string;
}

export const InfoBadge: React.FC<InfoBadgeProps> = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <FontAwesomeIcon
      icon={icon}
      className="text-primary w-5 h-5 flex items-center justify-center"
    />
    <span>{text}</span>
  </div>
);

interface WorkshopBasicInfoProps {
  workshop: Workshop;
}

export const WorkshopBasicInfo: React.FC<WorkshopBasicInfoProps> = ({
  workshop,
}) => (
  <div className="flex flex-wrap gap-4 mb-4">
    <InfoBadge icon={faCalendarAlt} text={workshop.dates[0]} />
    <InfoBadge icon={faUtensils} text={workshop.level} />
    <InfoBadge
      icon={faUserFriends}
      text={`Max ${workshop.capacity} participants`}
    />
  </div>
);

interface WorkshopDetailItem {
  icon: IconDefinition;
  label: string;
  value: React.ReactNode;
  isMultiLine?: boolean;
}

const WorkshopDetailsList: React.FC<{ workshop: Workshop }> = ({
  workshop,
}) => {
  const details: WorkshopDetailItem[] = [
    {
      icon: faClock,
      label: "Duration",
      value: workshop.duration,
    },
    {
      icon: faUserFriends,
      label: "Capacity",
      value: `${workshop.capacity} participants`,
    },
    {
      icon: faUtensils,
      label: "Level",
      value: workshop.level,
    },
    { icon: faMoneyBill, label: "Price", value: `$${workshop.price}` },
  ];

  return (
    <ul className="flex flex-col gap-2">
      <li className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-primary mt-1 w-5 h-5 flex items-center justify-center"
        />
        <div>
          <span className="font-medium">Available Dates:</span>
          <ul className="list-disc list-inside ml-2">
            {workshop.dates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>
      </li>

      {details.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <FontAwesomeIcon icon={item.icon} className="text-primary w-5 h-5" />
          <span>
            <span className="font-medium">{item.label}:</span> {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

interface WorkshopDetailsProps {
  workshop: Workshop;
}

export const WorkshopDetails: React.FC<WorkshopDetailsProps> = ({
  workshop,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 className="font-chillax text-lg text-primary mb-2">
        Workshop Details
      </h4>
      <WorkshopDetailsList workshop={workshop} />
    </div>

    <div>
      <h4 className="font-chillax text-lg text-primary mb-2">
        What&rsquo;s Included
      </h4>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        {workshop.includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

interface WorkshopCardProps {
  workshop: Workshop;
  isExpanded: boolean;
  onToggle: (id: number) => void;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({
  workshop,
  isExpanded,
  onToggle,
}) => (
  <div
    key={workshop.id}
    className="bg-white/10 rounded-lg overflow-hidden transition-all"
  >
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <Image
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover aspect-square md:aspect-auto"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="font-chillax text-2xl text-primary mb-2">
          {workshop.title}
        </h3>
        <p className="text-white/70 mb-4">with {workshop.chef}</p>
        <p className="mb-4">{workshop.description}</p>

        <WorkshopBasicInfo workshop={workshop} />

        <div className="flex justify-between items-center">
          <span className="text-xl font-medium">${workshop.price}</span>
          <button
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
            onClick={() => onToggle(workshop.id)}
          >
            {isExpanded ? (
              <>
                Less details <FontAwesomeIcon icon={faChevronUp} />
              </>
            ) : (
              <>
                More details <FontAwesomeIcon icon={faChevronDown} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>

    {isExpanded && (
      <div className="p-6 border-t border-white/10">
        <WorkshopDetails workshop={workshop} />

        <div className="flex justify-center mt-6">
          <button className="bg-primary text-black py-2 px-6 rounded-lg font-medium hover:bg-primary/80 transition-colors">
            Book This Workshop
          </button>
        </div>
      </div>
    )}
  </div>
);

interface WorkshopListProps {
  workshops: Workshop[];
  expandedWorkshop: number | null;
  toggleWorkshopDetails: (id: number) => void;
}

export const WorkshopList: React.FC<WorkshopListProps> = ({
  workshops,
  expandedWorkshop,
  toggleWorkshopDetails,
}) => (
  <div className="flex flex-col gap-8">
    {workshops.map((workshop) => (
      <WorkshopCard
        key={workshop.id}
        workshop={workshop}
        isExpanded={expandedWorkshop === workshop.id}
        onToggle={toggleWorkshopDetails}
      />
    ))}
  </div>
);
