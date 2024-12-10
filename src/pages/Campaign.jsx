import React from "react";
import CampaignCard from "../components/CampaignCard";
import imgCamp from "../assets/Image/winter8.jpeg";
import { useLoaderData } from "react-router-dom";

const Campaign = () => {
  const campaignData = useLoaderData();
  // console.log(campaignData);

  return (
    <div>
      <div className="ml-8">
        <div className="w-1/5 h-2 bg-accent my-2 rounded-xl"></div>
        <h2 className="lg:text-5xl font-bold sm:text-2xl">
          Giving Help To Them Who Needs It
        </h2>
        {/* <p className="mt-4 text-xl text-gray-400">
          There are a lot of people in Bangladesh who are suffering in the cold
          at every winter. <br />
          They are seeking for your kind help.
        </p> */}
        {/*  */}
        {/* hero section */}
        {/* <div className="hero bg-base-200 min-h-screen mt-10">
          <div className="hero-content flex-col lg:flex-row">
            <img src={imgCamp} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Campaign For Winter Season</h1>
              <p className="py-6">
                To this campaign we took the step to donation food and cloths
                for poor people. Here we encourages other privilege people to
                help them.
              </p>
              <button className="btn btn-accent">See More</button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {campaignData?.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
