import React from "react";
import TopBanner from "../components/TopBanner";
import Status from "../components/Status";
import Campaign from "./Campaign";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const notify = () => toast("Wow so easy !");

  const campaignData = useLoaderData();
  // console.log(campaignData);
  return (
    <div>
      {/* top banner */}
      <div className="min-h-[282px]">
        <TopBanner></TopBanner>
        <Status></Status>
      </div>
      {/* heading */}
      {/* campaign */}
      <div className="mt-10 py-10">
        <Campaign campaignData={campaignData}></Campaign>
      </div>
    </div>
  );
};

export default Home;
