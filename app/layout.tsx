import "@/app/ui/global.css";
import { ApolloWrapper } from "@/app/ApolloWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | ReelStream",
    default: "ReelStream",
  },
  description:
    "The official ReelStream built for easy movie rental management.",
  metadataBase: new URL("https://reelstream.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
