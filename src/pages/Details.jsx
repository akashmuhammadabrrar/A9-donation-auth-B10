import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailCard from "../components/DetailCard";

const Details = () => {
  const data = useLoaderData();
  const { image } = data;
  // console.log(data);
  return (
    <div>
      <h2>This is details campaign</h2>
      {data.map((item) => (
        <DetailCard key={item.id} item={item}></DetailCard>
      ))}
    </div>
  );
};

export default Details;
