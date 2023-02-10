import Layout from '@/components/layout/Layout';
import React from 'react';
import UnderlineLink from '@/components/links/UnderlineLink';
import type { NextPageWithLayout } from "../pages/_app";
import NavBar from './navbar';
import UnstyledLink from '@/components/links/UnstyledLink';

type MainBoardProps = {
    children?: any;
}
const MainBoard: NextPageWithLayout<MainBoardProps> =({children})=>{
    return (
        <main className="bg">
            <NavBar />
            {children}
        <footer className='fixed hidden md:block bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://github.com/todak2000'>
            Daniel Olagunju
            </UnderlineLink>
            <UnstyledLink href='/Analytics' className="ml-10">Analtyics</UnstyledLink>
        </footer>
      </main>
    )
};

MainBoard.getLayout = (page)=><Layout>{page}</Layout>;

export default MainBoard