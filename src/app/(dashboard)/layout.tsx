import "@/styles/global.scss";

import { FC } from "react";
import GlassPane from "@/components/GlassPane";
import { Inter } from "@next/font/google";
// import Sidebar from "@/components/Sidebar";
import clsx from "clsx";

interface Props {
  children: any;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const DashboardRootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.variable, "dark")}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          {/* <Sidebar /> */}
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
