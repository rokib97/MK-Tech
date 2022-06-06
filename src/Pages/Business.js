import React from "react";
import business from "../images/business.png";
const Business = () => {
  return (
    <div class="hero mt-16 bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <img src={business} class="max-w-lg rounded-lg" alt="" />
        <div className="ml-24">
          <h1 class="text-5xl font-bold text-secondary">
            How we help you grow your startup or business
          </h1>
          <p class="py-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque
            dolorum, omnis consequuntur nihil deserunt. Est dolorem debitis
            beatae autem doloribus exercitationem quisquam numquam vitae.
          </p>
          <button class="btn btn-primary text-base-100 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Business;
