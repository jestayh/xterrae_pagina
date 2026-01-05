import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[50vh] flex items-center bg-black text-white overflow-hidden">
        <img 
          src="/images/ctc_light.jpg" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          alt="Contacto Xterrae"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-xterrae-orange px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">Hablemos</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-shadow-lg">
            Contacto <span className="text-xterrae-orange italic">Directo</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-xterrae-text text-white p-12 md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Información de Contacto</h3>
              <p className="text-gray-300 font-light mb-12">
                Estamos listos para escuchar sobre tu proyecto y explorar cómo nuestra experiencia geológica puede aportar valor.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-xterrae-orange"><Mail /></div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email</span>
                    <a href="mailto:contacto@xterrae.cl" className="text-lg hover:text-xterrae-orange transition-colors">contacto@xterrae.cl</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-xterrae-orange"><MapPin /></div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Oficina</span>
                    <p className="text-lg leading-snug">Av. Providencia 194, Of. 61<br/>Providencia, Santiago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-xterrae-orange"><Phone /></div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Teléfono</span>
                    <p className="text-lg">+56 9 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm text-gray-400">Horario de atención: Lunes a Viernes, 9:00 - 18:00 hrs.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5 bg-white">
            <h3 className="text-2xl font-serif font-bold text-xterrae-text mb-8">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nombre</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-xterrae-orange focus:ring-1 focus:ring-xterrae-orange transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Apellido</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-xterrae-orange focus:ring-1 focus:ring-xterrae-orange transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-xterrae-orange focus:ring-1 focus:ring-xterrae-orange transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Mensaje</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-xterrae-orange focus:ring-1 focus:ring-xterrae-orange transition-all"></textarea>
              </div>

              <button className="bg-xterrae-orange text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-xterrae-text transition-all shadow-lg flex items-center gap-3 w-full justify-center">
                Enviar Solicitud <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
