import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="h-full w-full bg-blue-500">{children}</main>
    </>
  );
}
