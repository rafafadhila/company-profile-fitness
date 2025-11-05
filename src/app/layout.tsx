import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Future Fitness | Gym & Personal Training for a Stronger You",
  description:
    "Future Fitness is your ultimate destination for strength, cardio, and personal training. Join our modern gym, achieve your fitness goals, and transform your lifestyle today.",
  keywords: [
    "Future Fitness",
    "gym near me",
    "personal training",
    "fitness center",
    "workout classes",
    "strength training",
    "cardio workout",
    "weight loss program",
    "healthy lifestyle",
  ],
  openGraph: {
    title: "Future Fitness | Transform Your Body and Mind",
    description:
      "Discover Future Fitness — a modern gym offering strength training, cardio, and personal coaching. Start your journey to a fitter, healthier you today!",
    // url: "https://yourwebsite.com",
    siteName: "Future Fitness",
    images: [
      {
        url: "/images/fitness-logo3.png",
        width: 1200,
        height: 630,
        alt: "Future Fitness Gym Facility",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Fitness | Gym & Personal Training",
    description:
      "Train smarter with Future Fitness — the best place to build strength, burn fat, and improve your health.",
    // images: ["https://yourwebsite.com/images/fitness-banner.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <Navbar></Navbar>
          <ToastContainer></ToastContainer>
          {children}
          <Footer></Footer>
        </AuthProvider>

      </body>
    </html>
  );
}
