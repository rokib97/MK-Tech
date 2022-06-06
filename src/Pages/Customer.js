import React from "react";
import customer from "../images/cutomer.png";
const Customer = () => {
  return (
    <div class="hero mt-16 bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <img src={customer} alt="" />
        <div className="ml-24">
          <h1 class="text-5xl font-bold text-secondary">
            We Bring You New Customer
          </h1>
          <p class="py-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque
            dolorum, omnis consequuntur nihil deserunt. Est dolorem debitis
            beatae autem doloribus exercitationem quisquam numquam vitae.
          </p>
          <button class="btn btn-primary text-base-100 font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
