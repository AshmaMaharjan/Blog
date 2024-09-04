import React from 'react';

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4 text-left"> {/* Left-aligning the content (default) */}
        <h2 className="text-2xl text-blue-900 font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-blue-500 hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;
