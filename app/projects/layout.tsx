import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Frank ISHIMWE",
  description: "Case studies of AI systems, web platforms, and data-driven solutions built by Frank ISHIMWE.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
