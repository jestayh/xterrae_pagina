import React, { useState, useEffect } from 'react';
import { Filter, MapPin, Calendar, Award } from 'lucide-react';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Planificación Territorial', 'Minería', 'Infraestructura', 'Investigación', 'Hidrogeología'];

  const projects = [
    {
      title: "PRC de Tocopilla",
      client: "SEREMI MINVU Antofagasta",
      category: "Planificación Territorial",
      year: "2021-2023",
      location: "Tocopilla, Región de Antofagasta",
      desc: "Estudio de Riesgos y Protección Ambiental. Definición de zonas no edificables y áreas de riesgo por amenazas naturales (aluviones, caídas de roca, sismos, tsunamis) y antrópicas.",
      img: "https://images.unsplash.com/photo-1596237563267-845d196629dc?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Línea HVDC Kimal - Lo Aguirre",
      client: "Engie / Tractebel",
      category: "Infraestructura",
      year: "2021",
      location: "Antofagasta a Santiago",
      desc: "Levantamiento geológico y geotécnico para línea de transmisión de 1.420 km. Caracterización de unidades geológicas y peligros naturales a lo largo del trazado.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Riesgos Mineros SQM",
      client: "SQM",
      category: "Minería",
      year: "2022",
      location: "Región de Antofagasta",
      desc: "Evaluación de peligros geológicos por caída de bloques y estabilidad de taludes en faenas mineras. Modelación de trayectorias y diseño de medidas de mitigación.",
      img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Falla San Ramón",
      client: "Inmobiliaria",
      category: "Investigación",
      year: "2018",
      location: "Vitacura, RM",
      desc: "Estudio geofísico y paleosismológico para ajustar la traza de la falla en el sector de Lo Curro. Zonificación de peligro de ruptura superficial para proyecto inmobiliario.",
      img: "https://images.unsplash.com/photo-1518182170546-07fb6ce92254?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Plan Maestro de Aguas Lluvias",
      client: "DOH / MOP",
      category: "Hidrogeología",
      year: "2020",
      location: "Temuco, Región de la Araucanía",
      desc: "Análisis hidrogeológico para la gestión de aguas lluvias y control de inundaciones urbanas. Modelación de infiltración y escorrentía.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Mina El Cerrejón",
      client: "Cerrejón",
      category: "Minería",
      year: "2021",
      location: "La Guajira, Colombia",
      desc: "Modelación de evolución del paisaje (LandLab) para evaluar la efectividad de coberturas vegetales en la estabilización de botaderos de estéril a largo plazo.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Conservación Orongo",
      client: "Consejo de Monumentos",
      category: "Investigación",
      year: "2013",
      location: "Rapa Nui",
      desc: "Diagnóstico de estabilidad del macizo rocoso del volcán Rano Kau y propuestas de conservación para los petroglifos de la Aldea Ceremonial.",
      img: "https://images.unsplash.com/photo-1599423300746-b62507ac9741?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cartografía Geológica Regional",
      client: "SERNAGEOMIN",
      category: "Planificación Territorial",
      year: "2022-2024",
      location: "Arica, Antofagasta, Los Ríos",
      desc: "Estudios FNDR para la zonificación de peligros de remoción en masa a escala regional. Generación de mapas de susceptibilidad y zonas críticas.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[50vh] flex items-center bg-black text-white overflow-hidden">
        <img 
          src="/images/exp_light.jpg" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          alt="Experiencia Geológica"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-xterrae-orange px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">Nuestro Portafolio</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-shadow-lg">
            Experiencia <span className="text-xterrae-orange italic">Real</span>
          </h1>
        </div>
      </div>

      {/* Filters */}
      <section className="py-12 border-b border-gray-100 sticky top-20 bg-white/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            <Filter className="text-xterrae-orange shrink-0" size={20} />
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-xterrae-text text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-xterrae-text tracking-wider">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-xterrae-text mb-1 group-hover:text-xterrae-orange transition-colors">{project.title}</h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{project.client}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-xterrae-orange" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-xterrae-orange" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
