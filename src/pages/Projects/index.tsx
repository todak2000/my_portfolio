
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MainBoard from '@/common/main';
import Projects from '@/common/projects';
import { projectArr } from "@/constant";



export default function ProjectPage() {
  return (
    <Layout>
      <Seo templateTitle='Daniel Olagunju' />
      <MainBoard >
      <div className='grid grid-rows-1 gap-3 md:grid-cols-4 mt-20 mx-[auto]'>
      <Projects
          arrProject={projectArr}
        />
      </div>
      
      </MainBoard>
    </Layout>
  );
}