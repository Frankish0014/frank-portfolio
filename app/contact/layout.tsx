import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Frank ISHIMWE",
  description: "Get in touch with Frank ISHIMWE. Open to internships, collaborations, and impact-driven opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
