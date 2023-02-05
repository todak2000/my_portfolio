import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MainBoard from '@/common/main';
import { writeup, firstText, name } from '@/constant';
import Home from './Home';



export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Daniel Olagunju' />
      <MainBoard >
      <div className=" w-full md:w-[70%] h-[60vh] flex flex-col justify-center">
        <Home 
          firstText={firstText}
          name={name}
          writeup={writeup}
        />
      </div>
      </MainBoard>
    </Layout>
  );
}
