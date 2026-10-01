import React, { Suspense } from "react";

import { Language, GetInTouch, Footer } from "../Links/Links";
const About = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Suspense fallback={<div>Loading</div>}>
          <Language />
          <GetInTouch />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default About;
