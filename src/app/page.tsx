import { Layout } from "@/components/Layout";
import { Navigation } from "@/components/common/Navigation";
import { HomeIntro } from "@/components/home/HomeIntro";
import { KanjiViewer } from "@/components/home/KanjiViewer";
import { KnownKanjiProvider } from "@/context/KnownKanjiContext";
import { ALL_JOYO } from "@/data/joyo";

export default async function Home() {

  return (
    <Layout>
      <HomeIntro />
      <Navigation />
      {/* <SearchBar data={data}/> */}
      <KnownKanjiProvider>
        <KanjiViewer data={ALL_JOYO.split("")}/>
      </KnownKanjiProvider>
    </Layout>
  )
}
