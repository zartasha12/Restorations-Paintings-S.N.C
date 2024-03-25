import React from "react";

const Bussines = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse ">
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          //src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className="flex-1 flex justify-center items-start flex-col  ml-16 px-6">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            //src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            //src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Bussines;
