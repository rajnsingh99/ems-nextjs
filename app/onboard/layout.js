import "./onboard.css";

export const metadata = {
  title: "Onboarding Portal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
