interface PageTitleProps {
  text: string;
  className?: string;
  centered?: boolean;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  text,
  className = "",
  centered = true,
}) => {
  return (
    <h2
      className={`font-bitter text-5xl md:text-6xl text-primary ${centered ? "text-center" : ""} mb-12 ${className}`}
    >
      {text}
    </h2>
  );
};

export const SectionTitle: React.FC<PageTitleProps> = ({
  text,
  className = "",
  centered = false,
}) => {
  return (
    <h3
      className={`font-bitter text-4xl md:text-5xl text-primary ${centered ? "text-center" : ""} mb-6 pl-6 ${className}`}
    >
      {text}
    </h3>
  );
};
