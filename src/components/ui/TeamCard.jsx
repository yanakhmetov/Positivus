import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

import Clever from '../Clever/Clever';

const TeamCard = ({ name, position, bio,gif }) => {
  return (
    <div>
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-end">
          <div className="relative">
            <div className="absolute "></div>
            <Clever gif={gif} />
          </div>
          <div className='team-text'>
            <h2 className="font-medium text-xl">{name}</h2>
            <p className="text-base">{position}</p>
          </div>
        </div>

        {/* LinkedIn Icon */}
        <button className="rounded-full bg-black p-2">
          <FaLinkedinIn className="text-[#B9FF66]" />
        </button>
      </div>

      {/* Divider + Bio */}
      <div className="mt-4">
        <hr className="border-black my-6" />
        <p className="text-base team-text-about">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
