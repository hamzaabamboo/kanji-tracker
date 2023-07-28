import { Layout } from "@/components/Layout";
import { Settings } from "@/components/Settings";
import { Navigation } from "@/components/common/Navigation";
import { HomeIntro } from "@/components/home/HomeIntro";
import { KnownKanjiProvider } from "@/context/KnownKanjiContext";

export default async function Joyo() {
  return (
    <Layout>
      <HomeIntro />
      <Navigation />
      {/* <SearchBar data={data}/> */}
      <KnownKanjiProvider>
        <Settings/>
      </KnownKanjiProvider>
    </Layout>
  )
}
