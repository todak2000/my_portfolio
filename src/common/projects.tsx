
import Layout from '@/components/layout/Layout';
import React from 'react';
import type { NextPageWithLayout } from "../pages/_app";
import WasteCoin from '../../public/svg/wastecoin.svg';
import Quidroo from '../../public/svg/Quidroo.svg';
import Cowry from '../../public/svg/cowry.svg';
import Analytics from '../../public/svg/analytics.svg';
import Image from 'next/image'
import { myLoader } from './blog';

export const handleNewURL = (url:string)=>{
    window.open(url, '_blank')
}

type projectObj = {
    id: number;
    title: string;
    img: string;
    writeup: string;
    hashtags: string[];
    link: string;
}
type ProjectsProps = {
    arrProject?: projectObj[] | any;
}
const Projects: NextPageWithLayout<ProjectsProps> =({arrProject})=>{

    
    return (
        arrProject?.map((item:any)=>{
            return (
                
            <div key={item.id} className="bg-[#f1f1f1] rounded-lg h-[300px] md:w-[100%] w-full cursor-pointer" onClick={()=>{handleNewURL(item.link)}}>
                {/* <img src={item?.img} alt="project_img" className='h-1/2 w-[100%] rounded-lg' /> */}
                {/* <HOC className="h-1/2 w-[100%] mt-[-0.4rem]"/> */}
                <Image
                    src={item?.img || myLoader()}
                    alt="Picture of the author"
                    className='h-1/2 w-[100%]'
                    width={350}
                    height={150}
                />
                {/* {item.title === 'Quidroo' && <Quidroo className="h-1/2 w-[100%]"/>}
                {item.title === 'WasteCoin' && <WasteCoin className="h-1/2 w-[100%]"/>}
                {item.title === 'Cowry Protocol' && <Cowry className="h-1/2 w-[100%]"/>}
                {item.title === 'React-user-analytics' && <Analytics className="h-1/2 w-[100%]"/>} */}
                {/* <div className="h-1/2 w-[100%] bg-red-400 rounded-lg border-b-[80px]"></div> */}
                <div className='p-2 relative h-1/2'>
                    <p className='text-sm font-bold'>{item?.title}</p>
                    <p className='text-[0.7rem] leading-3 text-[#818181]'>{item?.writeup}</p>
                    <div className="flex flex-row justify-between items-center absolute bottom-4">
                    {item?.hashtags?.map((hash:string)=>{
                        return <span className="bg-[#283C63] mr-2 rounded-full px-2 py-1 text-white text-xs">{hash}</span>
                    })}
                    </div>
                </div>
            </div>
            )
        })
    )
};

Projects.getLayout = (page)=><Layout>{page}</Layout>;

export default Projects;