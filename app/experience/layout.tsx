import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Frank ISHIMWE",
  description: "Education, certifications, and practical experience of Frank ISHIMWE.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
