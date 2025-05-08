// app/blog/page.tsx

import { FiCalendar, FiClock } from "react-icons/fi";
import Image from "next/image";
import Navbar from "@components/Navbar";
import MotionWrapper from "@components/MotionWrapper";
import blogPosts from "@lib/blogs.json";
import Title from "@components/TitleWF";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-24 py-36 bg-[#fdfdfd] text-[#222]">
        {/* Blog Posts Grid */}
        <Title title="Our Blogs" underline />
        <section className="py-20">
          <div className="container mx-auto px-6">
            <MotionWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {blogPosts.map((post, index) => (
                <MotionWrapper
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <FiCalendar className="mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-5">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </MotionWrapper>
              ))}
            </MotionWrapper>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsPage;
