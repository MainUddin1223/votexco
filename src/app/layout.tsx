import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "votexco.,",
  description: "value of time express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBg: 'white',
            hoverBg: 'rgb(229, 235, 240)',
          },
          Collapse: {
            padding: 10,
          },
          Button: {
            fontWeight: 500,
          },
          Drawer: {
            colorBgElevated: 'white',
          },
          Breadcrumb: {
            itemColor: '#327012',
            linkHoverColor: '#327012',
            fontSize: 25,
          },
        },
        token: {
          //   colorBgContainer: "#070d17",
          borderRadius: 0,
          // colorText: "rgb(224, 223, 223)",
          colorPrimary: 'rgb(0, 145, 112)',
          colorBgContainerDisabled: 'gray',
          colorBgSpotlight: 'white',
          colorTextLightSolid: 'black',
        },
      }}
    >
       <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
    </ConfigProvider>
  </StyledComponentsRegistry>
   
  );
}
