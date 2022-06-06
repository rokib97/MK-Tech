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
      <div className="px-12 mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="avatar">
            <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1237/1237445.png?w=740&t=st=1654475783~exp=1654476383~hmac=659f92181a808a5fb92aa126076ea1a82b873bfc28fa987b7a88d8e9560155a0"
                alt=""
              />
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/1237/1237449.png?w=740&t=st=1654475788~exp=1654476388~hmac=8542de2a4ec8bcf3a3a78c6f6172222cf5659e20f8148464b46993e124a72d40"
                alt=""
              />
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/1238/1238608.png?w=740&t=st=1654475798~exp=1654476398~hmac=227fd9a72849ac387644c751775dcb3e146ac563c0c9f5a422ed16bdb8f4532f"
                alt=""
              />
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
