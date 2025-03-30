import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faUtensils,
  faWineGlass,
  faClock,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface FeatureItemProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 mb-2 text-primary">
        <FontAwesomeIcon icon={icon} size="lg" />
        <h3 className="text-2xl font-chillax">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export const FeatureGrid: React.FC = () => {
  const features: FeatureItemProps[] = [
    {
      icon: faLeaf,
      title: "Our Philosophy",
      description:
        "We believe in sustainable dining that respects both our environment and your palate. Every dish tells a story of thoughtful sourcing and passionate craftsmanship.",
    },
    {
      icon: faUtensils,
      title: "The Kitchen",
      description:
        "Led by Chef Maria Rodriguez, our kitchen team blends classical techniques with bold innovation. Each dish is prepared with meticulous attention to detail.",
    },
    {
      icon: faWineGlass,
      title: "Our Selection",
      description:
        "Our sommelier has curated an exceptional wine list featuring boutique producers and classic regions, perfectly complementing our menu offerings.",
    },
    {
      icon: faClock,
      title: "Hours & Location",
      description:
        "Open Tuesday-Sunday from 5pm to 10pm. Located in the heart of downtown at 123 Culinary Avenue. Reservations recommended.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};
