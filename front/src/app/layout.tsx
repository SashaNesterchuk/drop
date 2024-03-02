import Sidebar from "@/components/menu/Sidebar";
import "../styles/index.scss";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import NavMenu from "@/components/menu/NavMenu";
import { DM_Sans } from "next/font/google";
import { Providers } from "@/store/providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const theme = {
  // Define your theme variables here
};
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <Box className="layout-wrapper">
            <div>
              <Sidebar />
            </div>
            <main className="layout-page-wrapper">
              <NavMenu />
              <div className="layout-page-container">{children}</div>
            </main>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
