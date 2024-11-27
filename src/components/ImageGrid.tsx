import React from 'react';
import { ImageData } from '../types';

interface ImageGridProps {
  images: ImageData[];
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image.src}
            alt={image.alt || 'Extracted image'}
            className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            loading="lazy"
          />
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-white text-sm px-3 py-1 bg-black bg-opacity-75 rounded">
              View Original
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}