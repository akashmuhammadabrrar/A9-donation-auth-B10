import React from "react";
import { toast, ToastContainer } from "react-toastify";

const DetailCard = ({ item }) => {
  const notify = () => {
    toast.success("donation successfully sent");
  };

  const { image, title, description } = item;
  return (
    <div className="">
      {/* details parent */}
      <div className="border-2 container mx-auto flex lg:flex-row md:flex-row my-4 flex-col justify-center items-center gap-4">
        {/* donate details div */}
        <div>
          <div className="card bg-base-100 w-96 ">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start ">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <div className="card-actions">
                <button onClick={notify} className="btn btn-accent">
                  Donate
                </button>
                <ToastContainer></ToastContainer>
              </div>
            </div>
          </div>
        </div>
        {/* donation form field */}
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <span className="label-text">Select other quantity</span>
            <input type="number" className="grow" placeholder="Quantity" />
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Select other types
            </option>
            <option>Muffler</option>
            <option>Jacket</option>
            <option>Blanket</option>
            <option>Sweater</option>
            <option>Other</option>
          </select>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Location" />
          </label>
          <textarea
            className="textarea textarea-accent"
            placeholder="Message/Optional"></textarea>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
