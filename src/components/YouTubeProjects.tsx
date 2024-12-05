import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
}

export function YouTubeProjects() {
  const [videos, setVideos] = useState<Video[]>([]);
  const channelId = 'UCNuIiD1KzLt6wHsJkAlDrcg';

  useEffect(() => {
    // In a real application, you would fetch this data from the YouTube API
    // For demo purposes, we'll use hardcoded data of the most viewed videos
    const demoVideos = [
      {
        id: 'VIDEO_ID_1',
        title: 'Diseño UX/UI - Portfolio 2023',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format',
        views: 15000
      },
      {
        id: 'VIDEO_ID_2',
        title: 'Motion Graphics Showreel',
        thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format',
        views: 12000
      },
      {
        id: 'VIDEO_ID_3',
        title: 'Design Process Walkthrough',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format',
        views: 10000
      }
    ];
    setVideos(demoVideos);
  }, []);

  return (
    <section className="py-32 px-8" id="youtube-projects">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium mb-4">YOUTUBE CONTENT</span>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Videos</h2>
          <p className="text-gray-400 max-w-2xl">
            Explore my most popular video content showcasing design processes, tutorials, and creative insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Play className="text-white w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {video.views.toLocaleString()} views
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors"
          >
            View Full Channel
            <Play size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}