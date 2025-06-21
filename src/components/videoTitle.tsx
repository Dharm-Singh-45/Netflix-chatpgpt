import React from 'react';
import { FaInfoCircle, FaPlay } from 'react-icons/fa';

const VideoTitle = ({ title, overview }: { title: string; overview: string }) => {
  return (
    <div className="pt-[20%] px-8 w-screen aspect-video absolute text-white bg-gradient-to-t from-black">
      <h1 className="text-4xl font-bold opacity-50">{title}</h1>
      <p className="text-sm text-gray-500 py-6 w-1/4">{overview}</p>
      <div className="flex gap-5">
        <button className="bg-gray-200 text-black p-1 px-4 text-xl rounded-lg flex items-center gap-2 hover:bg-opacity-60 transition-all duration-300">
          <span>
            <FaPlay />
          </span>
          <span>Play</span>
        </button>
        <button className="bg-gray-500 text-white p-1 px-4 text-xl rounded-lg flex items-center gap-2 hover:bg-opacity-60 transition-all duration-300">
          <span>
            <FaInfoCircle />
          </span>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
