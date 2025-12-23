import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Frank ISHIMWE",
  description: "Download or view Frank ISHIMWE's resume.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
