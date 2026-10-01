import React, { Suspense } from "react";
import {
  Name,
  Intro,
  Skills,
  MyWork,
  ParentWork,
  GetInTouch,
  Footer,
  ScrollMore,
} from "../Links/Links";

const Home = () => {
  return (
    <div className='container mx-auto select-none'>
      <Suspense
        fallback={
          <div>
            <h1>Loading....</h1>
          </div>
        }
      >
        <Name />
        <section className='bg-black w-full flex items-start justify-center'>
          <ScrollMore />
        </section>
        <Intro />
        <Skills />
        <MyWork />
        <ParentWork />
        <GetInTouch />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
