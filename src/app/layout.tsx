import { Open_Sans } from "next/font/google";
import "./styles.scss";

export const metadata = {
  title: "Reyes",
  description:
    "Personal digital-space of Jorge Reyes, a knowledge driven Software Engineer at OneSeven.",
};

const Open_SansFont = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Open_SansFont.className}>
      <body>
        <div id="main-container">{children}</div>
      </body>
    </html>
  );
}
