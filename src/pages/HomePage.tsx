import { MainLayout } from "../components";
import PWABadge from "../components/PWABadge";

export const HomePage = () => {
  return (
    <MainLayout>
      <h1>Star Wars PWA - Home Page</h1>
      <PWABadge />
    </MainLayout>
  )
};