import { Project } from '@/components/types/Home';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Projects = () => {
    

  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-2xl md:text-4xl">Projetos Recentes</h2>
        <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
            
              <li className="text-md relative">
                <Image
                  src="/Cadastro.png"
                  alt=""
                  width={300}
                  height={300}
                  className="object-cover rounded-2xl h-[10rem] mb-4"
                />
                <span className=''>Lab-Exames</span>
                <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
                  <span className=''>1</span>
                </div>
              </li>

              <li className="text-md relative">
                <Image
                  src="/barber.png"
                  alt=""
                  width={300}
                  height={300}
                  className="object-cover rounded-2xl h-[10rem] mb-4"
                />
                <span className=''>App-Barber</span>
                <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
                  <span className=''>2</span>
                </div>
              </li>
           
           
            
        </ul>
   



      {/* <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ slug, name, image }, index) => (
          <li className="text-md relative" key={name + index}>
            <Image
              src={image.url}
              alt={image.alt}
              width={300}
              height={300}
              className="object-cover rounded-2xl h-[18.75rem] mb-4"
            />
            <span>{name}</span>
            <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
              <span>{index + 1}</span>
            </div>
          </li>
        ))}
      </ul> */}
    </article>
  );
};