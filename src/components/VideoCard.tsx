import React from 'react';
import { MoreVertical } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, title, channel, views, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-video rounded-xl overflow-hidden group">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          12:42
        </div>
      </div>
      <div className="flex mt-3 space-x-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
          <div className="text-sm text-gray-600 mt-1">
            <p>{channel}</p>
            <p>{views} • {timestamp}</p>
          </div>
        </div>
        <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;