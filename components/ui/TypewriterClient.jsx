import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterClient = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'A Full Stack Developer',
          'I build scalable web apps',
          'Writing code that solves real problems'
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterClient;
