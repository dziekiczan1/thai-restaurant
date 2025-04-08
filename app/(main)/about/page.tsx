import { CallToAction } from "@/components/cta";
import { FeatureGrid } from "@/components/feature-grid";
import { PageTitle, SectionTitle } from "@/components/page-title";
import { GalleryImage, ImageGallery } from "@/components/image-gallery";

export default function About() {
  const restaurantImages: GalleryImage[] = [
    {
      id: 1,
      src: "/main.webp",
      alt: "Our elegant dining space",
      caption: "Our elegant dining space",
    },
    {
      id: 2,
      src: "/menu.webp",
      alt: "Chef preparing signature dishes",
      caption: "Our master chef at work",
    },
    {
      id: 3,
      src: "/booking.webp",
      alt: "Private dining area",
      caption: "Private dining for special occasions",
    },
    {
      id: 4,
      src: "/spirits.webp",
      alt: "Our well-stocked bar",
      caption: "Our carefully curated selection of spirits",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12">
      <PageTitle text="Our Story" />

      <div className="rounded-lg p-8 mb-12 bg-white/10">
        <p className="mb-6 text-lg">
          Founded in 2018, our restaurant brings together culinary innovation
          and time-honored traditions. We take pride in crafting extraordinary
          dining experiences that celebrate seasonal ingredients and global
          flavors.
        </p>

        <FeatureGrid />

        <p className="text-lg">
          Whether you're joining us for an intimate dinner, celebrating a
          special occasion, or simply enjoying a casual meal with friends, we
          look forward to welcoming you and creating memorable moments together.
        </p>
      </div>

      <SectionTitle text="Gallery" />

      <ImageGallery images={restaurantImages} className="mb-12" />

      <CallToAction
        title="Join Us For Dinner"
        description="Experience our passion for exceptional cuisine and warm hospitality."
        buttonText="Make a Reservation"
      />
    </div>
  );
}
