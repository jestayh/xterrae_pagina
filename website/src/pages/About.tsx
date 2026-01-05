import React, { useEffect } from 'react';
import { Target, Compass, Zap, Clock, ShieldCheck, Users, Heart, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { 
      name: "Rodrigo Rauld P.", 
      title: "GEÓLOGO Y DOCTOR EN CIENCIAS MENCIÓN GEOLOGÍA. UNIVERSIDAD DE CHILE",
      role: "Socio y Geólogo Senior", 
      bio: "Rodrigo es Socio y Geólogo Senior en Xterrae Geología, con más de 20 años de experiencia. Sus áreas de interés son los peligros geológicos, neotectónica, geología de base, y conservación del patrimonio. Ha dirigido más de 85 estudios especializados, destacándose en la coordinación de equipos multidisciplinarios y el desarrollo de soluciones innovadoras. Su experiencia combina la práctica profesional con la docencia universitaria y la investigación académica, siendo autor de múltiples publicaciones científicas. Su trayectoria incluye roles clave en SERNAGEOMIN y la Universidad de Chile, aportando una visión integral a cada proyecto.",
      specialties: ["Peligros geológicos", "Neotectónica", "Geología de base", "Conservación del patrimonio"],
      img: "/team/rodrigo_v2.jpg" 
    },
    { 
      name: "Felipe García-Huidobro C.", 
      title: "GEÓLOGO Y MAGÍSTER EN CIENCIAS DE LA INGENIERÍA, MENCIÓN RECURSO Y MEDIOAMBIENTE HÍDRICOS. UNIVERSIDAD DE CHILE.",
      role: "Socio y Geólogo Senior", 
      bio: "Felipe es Socio y Geólogo Senior con más de 15 años de experiencia en consultoría en las áreas de hidrogeología y peligros geológicos. Ha realizado estudios destinados a resolver problemas hidrológicos, hidrogeológicos e hidrogeoquímicos, elaborar líneas de base geológicas e hidrogeológicas, desarrollar modelos hidrogeológicos conceptuales destinados a construir modelos numéricos y elaborar estudios de peligros geológicos para problemáticas específicas. Anteriormente se desempeñó en DICTUC, Knight Piesold y Geohidrología Consultores.",
      specialties: ["Hidrogeología", "Hidrogeoquímica", "Modelos hidrogeológicos", "Evaluación de peligros geológicos"],
      img: "/team/felipe_v3.jpg" 
    },
    { 
      name: "José Estay H.", 
      title: "GEÓLOGO Y MAGÍSTER EN CIENCIAS, MENCIÓN GEOLOGÍA. UNIVERSIDAD DE CHILE.",
      role: "Geólogo de Proyectos", 
      bio: "José es Geólogo de Proyectos en Xterrae Geología desde el 2019, donde participa en estudios de riesgo para la gestión de peligros geológicos aplicada a planificación territorial y evaluación de infraestructura de proyectos. Además, ha aplicado modelos de erosión del paisaje para planes de cierre mineros. A lo largo de su carrera ha sido autor y coautor de publicaciones de investigación.",
      specialties: ["Geomorfología cuantitativa", "Fallas activas", "Sistemas de información geográfica", "Modelamiento numérico"],
      img: "/team/jose_v2.jpg" 
    },
    { 
      name: "Carolina Geoffroy G.", 
      title: "GEÓLOGA Y MAGÍSTER EN CIENCIAS, MENCIÓN GEOLOGÍA. UNIVERSIDAD DE CHILE. DIPLOMADO EN REDUCCIÓN DEL RIESGO DE DESASTRES: PREVENCIÓN Y GESTIÓN, PUC.",
      role: "Geóloga de Proyectos", 
      bio: "Carolina es Geóloga de Proyectos en Xterrae Geología desde el 2020, donde se dedica a estudios de evaluación de peligros geológicos para la planificación territorial a nivel comunal e intercomunal y para estudios de ingeniería. Ha participado en diferentes proyectos de divulgación científica a través de Fundación Consejo de Curso, Centro de Excelencia en Geotermia de los Andes (CEGA) y Grupo de Volcanología de la Sociedad Geológica de Chile, entre ellos el proyecto Siguiendo Gigantes.",
      specialties: ["Volcanología", "Evaluación de peligros geológicos", "Planificación territorial", "Gestión del riesgo de desastres"],
      img: "/team/carolina_v2.jpg" 
    },
    { 
      name: "Diego Castañeda M.", 
      title: "GEÓLOGO Y BACHILLER EN CIENCIAS NATURALES Y EXACTAS. UNIVERSIDAD DE CHILE. DIPLOMADO EN GEOINFORMACIÓN Y PERCEPCIÓN REMOTA, PUCV.",
      role: "Geólogo de Proyectos", 
      bio: "Diego es Geólogo de Proyectos en Xterrae Geología desde el 2022, donde ha participado en estudios de reconocimiento de remociones en masa que afectan el territorio chileno con el fin de gestionar los peligros geológicos. Participa activamente en organizaciones que buscan la protección y conservación del medio ambiente y ha trabajado como geólogo junior de terreno en proyectos de geología regional para el SERNAGEOMIN.",
      specialties: ["Geomorfología", "Geología glacial", "Teledetección", "Geología ambiental"],
      img: "/team/diego_v3.jpg" 
    },
    { 
      name: "Leslie Gutiérrez H.", 
      title: "ODONTÓLOGA Y ESTUDIANTE DE INGENIERÍA CIVIL INDUSTRIAL",
      role: "Coordinadora Administración y RRHH", 
      bio: "Leslie es Coordinadora Administrativa y de Recursos Humanos en Xterrae Geología desde el 2024. De profesión Odontóloga y estudiante de Ingeniería Civil Industrial, Leslie integra su formación multidisciplinaria para optimizar los procesos administrativos y la gestión del capital humano.",
      specialties: ["Gestión de proyectos", "Optimización de procesos", "Liderazgo y desarrollo organizacional"],
      img: "/team/leslie_v2.jpg" 
    }
  ];

  const specialization = [
    "Evaluación de peligros y riesgos geológicos para proyectos de infraestructura y desarrollo",
    "Elaboración de estudios de riesgos para planificación territorial",
    "Geología aplicada a la conservación del patrimonio",
    "Análisis de procesos geológicos recientes",
    "Estudios hidrogeológicos y de recursos hídricos"
  ];

  const values = [
    { title: "Rigor Técnico", desc: "Fundamentamos nuestras conclusiones en evidencia sólida y metodologías validadas.", icon: <ShieldCheck size={24}/> },
    { title: "Orientación al cliente", desc: "Construimos relaciones de confianza basadas en la comprensión profunda de las necesidades específicas de cada cliente.", icon: <Users size={24}/> },
    { title: "Perspectiva integral", desc: "Analizamos cada proyecto considerando su contexto completo: desde las características geológicas hasta sus implicaciones para el desarrollo local, lo que nos permite ofrecer soluciones más efectivas.", icon: <Compass size={24}/> },
    { title: "Adaptabilidad", desc: "Ajustamos nuestras metodologías según los requerimientos específicos de cada proyecto, manteniendo un equilibrio entre innovación y aplicación de técnicas probadas en geología.", icon: <Zap size={24}/> },
    { title: "Responsabilidad", desc: "Asumimos cada proyecto con el máximo rigor, conscientes de la influencia de nuestras recomendaciones.", icon: <Heart size={24}/> },
    { title: "Eficiencia", desc: "Nos comprometemos a entregar resultados de calidad en plazos optimizados, sin comprometer la rigurosidad técnica de nuestros estudios.", icon: <Clock size={24}/> }
  ];

  return (
    <div className="bg-white">
      {/* Header Detallado */}
      <div className="relative h-[50vh] flex items-center bg-black text-white overflow-hidden">
        <img 
          src="/images/abt_light.jpg" 
          className="absolute inset-0 w-full h-full object-cover object-[50%_75%] opacity-40"
          alt="Equipo en Terreno"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-xterrae-orange px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">Trayectoria</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-shadow-lg">
            Quiénes <span className="text-xterrae-orange italic">Somos</span>
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-xterrae-text mb-12 leading-tight">
            Transformamos el conocimiento geológico en soluciones para el desarrollo sostenible del territorio.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 text-lg text-gray-600 leading-relaxed font-light">
            <div className="space-y-8">
              <p>
                Desde 2008, <span className="text-xterrae-text font-bold uppercase">Xterrae Geología</span> ha desarrollado más de 200 estudios a lo largo de Chile, estableciéndose como un referente en consultoría geológica aplicada. Nuestra fortaleza radica en la capacidad de traducir información técnica compleja en soluciones prácticas que responden a necesidades concretas.
              </p>
              <p>
                Lo que caracteriza nuestra trayectoria es la efectiva integración en equipos multidisciplinarios. Este enfoque nos ha permitido comprender a profundidad cómo la geología se articula con otras disciplinas en el desarrollo de proyectos.
              </p>
            </div>
            <div className="space-y-8">
              <p>
                Hablamos el lenguaje de ingenieros, especialistas ambientales, en conservación patrimonial y de planificadores territoriales, lo que facilita la aplicación del conocimiento geológico de manera efectiva en contextos diversos y complejos.
              </p>
              
              {/* Especialización Block */}
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h4 className="text-xterrae-orange font-bold uppercase tracking-widest text-xs mb-6">Especialización</h4>
                <ul className="space-y-3">
                  {specialization.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-xterrae-text font-medium">
                      <CheckCircle2 size={16} className="text-xterrae-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-xterrae-text text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <span className="text-xterrae-orange font-bold uppercase tracking-widest text-xs mb-4 block">Propósito</span>
              <h3 className="text-4xl font-serif font-bold mb-8">Nuestra Misión</h3>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Contribuir al desarrollo sostenible mediante estudios geológicos de alta calidad técnica que faciliten la toma de decisiones y generen valor añadido en cada proyecto.
              </p>
            </div>
            <div>
              <span className="text-xterrae-orange font-bold uppercase tracking-widest text-xs mb-4 block">Ambición</span>
              <h3 className="text-4xl font-serif font-bold mb-8">Nuestra Visión</h3>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Ser reconocida como una consultora de referencia en geología aplicada, distinguidos por nuestra capacidad de ofrecer soluciones técnicamente sólidas y adaptadas a los desafíos territoriales actuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-xterrae-text font-serif">Nuestros Valores</h2>
            <div className="w-24 h-1 bg-xterrae-orange mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-xterrae-orange/10">
                <div className="text-xterrae-orange mb-6 group-hover:scale-110 transition-transform duration-500">{v.icon}</div>
                <h4 className="text-xl font-bold text-xterrae-text mb-4 font-serif">{v.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Detallado */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-xterrae-text font-serif">Equipo Profesional</h2>
            <p className="text-gray-500 mt-4 font-light text-lg">Excelencia técnica impulsada por la diversidad de especialidades.</p>
          </div>

          <div className="space-y-32">
            {team.map((member, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
                <div className="w-full lg:w-1/3">
                  <div className="relative group">
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl z-10 bg-white">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-xterrae-text/60 via-transparent to-transparent opacity-40" />
                    </div>
                    <div className={`absolute -z-0 top-8 w-full h-full border-2 border-xterrae-orange/20 rounded-[2rem] ${idx % 2 === 0 ? '-left-8' : '-right-8'}`} />
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <h3 className="text-4xl font-serif font-bold text-xterrae-text mb-2">{member.name}</h3>
                  <p className="text-xs font-black text-xterrae-orange uppercase tracking-widest mb-6 block">
                    {member.title}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                    {member.bio}
                  </p>
                  
                  {/* Personal Areas of Interest */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {member.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-sm font-bold text-xterrae-text/70 bg-white px-4 py-2 rounded-full shadow-sm">
                        <CheckCircle2 size={14} className="text-xterrae-orange" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-200 flex gap-6">
                    <div className="flex items-center gap-2 text-xterrae-text/40 hover:text-xterrae-orange transition-colors cursor-pointer">
                      <Linkedin size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-2 text-xterrae-text/40 hover:text-xterrae-orange transition-colors cursor-pointer">
                      <Mail size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</span>
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

export default About;
