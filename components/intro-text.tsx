import React from "react";

interface IntroTextProps {
  text: string;
  className?: string;
}

export const IntroText: React.FC<IntroTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className="text-center mb-12">
      <p className={`text-lg ${className}`}>{text}</p>
    </div>
  );
};
