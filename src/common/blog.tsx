
import Layout from '@/components/layout/Layout';
import React from 'react';
import type { NextPageWithLayout } from "../pages/_app";
import HOC from '../../public/svg/hoc.png'
import { handleNewURL } from './projects';
import Image from 'next/image'

export const myLoader = () => {
    return `https://picsum.photos/200`
  }

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
                
            <div key={item.id} className=" bg-gray-300 mb-4 md:mt-0 rounded-lg h-[300px] md:w-[100%] w-full cursor-pointer" onClick={()=>{handleNewURL(item.link)}}>
                <Image
                    src={item?.img || myLoader()}
                    alt="Picture of the author"
                    className='h-1/2 w-[100%]'
                    width={350}
                    height={120}
                />
                <div className='p-2 relative h-1/2'>
                    <p className='text-sm font-bold'>{item?.title}</p>
                    <p className='text-[0.7rem] leading-3 text-[#818181]'>{item?.writeup}</p>
                    <div className="grid grid-cols-3 gap-2 absolute bottom-4">
                    {item?.hashtags?.map((hash:string)=>{
                        return <span key={hash} className="bg-[#283C63] text-center rounded-full px-2 py-1 text-white text-xs">{hash}</span>
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