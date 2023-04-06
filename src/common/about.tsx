import Layout from "@/components/layout/Layout";
import React from "react";
import type { NextPageWithLayout } from "../pages/_app";

type textObj = {
  id: number;
  text: string;
};
type AboutProps = {
  arrText?: textObj[] | any;
};
const About: NextPageWithLayout<AboutProps> = ({ arrText }) => {
  return arrText?.map((item: any) => {
    return (
      <p
        key={item?.id}
        className="mb-6 text-xs font-thin text-white md:text-lg"
      >
        {item?.text}
      </p>
    );
  });
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
