import Footer from "./components/Footer";
import Header from "./components/Header";
import { PlanContextProvider } from "./planContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PlanContextProvider>
        <Header />
        <main className="min-h-[91vh] w-screen bg-white">{children}</main>
        <Footer />
      </PlanContextProvider>
    </>
  );
}
