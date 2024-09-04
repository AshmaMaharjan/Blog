import React from 'react';
import BlogCard from './BlogCard';

const blogData = [
  {
    image: './images/pkr.jpeg',
    title: 'Discover the Magic of Pokhara: A Serene Escape in Nepal',
    description: 'Nestled in the heart of Nepal, Pokhara is a picturesque haven offering breathtaking natural beauty and tranquil experiences. Known for its stunning lakes, including the iconic Phewa Lake, and dramatic views of the Annapurna mountain range. Explore serene boat rides, picturesque waterfalls, and vibrant local markets. Whether you are trekking through the nearby hills or relaxing by the lakeside.',
  },
  {
    image: '/images/chitwan.jpeg',
    title: 'Experience the Wild Beauty of Chitwan: Nepal’s Premier Wildlife Destination',
    description: 'Chitwan, a gateway to Nepal’s rich biodiversity, offers an unforgettable adventure into the wild. Home to Chitwan National Park, this region is renowned for its lush jungles, diverse wildlife, and the chance to spot endangered species like the one-horned rhinoceros and Bengal tigers.',
  },
  {
    image: '/images/mustang.jpeg',
    title: 'Journey to Mustang: Nepal’s Hidden Himalayan Kingdom',
    description: 'Mustang, often referred to as the "Last Forbidden Kingdom," is a remote and mystical region in Nepal, offering travelers a glimpse into a world where ancient Tibetan culture thrives amidst breathtaking landscapes. Mustang is a land of rugged beauty, with its dramatic red cliffs, windswept deserts, and sacred monasteries. Trek through the region’s stunning valley and explore the medieval town of Lo Manthang.   . ',
  },
  {
    image: '/images/kulekhani.jpeg',
    title: 'Escape to Kulekhani: Nepal’s Hidden Lakeside Retreat',
    description: 'Kulekhani, a serene and lesser-known gem in Nepal, offers a tranquil escape into nature’s embrace. Located just a few hours from Kathmandu, this peaceful destination is centered around the beautiful Indra Sarobar Lake, formed by the Kulekhani Dam. Ideal for a weekend getaway, Kulekhani invites visitors to enjoy activities like boating, fishing, and hiking amidst lush hills and calm waters. ',
  },
  {
    image: '/images/chandragiri.jpeg',
    title: 'Discover Chandragiri Hills: Panoramic Views and Historical Significance',
    description: 'Chandragiri Hills, located on the outskirts of Kathmandu, offers a perfect blend of breathtaking vistas and rich history. A quick cable car ride to the top brings you to this serene hill station, where you can enjoy panoramic views of the majestic Himalayan range and the sprawling Kathmandu Valley below. Explore the Bhaleshwor Mahadev Temple, steeped in legend, and take leisurely walks through the lush greenery.',
  },
  {
    image: '/images/rara.jpeg',
    title: 'Explore Rara Lake: Nepal’s Pristine Mountain Gem',
    description: 'Rara Lake, the largest lake in Nepal, is a hidden treasure nestled in the remote reaches of the Himalayas. Surrounded by lush forests and snow-capped peaks, this tranquil body of water offers a breathtakingly beautiful and serene escape. Known for its crystal-clear waters that mirror the sky and surrounding mountains, Rara Lake is a paradise for nature lovers and adventurers alike. ',
  },
  
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default BlogList;
