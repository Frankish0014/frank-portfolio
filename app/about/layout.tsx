import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Frank ISHIMWE",
  description: "Learn about Frank ISHIMWE's journey, education, values, and work philosophy.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
