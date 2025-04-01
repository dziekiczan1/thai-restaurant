"use client";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  className = "",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:chantra@gmail.com";
  };

  return (
    <div
      className={`border-2 border-primary rounded-lg p-8 text-center ${className}`}
    >
      <h4 className="text-5xl font-bitter text-primary mb-4">{title}</h4>
      <p className="mb-6 text-lg">{description}</p>
      <button
        onClick={handleClick}
        className="bg-primary text-black py-3 px-8 rounded-lg text-lg font-medium hover:bg-primary/80 transition-colors cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
};
