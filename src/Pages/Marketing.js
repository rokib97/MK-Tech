import React from "react";
import marketing from "../images/marketing.png";
const Marketing = () => {
  return (
    <div class="hero mt-16 bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={marketing} class="max-w-lg rounded-lg" alt="" />
        <div>
          <h1 class="text-5xl font-bold text-secondary">
            Marketing Strategies And Advertising
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

export default Marketing;
