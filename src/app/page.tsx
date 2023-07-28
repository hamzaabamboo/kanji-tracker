import { Layout } from "@/components/Layout";
import { Navigation } from "@/components/common/Navigation";
import { HomeIntro } from "@/components/home/HomeIntro";
import { KanjiGroupsViewer } from "@/components/home/KanjiGroupsViewer";
import { KnownKanjiProvider } from "@/context/KnownKanjiContext";
import { ALL_JOYO } from "@/data/joyo";

export default async function Home() {

  return (
    <Layout>
      <HomeIntro />
      <Navigation />
      {/* <SearchBar data={data}/> */}
      <KnownKanjiProvider>
        <KanjiGroupsViewer groups={[{ title: "常用漢字", kanjis: ALL_JOYO.split("")}]}/>
      </KnownKanjiProvider>
    </Layout>
  )
}
