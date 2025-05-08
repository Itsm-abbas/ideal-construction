import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import blogsData from "@lib/blogs.json";
import MotionWrapper from "@components/MotionWrapper";
import Navbar from "@components/Navbar";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogsData.find((blog) => blog.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Navbar />
      <div className="">
        {/* Back Button */}
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-8"
        ></MotionWrapper>

        {/* Hero Image */}
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-96 w-full"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </MotionWrapper>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          <MotionWrapper
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center mr-6">
                <FiCalendar className="mr-2" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center mr-6">
                <FiClock className="mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <FiTag className="mr-2" />
                {post.category}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author Bio */}
            <div className="flex items-center mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.bio}</p>
              </div>
            </div>
          </MotionWrapper>

          {/* Content Blocks */}
          <div className="prose max-w-none">
            {post.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <MotionWrapper
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="text-lg text-gray-700 mb-6 leading-relaxed"
                    >
                      {block.text}
                    </MotionWrapper>
                  );
                case "heading":
                  return (
                    <MotionWrapper
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="text-2xl font-bold text-gray-900 mt-10 mb-6"
                    >
                      {block.text}
                    </MotionWrapper>
                  );
                case "list":
                  return (
                    <MotionWrapper
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="list-disc pl-6 mb-6 space-y-2"
                    >
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-lg text-gray-700">
                          {item}
                        </li>
                      ))}
                    </MotionWrapper>
                  );
                case "image":
                  return (
                    <MotionWrapper
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="my-8 rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={800}
                        height={450}
                        className="w-full h-auto"
                      />
                      {block.alt && (
                        <p className="text-sm text-gray-500 mt-2 text-center">
                          {block.alt}
                        </p>
                      )}
                    </MotionWrapper>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Tags */}
          <MotionWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <h3 className="text-sm font-medium text-gray-500 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <MotionWrapper
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </MotionWrapper>
              ))}
            </div>
          </MotionWrapper>
        </article>

        {/* Related Posts */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <MotionWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              You Might Also Like
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogsData
                .filter((blog) => blog.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <MotionWrapper
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md overflow-hidden
                  hover:shadow-lg transition-all"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  </MotionWrapper>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
