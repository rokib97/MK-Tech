import React from "react";

const Hero = () => {
  return (
    <div class="hero mt-16 bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-lg rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 class="text-6xl font-bold">Box Office News!</h1>
          <p class="py-6 text-3xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
