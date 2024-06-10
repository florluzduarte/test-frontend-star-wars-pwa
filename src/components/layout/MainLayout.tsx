import { Navbar, Footer } from "../";

interface MainLayoutProps {
  children: JSX.Element[];
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}