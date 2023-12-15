import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[91vh] w-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}
