import React from "react";

const CampaignCard = ({ campaign }) => {
  const { title, image, description, division } = campaign;
  return (
    <div className="card card-compact bg-base-100 w-72 container mx-auto shadow-xl  ">
      <figure>
        <img src={image} alt={campaign.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="">
          Division: <span className="font-bold">{division}</span>
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-accent text-slate-50 font-bold">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
