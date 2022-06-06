import React from "react";

const Services = () => {
  return (
    <div className="mt-20 px-12">
      <h2 className="text-4xl font-bold text-secondary text-center">
        Get The Best Results With Our Marketing Agency
      </h2>
      <p className="text-xl text-center mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        accusamus eius praesentium obcaecati odio iste!
      </p>
      <div className="px-12 mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="avatar">
            <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Organic Search (SEO)</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              est neque quasi consequuntur. Accusantium sed nesciunt tempora
              adipisci dolores placeat.
            </p>
            <button class="btn btn-primary text-base-100 font-bold">
              Book Now
            </button>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="avatar">
            <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Custom Software Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              est neque quasi consequuntur. Accusantium sed nesciunt tempora
              adipisci dolores placeat.
            </p>
            <button class="btn btn-primary text-base-100 font-bold">
              Book Now
            </button>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="avatar">
            <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Amazon SEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              est neque quasi consequuntur. Accusantium sed nesciunt tempora
              adipisci dolores placeat.
            </p>
            <button class="btn btn-primary text-base-100 font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
