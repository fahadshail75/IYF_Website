'use client';

import { FC } from 'react';
import Image from 'next/image';

export interface Evento {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface EventosSectionProps {
  eventos: Evento[];
}

const EventosSection: FC<EventosSectionProps> = ({ eventos }) => {
  return (
    <section className="  bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
      Events & Activities
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-white shadow-all border border-amber-50 rounded overflow-hidden p-4 md:p-8    ">
            <div className=' '>

            <Image
              src={evento.imageSrc}
              alt={evento.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            </div>
            <div className="mt-5 flex flex-col  justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{evento.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{evento.description}</p>
              </div>
              <a
                href={evento.link}
                className="text-sm text-green-600 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventosSection;
