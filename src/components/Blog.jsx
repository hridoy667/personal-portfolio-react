import React from "react";

const posts = [
  {
    id: 1,
    title: "Prompt Engineering Ebook",
    date: "August 3, 2025",
    excerpt: "A proper guide on starting writing proper prompt and achieve expected result everytime",
    contentUrl: "https://drive.google.com/uc?export=download&id=1MwIGKLyqFqwkZ_TVT5Bt0Ux735-oKXfl",
    details: "React Hooks let you use state and other React features without writing a class. Learn about useState, useEffect, and custom hooks to better structure your components.",
  },
  {
    id: 2,
    title: "Why We Still Need Humans for Coding — Even in the Age of AI",
    date: "July 20, 2025",
    excerpt: "Writing clean code is essential for maintainability and teamwork...",
    details: "AI can generate code but lacks the empathy and deep contextual understanding that humans bring. This article explores why developers are still irreplaceable.",
  },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-violet-800 to-black text-white px-6 py-12 mt-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-tight">Blog & Insights</h1>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Thoughts, tutorials, and insights about web development, programming, and tech.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(({ id, title, date, excerpt, contentUrl, details }) => (
            <article
              key={id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
              <time className="block mb-3 text-sm text-gray-400">{date}</time>
              <p className="mb-4 text-gray-300">{excerpt}</p>

              <div className="flex flex-wrap gap-4 items-center">
                {contentUrl && (
                  <a
                    href={contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
                  >
                    📥 Download PDF
                  </a>
                )}

                <details className="group w-full mt-2">
                  <summary className="cursor-pointer text-indigo-300 hover:text-indigo-200 font-medium transition">
                    📖 Read More
                  </summary>
                  <div className="mt-2 text-gray-300 text-sm leading-relaxed">
                    {details}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
