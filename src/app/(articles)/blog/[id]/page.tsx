// app/(articles)/blog/[id]/page.tsx
import Link from "next/link";
import { knowledgeBase } from "@/data/posts";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
 // 2. CAMBIO: Esperar (await) a que se resuelva la promesa
  const { id } = await params;
  
  const post = knowledgeBase.find((p) => p.id === id);

  if (!post) {
    notFound(); 
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <span className="text-sm font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-4">{post.title}</h1>

        <article className="prose lg:prose-xl max-w-none">
          <h3 className="font-semibold text-gray-700">Reto:</h3>
          <p className="text-gray-600">{post.content}</p>

          <h3 className="font-semibold text-gray-700 mt-6">Solución:</h3>
          <p className="text-gray-600">{post.solution}</p>
        </article>

        <div className="mt-8 border-t pt-6 text-center">
          <Link href="/blog" className="text-blue-600 font-semibold hover:underline">← Volver a la Base de Conocimientos</Link>
        </div>
      </section>
    </main>
  );
}