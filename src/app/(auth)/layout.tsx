import "@/styles/global.scss";

import { FC } from "react";
import GlassPane from "@/components/GlassPane";
import { Inter } from "@next/font/google";

interface Props {
  children: any;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const AuthRootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body
        className="h-screen w-screen rainbow-mesh p-6"
        suppressHydrationWarning={true}
      >
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default AuthRootLayout;
