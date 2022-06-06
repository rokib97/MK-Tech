import React from "react";
import CountUp from "react-countup";
import { FaDesktop, FaUserCheck, FaUsers } from "react-icons/fa";
const Summary = () => {
  return (
    <div className="mt-16 lg:px-20">
      <h2 className="text-4xl font-bold text-secondary text-center">
        We Beleive in Numbers
      </h2>
      <p className="mb-16 text-center mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam
        repellat alias distinctio voluptate aperiam!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div className="card-body items-center text-center">
            <FaUsers size={50} color="blue" />
            <span className="text-3xl font-bold">
              <CountUp delay={3} start={0} end={273} />+
            </span>
            <p className="">Satisfied Customers</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-2xl">
          <div className="card-body items-center text-center">
            <FaUserCheck size={50} color="red" />
            <span className="text-3xl font-bold">
              <CountUp delay={3} start={0} end={400} />+
            </span>
            <p className="">Successfull Projects</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-2xl">
          <div className="card-body items-center text-center">
            <FaDesktop size={50} color="violet" />
            <span className="text-3xl  font-bold">
              <CountUp delay={3} start={0} end={13} />+
            </span>
            <p>Years of experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
