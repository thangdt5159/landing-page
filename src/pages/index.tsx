import CoverFlowCarousel from "../components/carousel/CoverFlowCarousel";
import FeatureCollections from "../components/collections/FeatureCollections";
import Hero from "../components/hero/Hero";
import Meta from "../components/Meta";
import Partners from "../components/partners/Partners";
import Team from "../components/team/Team";

export default function Home() {
  return (
    <main>
      <Meta title="Home || Xhibiter | NFT Marketplace Next.js Template" />
      <Hero />
      <CoverFlowCarousel />
      <FeatureCollections />
      <Partners />
      <Team />
    </main>
  );
}
