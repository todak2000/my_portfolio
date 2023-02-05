
import Layout from '@/components/layout/Layout';
import React from 'react';
import type { NextPageWithLayout } from "../pages/_app";
import HOC from '../../public/svg/hoc.svg'
import { handleNewURL } from './projects';

type blogObj = {
    id: number;
    title: string;
    img: string;
    writeup: string;
    hashtags: string[];
    link: string;
}
type BlogsProps = {
    arrBlog?: blogObj[] | any;
}
const Blog: NextPageWithLayout<BlogsProps> =({arrBlog})=>{

    
    return (
        arrBlog?.map((item:any)=>{
         
            return (
                
            <div key={item.id} className="px-2 pb-2  bg-gray-300 mb-4 md:mt-0 rounded-lg h-[300px] md:w-[100%] w-full cursor-pointer" onClick={()=>{handleNewURL(item.link)}}>
                {/* <img src={item?.img} alt="project_img" className='h-1/2 w-[100%] rounded-lg' /> */}
                <HOC className="h-1/2 w-[100%] md:mt-[-1rem]"/>
                <div className='relative h-1/2'>
                    <p className='text-sm font-bold'>{item?.title}</p>
                    <p className='text-[0.7rem] leading-3 text-[#818181]'>{item?.writeup}</p>
                    <div className="grid grid-cols-3 gap-2 absolute bottom-4">
                    {item?.hashtags?.map((hash:string)=>{
                        return <span className="bg-[#283C63] text-center rounded-full px-2 py-1 text-white text-xs">{hash}</span>
                    })}
                    </div>
                </div>
            </div>
            )
        })
    )
};

Blog.getLayout = (page)=><Layout>{page}</Layout>;

export default Blog;