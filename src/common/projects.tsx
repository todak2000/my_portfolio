import Layout from "@/components/layout/Layout";
import React from "react";
import type { NextPageWithLayout } from "../pages/_app";
import WasteCoin from "../../public/svg/wastecoin.svg";
import Quidroo from "../../public/svg/Quidroo.svg";
import Cowry from "../../public/svg/cowry.svg";
import Analytics from "../../public/svg/analytics.svg";
import Image from "next/image";
import { myLoader } from "./blog";

export const handleNewURL = (url: string) => {
  window.open(url, "_blank");
};

type projectObj = {
  id: number;
  title: string;
  img: string;
  writeup: string;
  hashtags: string[];
  link: string;
};
type ProjectsProps = {
  arrProject?: projectObj[] | any;
};
const Projects: NextPageWithLayout<ProjectsProps> = ({ arrProject }) => {
  return arrProject?.map((item: any) => {
    return (
      <div
        key={item.id}
        className="h-[300px] w-full cursor-pointer rounded-lg bg-[#f1f1f1] md:w-[100%]"
        onClick={() => {
          handleNewURL(item.link);
        }}
      >
        <Image
          src={item?.img || myLoader()}
          alt="Picture of the author"
          className="h-1/2 w-[100%]"
          width={350}
          height={150}
        />

        <div className="relative h-1/2 p-2">
          <p className="text-sm font-bold">{item?.title}</p>
          <p className="text-[0.7rem] leading-3 text-[#818181]">
            {item?.writeup}
          </p>
          <div className="absolute bottom-4 flex flex-row items-center justify-between">
            {item?.hashtags?.map((hash: string) => {
              return (
                <span
                  key={hash}
                  className="mr-2 rounded-full bg-[#283C63] px-2 py-1 text-xs text-white"
                >
                  {hash}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
};

Projects.getLayout = (page) => <Layout>{page}</Layout>;

export default Projects;
