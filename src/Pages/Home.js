import React, { useContext, useEffect } from "react";

import Headphone from "../Components/headphone";

import HeadphonesContext from "../Context/headphones/headphonesContext";

const Home = () => {
  const hpContext = useContext(HeadphonesContext);

  const { headphones, getHeadphones } = hpContext;

  const list = headphones.map((hp, index) => (
    <Headphone key={index} index={index} headphone={hp} />
  ));

  useEffect(() => {
    getHeadphones();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(headphones);
  }, [headphones]);

  return (
    <section className="flex flex-row flex-wrap items-center justify-center w-90p mx-auto max-w-screen-lg">
      {list}
    </section>
  );
};

export default Home;
