interface SectionInfoProps {
  subtitle: string;
  title: string;
  description: string;
}

export const SectionInfo = ({
  subtitle,
  title,
  description,
}: SectionInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full flex-1 relative">
      <p className="font-bitter text-primary text-7xl">{subtitle}</p>
      <h2 className="font-chillax text-white text-9xl font-medium tracking-wide">
        {title}
      </h2>
      <p className="font-chillax text-center text-white text-2xl/10 font-light mt-8 max-w-xl">
        {description}
      </p>
    </div>
  );
};
