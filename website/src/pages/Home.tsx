import React, { useState, useEffect } from 'react';
import { ChevronRight, Mountain, ShieldCheck, Compass, Waves, HardHat, Award, Search } from 'lucide-react';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    '/images/h1_light.jpg',
    '/images/h2_light.jpg',
    '/images/h3_light.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { title: "Geología de Base y Ambiental", desc: "Elaboración de estudios detallados con énfasis en procesos geológicos recientes.", icon: <Mountain size={32} /> },
    { title: "Amenazas y Riesgos Naturales", desc: "Identificación y zonificación de peligros para prevención y mitigación efectiva.", icon: <ShieldCheck size={32} /> },
    { title: "Planificación Territorial", desc: "Estudios de riesgo fundados para Planes Reguladores Comunales e Intercomunales.", icon: <Compass size={32} /> },
    { title: "Hidrogeología", desc: "Caracterización de acuíferos, modelos de flujo y gestión de recursos hídricos.", icon: <Waves size={32} /> },
    { title: "Infraestructura y Obras Civiles", desc: "Líneas de base y estudios de prefactibilidad para grandes proyectos de ingeniería.", icon: <HardHat size={32} /> },
    { title: "Conservación del Patrimonio", desc: "Evaluación de factores geológicos que amenazan el patrimonio histórico y natural.", icon: <Award size={32} /> },
    { title: "Auditorías y Peer Review", desc: "Revisión experta de estudios realizados por terceros bajo criterios de excelencia.", icon: <Search size={32} /> }
  ];

  const projects = [
    { title: "Cartografía Sernageomin", client: "SERNAGEOMIN", category: "Riesgos", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80", desc: "Levantamiento geológico regional a escala 1:250.000 en Antofagasta y Los Ríos." },
    { title: "Riesgos Mineros SQM", client: "SQM", category: "Minería", img: "https://images.unsplash.com/photo-1566996694954-90b052c412c4?auto=format&fit=crop&q=80", desc: "Modelamiento de caída de bloques y estabilidad física en faenas del norte." },
    { title: "Plantas Solares", client: "Solarig", category: "Energía", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80", desc: "Caracterización geotécnica e hidrogeológica para proyectos fotovoltaicos." },
    { title: "Plan Maestro Temuco", client: "Regeneraxion", category: "Planificación", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80", desc: "Estudios de riesgo para el desarrollo urbano sostenible." },
    { title: "Hidrogeología Agricovial", client: "WSP", category: "Hidrogeología", img: "https://images.unsplash.com/photo-1589923158776-0d53f221c4df?auto=format&fit=crop&q=80", desc: "Evaluación de recursos hídricos para proyectos agroindustriales." }
  ];

  const categories = ['Todos', 'Minería', 'Energía', 'Riesgos', 'Planificación', 'Hidrogeología'];
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const blog = [
    { title: "Falla Cariño Botado", desc: "Hallazgos revelan actividad en el Holoceno.", tag: "Investigación", img: "/images/blog-falla.jpg" },
    { title: "Estudios FNDR", desc: "Zonificación de remociones en masa regionales.", tag: "Proyectos", img: "/images/blog-fndr.jpg" },
    { title: "Guía Siguiendo Gigantes", desc: "Geoeducación y resiliencia en Kütralkura.", tag: "Difusión", img: "/images/blog-gigantes.jpg" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative h-[95vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <img 
              key={index}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentHeroImage ? 'opacity-40 animate-ken-burns' : 'opacity-0'
              }`}
              alt={`Terreno Geológico ${index + 1}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-xterrae-orange px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-pulse shadow-lg">Desde 2008</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 font-serif text-shadow-lg">
              Transformamos desafíos <br />
              <span className="text-xterrae-orange italic">geológicos</span> en soluciones.
            </h1>
            <p className="text-lg md:text-xl mb-12 text-gray-200 font-light leading-relaxed max-w-xl">
              Más de 15 años de trayectoria y 200+ estudios exitosos en Chile, combinando rigurosidad técnica con una visión científica de vanguardia.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="/servicios" className="group bg-white text-xterrae-text px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-xterrae-orange hover:text-white transition-all shadow-2xl flex items-center">
                Ver Servicios <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/nosotros" className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-white border border-white/30 hover:bg-white/10 transition backdrop-blur-md">
                Conoce al Equipo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <a href="/nosotros" className="group cursor-pointer hover:bg-gray-50 rounded-2xl p-4 transition-all">
              <p className="text-4xl font-black text-xterrae-orange mb-2 group-hover:scale-110 transition-transform">15+</p>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold group-hover:text-xterrae-text">Años de Experiencia</p>
            </a>

            <a href="/experiencia" className="group cursor-pointer hover:bg-gray-50 rounded-2xl p-4 transition-all">
              <p className="text-4xl font-black text-xterrae-orange mb-2 group-hover:scale-110 transition-transform">230+</p>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold group-hover:text-xterrae-text">Proyectos Realizados</p>
            </a>

            <div className="group p-4">
              <p className="text-4xl font-black text-xterrae-text mb-2">50+</p>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Empresas Satisfechas</p>
            </div>

            <div className="group p-4">
              <p className="text-4xl font-black text-xterrae-text mb-2">6</p>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Alianzas Estratégicas</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-xterrae-text mb-4">Nuestros Servicios</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Soluciones integrales para la industria minera, energética y de infraestructura.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                <div className="text-xterrae-orange mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-xterrae-text">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{s.desc}</p>
                <a href="/servicios" className="text-xterrae-orange font-bold text-xs uppercase tracking-widest flex items-center gap-2">Ver más <ChevronRight size={12}/></a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/servicios" className="inline-block border-b-2 border-xterrae-orange text-xterrae-text font-bold uppercase tracking-widest text-xs pb-1 hover:text-xterrae-orange transition-colors">Ver todos los servicios</a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xterrae-orange font-bold uppercase tracking-[0.3em] text-xs">Portafolio</span>
              <h2 className="text-4xl font-bold text-xterrae-text font-serif mt-2">Experiencia Real</h2>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.slice(0,4).map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-xterrae-text text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>{cat}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0,3).map((project, idx) => (
              <div key={idx} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-xterrae-text/90 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white bg-xterrae-orange mb-2 inline-block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white font-serif mb-1">{project.title}</h3>
                  <p className="text-xterrae-light text-xs font-bold uppercase tracking-widest">Cliente: {project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-xterrae-text mb-12 text-center">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blog.map((post, i) => (
              <article key={i} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-video mb-4">
                  <img src={post.img} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-2 text-xterrae-text">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.desc}</p>
                <span className="text-xterrae-orange text-xs font-bold uppercase tracking-widest flex items-center gap-2">Leer más <ChevronRight size={14}/></span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;