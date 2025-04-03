interface SectionInfoProps {
  subtitle: string;
  title: string;
  description: string;
  isHomepage?: boolean;
}

export const SectionInfo = ({
  subtitle,
  title,
  description,
  isHomepage,
}: SectionInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full flex-1 relative">
      <p className="font-bitter text-primary text-4xl lg:text-7xl">
        {subtitle}
      </p>
      <h2 className="font-chillax text-white text-4xl lg:text-9xl font-medium tracking-wide">
        {title}
      </h2>
      <p
        className={`font-chillax text-center text-white text-lg lg:text-2xl/10 font-light mt-8 max-w-xl ${isHomepage ? "block" : "hidden"} lg:block`}
      >
        {description}
      </p>
    </div>
  );
};
