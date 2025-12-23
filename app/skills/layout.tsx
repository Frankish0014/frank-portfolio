import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Frank ISHIMWE",
  description: "Comprehensive overview of Frank ISHIMWE's technical skills and expertise.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
