import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: "Estudio revela actividad reciente en la Falla Cariño Botado",
      date: "Noviembre 15, 2023",
      author: "José Estay",
      category: "Investigación",
      img: "/images/blog-falla.jpg",
      excerpt: "Nuevos hallazgos publicados en la revista Geomorphology confirman actividad tectónica durante el Holoceno en los Andes de Chile central, con implicancias significativas para la evaluación del riesgo sísmico.",
      content: "Un estudio reciente liderado por nuestro equipo ha revelado importantes hallazgos sobre la falla Cariño Botado (CBF). Utilizando dataciones por luminescencia estimulada ópticamente (OSL), se determinó que los últimos eventos tectónicos ocurrieron entre 2.5 y 9 mil años atrás."
    },
    {
      title: "Zonificación de Peligros en la Región de Arica y Parinacota",
      date: "Agosto 2024",
      author: "Equipo Xterrae",
      category: "Proyectos FNDR",
      img: "/images/blog-fndr.jpg",
      excerpt: "Concluye exitosamente el estudio FNDR para la zonificación de remociones en masa a escala 1:250.000, una herramienta clave para la planificación territorial regional.",
      content: "Durante los años 2022 al 2024, Xterrae Geología realizó estudios destinados a zonificar las áreas expuestas al peligro de remoción en masa. El proyecto incluyó un catastro detallado y mapas de susceptibilidad para apoyar la toma de decisiones."
    },
    {
      title: "Lanzamiento de la Guía 'Siguiendo las huellas de los Gigantes'",
      date: "Abril 2024",
      author: "Carolina Geoffroy",
      category: "Vinculación",
      img: "/images/blog-gigantes.jpg",
      excerpt: "Una iniciativa de geoeducación que integra el conocimiento científico con la sabiduría ancestral para aumentar la resiliencia en comunidades del Geoparque Kütralkura.",
      content: "Este libro busca aumentar la resiliencia de mujeres, niñas y jóvenes en zonas de riesgo volcánico. Lo que distingue a esta guía es su enfoque participativo y la integración del conocimiento científico sobre volcanes con la cosmovisión Mapuche."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[50vh] flex items-center bg-black text-white overflow-hidden">
        <img 
          src="/images/blg_light.jpg" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          alt="Blog Xterrae"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-xterrae-orange px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">Actualidad</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-shadow-lg">
            Blog <span className="text-xterrae-orange italic">Xterrae</span>
          </h1>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-xterrae-text tracking-wider flex items-center gap-2">
                    <Tag size={12} className="text-xterrae-orange"/>
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-xterrae-text mb-4 leading-tight group-hover:text-xterrae-orange transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <button className="text-xterrae-text font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Leer Artículo Completo <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
