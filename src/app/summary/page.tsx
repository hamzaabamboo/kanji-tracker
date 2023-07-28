import { Layout } from "@/components/Layout";
import { Summary } from "@/components/Summary";
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
        <Summary/>
      </KnownKanjiProvider>
    </Layout>
  )
}
