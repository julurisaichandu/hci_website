"use client";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const mediaItems = [
    // {
    //   type: "video",
    //   src: "https://example.com/videos/example_1.mp4",
    //   description: "Set an event titled 'Poster presentation' at 6pm today (GMT+06).",
    // },
    {
      type: "image",
      src: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
      description: "First image description.",
    },
    // {
    //   type: "video",
    //   src: "https://example.com/videos/example_2.mp4",
    //   description:
    //     "Search flight from Pittsburgh to New York on January. Return the names where the price is less than $100.",
    // },
    {
      type: "image",
      src: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
      description: "Second image description.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-6">Media Carousel</h2>

        {/* Media Display */}
        <div className="relative">
          {mediaItems[currentIndex].type === "video" ? (
            <video
              controls
              muted
              loop
              className="w-full h-auto rounded-lg"
              poster="" // Optional poster image for videos
            >
              <source src={mediaItems[currentIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={mediaItems[currentIndex].src}
              alt={mediaItems[currentIndex].description}
              width={800}
              height={450}
              className="rounded-lg mx-auto"
            />
          )}

          {/* Description */}
          <p className="mt-4 text-sm">{mediaItems[currentIndex].description}</p>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#8249; {/* Left Arrow */}
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#8250; {/* Right Arrow */}
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
