import Link from "next/link";
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { AboutMe as TAboutMe } from '@/components/types/Home';

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
  });

  interface AboutMeProps {
    aboutMe: TAboutMe;
  }

  export const AboutMe = ({ aboutMe }: AboutMeProps) => {
    const { title, description, contact, pfp, techs } = aboutMe;
    return ( 
        <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-5 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-6xl xl:leading-[5rem]">Prazer,sou&nbsp;
                    <strong className="font-bold text-orange-500">Paulo Fagundes</strong>
                </h1>
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>
                        Desenvolvedor Front-End & Investigador Digital
                    </h2>
                <Link href="/contato" className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">
                    Converse comigo
                </Link>
                </div>
                <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li
                        style={{ backgroundColor: '#000', color: '#FA8628' }}
                        className="w-fit p-2 rounded-md"
                        >
                        Python
                    </li>
                    <li
                        style={{ backgroundColor: '#eeeeee', color: '#345232' }}
                        className="w-fit p-2 rounded-md"
                        >
                        Django
                    </li>
                    <li
                        style={{ backgroundColor: '#eeeeee', color: '#000' }}
                        className="w-fit p-2 rounded-md"
                        >
                        NextJS
                    </li>
                    <li
                        style={{ backgroundColor: '#eeeeee', color: '#000' }}
                        className="w-fit p-2 rounded-md"
                        >
                        Git
                    </li>
                    <li
                        style={{ backgroundColor: '#eeeeee', color: '#F91519' }}
                        className="w-fit p-2 rounded-md"
                        >
                        Php
                    </li>
                    <li
                        style={{ backgroundColor: '#1B17F1', color: '#eeeeee' }}
                        className="w-fit p-2 rounded-md"
                        >
                        React Native
                    </li>
                    {/* {techs.map(({ tech, bgcolor, color }, index) => (
                        <li
                        key={tech + index}
                        style={{ backgroundColor: bgcolor, color: color }}
                        className="w-fit p-2 rounded-md"
                        >
                        {tech}
                        </li>
                    ))} */}
                    
                </ul>
            </div>

            <div className="relative">
                <Image src="/paulo.jpg" alt="Avatar"
                    unoptimized
                    width={400}
                    height={500}
                    className="rounded-full"
                />
                <p className="p-3 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
                    <strong className="text-3xl">2+</strong>
                    <br />
                    anos de Experiência
                </p>
            </div>
        </main>
     );
};
 