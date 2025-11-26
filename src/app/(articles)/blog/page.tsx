// app/blog/page.tsx
import Link from "next/link";
import { knowledgeBase } from "@/data/posts";
import Header from "@/components/layout/Header";

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 p-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Base de Conocimientos</h1>
          <p className="text-gray-600 mb-8">Gestor de contenidos sobre los retos enfrentados en el desarrollo.</p>

          <div className="grid gap-6">
            {knowledgeBase.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <span className="text-sm font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">{post.title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>

                <Link href={`/blog/${post.id}`} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                  Leer solución completa →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}