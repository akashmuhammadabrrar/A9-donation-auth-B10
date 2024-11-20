import React from "react";
import CampaignCard from "../components/CampaignCard";

const Campaign = ({ campaignData }) => {
  return (
    <div>
      <div className="ml-8">
        <div className="w-1/5 h-2 bg-accent my-2 rounded-xl"></div>
        <h2 className="lg:text-5xl font-bold sm:text-2xl">
          Giving Help To Them Who Needs It
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          There are a lot of people in Bangladesh who are suffering in the cold
          at every winter. <br />
          They are seeking for your kind help.
        </p>
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
