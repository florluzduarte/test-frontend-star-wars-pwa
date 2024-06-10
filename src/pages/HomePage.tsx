import { MainLayout, Search } from "../components";
import { Divider } from "../components/ui/divider/Divider";

export const HomePage = () => {
  return (
    <MainLayout>
      <>
        <Search />
        <Divider />
      </>
    </MainLayout>
  )
};