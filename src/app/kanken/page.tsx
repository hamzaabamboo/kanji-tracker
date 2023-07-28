import { Layout } from "@/components/Layout";
import { Navigation } from "@/components/common/Navigation";
import { HomeIntro } from "@/components/home/HomeIntro";
import { KanjiGroupsViewer } from "@/components/home/KanjiGroupsViewer";
import { KnownKanjiProvider } from "@/context/KnownKanjiContext";
import { KANKEN_GROUPS } from "@/data/joyo";


export default async function Joyo() {
  return (
    <Layout>
      <HomeIntro />
      <Navigation />
      {/* <SearchBar data={data}/> */}
      <KnownKanjiProvider>
        <KanjiGroupsViewer groups={KANKEN_GROUPS}/>
      </KnownKanjiProvider>
    </Layout>
  )
}
