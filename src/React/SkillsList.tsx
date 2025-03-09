import React, { useState } from 'react';

const IconosDeCategoría = {
  'Desarrollo Web': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path></svg>
  ),
  'Desarrollo Móvil': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>
  ),
  'Desarrollo Desktop': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'><path d="M20 2H4C2.9 2 2 2.9 2 4v12c0 1.1 0.9 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM4 16V4h16v12H4z"></path></svg>
  ),
  'Mi Experiencia': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'><path d="M12 2L2 7v6c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zM12 22C7.05 20.89 4 16.78 4 13V8.3l8-4 8 4V13c0 3.78-3.05 7.89-8 9z"></path></svg>
  ),

};


const ListaDeHabilidades = () => {
  const [elementoAbierto, setElementoAbierto] = useState<string | null>(null);

  const habilidades = {
    'Desarrollo Web': [
      'Desarrollo de aplicaciones web dinámicas, desde páginas de aterrizaje hasta plataformas escalables.',
      'Creación de sitios de e-commerce, portafolios y sistemas de gestión de contenido (CMS).',
      'Integración con APIs, pasarelas de pago y servicios externos.',
      'Integración de inteligencia artificial y Machine Learning en plataformas web.',
      'Implementación de autenticación, autorización y seguridad web.',
      'Desarrollo web responsivo, adaptable a múltiples dispositivos y optimizado para SEO.',
      'Automatización de procesos, gestión de bases de datos y administración de contenido.',
      'Creación de dashboards, paneles administrativos y sistemas de reservas en línea.',
    ],

    'Desarrollo Móvil': [
      'Desarrollo de aplicaciones móviles nativas y multiplataforma, optimizadas para e-commerce, delivery y gestión de almacenes.',
      'Diseño de interfaces adaptativas y experiencia de usuario optimizada en dispositivos móviles.',
      'Integración con APIs, almacenamiento local, bases de datos y servicios en la nube.',
      'Uso de notificaciones push, mensajería en tiempo real y autenticación de usuarios.',
      'Implementación de geolocalización, sensores del dispositivo, pagos móviles y seguimiento en tiempo real.',
      'Desarrollo de sistemas de control de inventarios, logística y gestión de pedidos en aplicaciones móviles.',
      'Aplicaciones móviles con inteligencia artificial, reconocimiento de imágenes y procesamiento de datos con Machine Learning.',
    ],

    'Desarrollo Desktop': [
      'Desarrollo de software multiplataforma para automatización de procesos, productividad y gestión empresarial.',
      'Diseño de interfaces gráficas (GUI) intuitivas y eficientes para aplicaciones de escritorio.',
      'Integración con hardware, dispositivos externos y servicios en la nube.',
      'Gestión de bases de datos locales y remotas, con seguridad y cifrado avanzado.',
      'Desarrollo de sistemas de reportes, control de inventarios y análisis de datos.',
      'Creación de software especializado para salud, educación, manufactura y otras industrias.',
      'Optimización, escalabilidad y autenticación en aplicaciones de escritorio.',
      'Implementación de inteligencia artificial y Machine Learning en software desktop.',
    ],
    'Mi Experiencia': [
      '🌐 Desarrollo web para la gestión de citas (👤 Paciente, 🏥 Doctor, 🔧 Admin, 🆘 Soporte)',
      '📦 Desarrollo web para la gestión de almacenes',
      '🏥 Desarrollo web para la gestión de hospitalización y emergencias',
      '🤖 Integración de Machine Learning en aplicaciones web',
      '💰 Desarrollo web para la gestión de caja',
      '📱 Desarrollo móvil de una app de delivery',
      '🚀 Desarrollo móvil con ML para detectar Retinopatía diabética ',
      '🦠 Desarrollo móvil con ML para detectar enfermedades micóticas',
      '😰 Desarrollo móvil con ML para detectar el rado de estrés',
      '🩸 Desarrollo móvil con ML para detectar Psoriasis',
      '🍇 Desarrollo móvil con ML para detectar Podredumbre negra',
      '⚪ Desarrollo móvil con ML para detectar Vitiligo',
      '🧬 Desarrollo móvil con ML para detectar Cáncer',
      '🖥️ Desarrollo desktop para la gestión de citas',
    ]

  };

  const alternarElemento = (item: string) => {
    setElementoAbierto(elementoAbierto === item ? null : item);
  };

  return (
      <div className="text-left pt-3 md:pt-9">
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">¿Qué hago?</h3>
        <ul className="space-y-4 mt-4 text-lg">
          {Object.entries(habilidades).map(([categoria, items]) => (
              <li key={categoria} className="w-full">
                <div
                    onClick={() => alternarElemento(categoria)}
                    className="md:w-[500px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4">
                    {IconosDeCategoría[categoria]}
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {categoria}
                    </span>
                      </div>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                              elementoAbierto === categoria ? 'rotate-180' : ''
                          }`}
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div
                      className={`transition-all duration-300 px-4 ${
                          elementoAbierto === categoria ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                      {items.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <span className='pl-1'>•</span>
                            <li className="pl-3">{item}</li>
                          </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default ListaDeHabilidades;
