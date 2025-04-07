import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <h2 className="font-chillax text-lg text-primary mb-6">{title}</h2>
      {children}
    </>
  );
};
