import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import MainBoard from "@/common/main";
import About from "@/common/about";
import { aboutArr } from "@/constant";

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle="Daniel Olagunju" />
      <MainBoard>
        <div className="mt-10 flex w-full flex-col justify-center md:mt-0 md:h-[80vh] md:w-[70%]">
          <About arrText={aboutArr} />
        </div>
      </MainBoard>
    </Layout>
  );
}
