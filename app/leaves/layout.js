import "./leaves.css";

export const metadata = {
  title: "Employee Leaves",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
