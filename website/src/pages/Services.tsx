import React, { useEffect } from 'react';
import { 
  ShieldCheck, HardHat, Mountain, Waves, Search, Award, FileText, SearchCheck, 
  ChevronRight, ArrowRight 
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "planificacion",
      icon: <ShieldCheck size={40} />,
      title: "Amenazas Naturales y Planificación Territorial",
      desc: "Identificamos y zonificamos peligros de origen natural para apoyar la planificación territorial segura y eficiente, trabajando junto a urbanistas para determinar áreas de riesgo según el Art. 2.1.17 de la OGUC.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "PRC de Tocopilla (2021-2023)",
          summary: "Definición de zonas no edificables y áreas de riesgo por caídas, deslizamientos, flujos y tsunamis a escala 1:5.000."
        },
        {
          name: "PRI Provincia de Cauquenes",
          summary: "Desarrollo de mapas de susceptibilidad a escala 1:25.000 para restringir el desarrollo urbano en zonas peligrosas."
        }
      ]
    },
    {
      id: "infraestructura",
      icon: <HardHat size={40} />,
      title: "Infraestructura y Obras Civiles",
      desc: "Realizamos líneas de base, estudios de prefactibilidad y evaluación de amenazas naturales para el diseño y evaluación de proyectos de construcción.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Conexión Vial Ruta 78 - Ruta 68",
          summary: "Evaluación de amenazas de remociones en masa en el cordón del Cerro Lo Aguirre y su impacto sobre la infraestructura vial."
        },
        {
          name: "Ruta 204 Valdivia - Los Lagos",
          summary: "Análisis geomorfológico de una remoción en masa de gran escala para diseñar alternativas de trazado seguras."
        }
      ]
    },
    {
      id: "fallas",
      icon: <Mountain size={40} />,
      title: "Estudio de Fallas Geológicas",
      desc: "Nos especializamos en el estudio de fallas geológicas mediante revisión de antecedentes, modelos de elevación digital y evaluaciones directas en sondajes o trincheras.",
      img: "https://images.unsplash.com/photo-1518182170546-07fb6ce92254?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Falla San Ramón",
          summary: "Ajuste de traza y zonificación de peligro de remociones en masa para el proyecto 'Conjunto Armónico Portezuelo'."
        },
        {
          name: "Falla Laguna Verde (Curauma)",
          summary: "Evaluación de actividad tectónica reciente mediante trincheras paleosismológicas para la PUCV."
        }
      ]
    },
    {
      id: "mineria",
      icon: <Search size={40} />,
      title: "Geología para Minería",
      desc: "Ofrecemos análisis especializados para resolver problemáticas clave como estabilidad de taludes, control de erosión y modelaciones del paisaje.",
      img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Mina El Cerrejón (Colombia)",
          summary: "Modelación de evolución del paisaje (LandLab) para evaluar la efectividad de medidas de manejo en botaderos de estéril."
        },
        {
          name: "Mina Carol (Arica)",
          summary: "Estimación de volumen y alcance de remociones en masa para evaluación de medidas de mitigación en botaderos."
        }
      ]
    },
    {
      id: "hidrogeologia",
      icon: <Waves size={40} />,
      title: "Hidrogeología",
      desc: "Caracterización de unidades acuíferas, química de aguas y fenómenos de transporte para proteger y evaluar recursos hídricos.",
      img: "https://images.unsplash.com/photo-1589923158776-0d53f221c4df?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Hospital del Salvador",
          summary: "Investigación geológica e hídrica para el diseño de sistemas de drenaje de aguas someras."
        },
        {
          name: "Estadio San Carlos de Apoquindo",
          summary: "Evaluación de impacto en la disponibilidad y calidad de agua subterránea por modernización del recinto."
        }
      ]
    },
    {
      id: "patrimonio",
      icon: <Award size={40} />,
      title: "Conservación del Patrimonio",
      desc: "Identificamos y evaluamos los factores geológicos que amenazan la preservación del patrimonio histórico, arqueológico y natural.",
      img: "https://images.unsplash.com/photo-1599423300746-b62507ac9741?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Aldea Ceremonial de Orongo (2013)",
          summary: "Estudio de calidad del macizo rocoso y petroglifos en el sitio Mata Ngarahu, Rapa Nui."
        },
        {
          name: "Pukará de Quitor",
          summary: "Análisis de procesos de degradación provocados por precipitaciones y riesgo de caída de bloques."
        }
      ]
    },
    {
      id: "lineasbase",
      icon: <FileText size={40} />,
      title: "Líneas de Base y Prefactibilidad",
      desc: "Caracterización de variables ambientales antes de la ejecución de proyectos para reducir costos, identificar riesgos y mitigar impactos.",
      img: "https://images.unsplash.com/photo-1504221507732-5246c045949b?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Línea HVDC Kimal - Lo Aguirre",
          summary: "Levantamiento geológico y geotécnico para línea de transmisión de 1.420 km de longitud."
        },
        {
          name: "Cuenca del Salar de Atacama",
          summary: "Línea de base regional de componentes geológicos y geomorfológicos."
        }
      ]
    },
    {
      id: "auditoria",
      icon: <SearchCheck size={40} />,
      title: "Auditorías y Peer Review",
      desc: "Realizamos revisiones de pares de estudios realizados por terceros, incluyendo geología básica, peligros, hidrogeología y calidad de aguas.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      projects: [
        {
          name: "Revisión de Estudios",
          summary: "Aplicación de criterios específicos para mejorar la calidad técnica y científica de contenidos técnicos."
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[50vh] flex items-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
        <img 
          src="/images/svc_light.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Servicios Geológicos"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-xterrae-orange px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">Nuestra Expertise</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-shadow-lg">
            Servicios <span className="text-xterrae-orange italic">Especializados</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl text-gray-600 font-light leading-relaxed italic">
            "Combinamos innovación, rigurosidad y comprensión profunda del entorno para entregar resultados prácticos de excelencia técnica y científica."
          </p>
        </div>
      </section>

      {/* Services Loop */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-32">
            {services.map((service, idx) => (
              <div key={idx} id={service.id} className="scroll-mt-32">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  
                  {/* Text Part */}
                  <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-5 mb-8">
                      <div className="p-4 bg-white text-xterrae-orange rounded-2xl shadow-md border border-gray-100">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-xterrae-text leading-tight">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Project Examples - The Competitive Edge */}
                    <div className="space-y-6">
                      <h3 className="text-xs font-black text-xterrae-orange uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <ArrowRight size={14}/> Casos de Éxito y Proyectos
                      </h3>
                      <div className="grid gap-4">
                        {service.projects.map((project, pIdx) => (
                          <div key={pIdx} className="bg-white rounded-2xl p-6 border-l-4 border-xterrae-text shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-xterrae-text mb-2">{project.name}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed italic">
                              {project.summary}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Part */}
                  <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                        <img 
                          src={service.img} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-xterrae-text/60 via-transparent to-transparent" />
                      </div>
                      {/* Decorative Frame */}
                      <div className={`absolute -z-10 w-full h-full border-2 border-xterrae-orange/20 rounded-[2.5rem] ${idx % 2 === 0 ? 'top-8 -right-8' : 'top-8 -left-8'}`} />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-xterrae-text text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-8">Rigor científico aplicado a tu desafío.</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Nuestra versatilidad nos permite colaborar con clientes del mundo público y privado, ofreciendo soluciones ajustadas a sus realidades.
          </p>
          <a href="/contacto" className="inline-flex items-center gap-3 bg-xterrae-orange text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-xterrae-orange transition-all shadow-xl">
            Iniciar Conversación <ChevronRight size={20}/>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;