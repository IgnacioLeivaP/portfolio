import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

// Mock Instagram posts for the grid layout
const mockPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format',
    likes: 124,
    comments: 12
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format',
    likes: 89,
    comments: 8
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format',
    likes: 156,
    comments: 14
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1558655146-6c2e28465e51?w=800&auto=format',
    likes: 201,
    comments: 18
  }
];

export function InstagramFeed() {
  return (
    <section className="py-32 px-8" id="instagram">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium mb-4">INSTAGRAM</span>
          <h2 className="text-4xl font-bold text-white mb-4">Latest Posts</h2>
          <p className="text-gray-400 max-w-2xl">
            Follow my design journey and get inspired by my latest work and creative process.
          </p>
        </div>

        <div className="glass-effect rounded-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Instagram className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">@nispero.design</h3>
                <p className="text-sm text-gray-400">Design Portfolio</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/nispero.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors"
            >
              Follow
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockPosts.map((post) => (
              <div
                key={post.id}
                className="group relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={post.imageUrl}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                      </svg>
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/nispero.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors"
            >
              View All Posts
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}