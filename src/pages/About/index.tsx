import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MainBoard from '@/common/main';
import About from '@/common/about';
import { aboutArr } from "@/constant";



export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='Daniel Olagunju' />
      <MainBoard >
      <div className="mt-10 md:mt-0 w-full md:w-[70%] md:h-[80vh] flex flex-col justify-center">
        <About 
          arrText={aboutArr}
        />
      </div>
      </MainBoard>
    </Layout>
  );
}