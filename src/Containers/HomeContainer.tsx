import React from "react";
import HomeLeft from "../Components/HomeLeft";
import HomeRight from "../Components/HomeRight";

const HomeContainer: React.FC<any> = (props: any) => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <HomeLeft />
        <HomeRight />
      </div>
    </div>
  );
};

export default HomeContainer;
