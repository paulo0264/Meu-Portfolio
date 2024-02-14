import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";

// interface ContatoProps {
//     contacts: {
//       name: string;
//       link: string;
//       isMail?: boolean;
//     }[];
//   }


    const Contato = () => {
        
    return ( 
        <>
            <Head>
                <title>Contato | Paulo</title>
            </Head>

            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="text-5xl md:text-5xl font-bold text-center text-orange-500">Contatos</h1>
                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">E-mail</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="mailto:fagundes.dev@hotmail.com" className="text-sm md:text-lg text-slate-300 underline truncate">fagundes.dev@hotmail.com</a>
                            <CopyButton />
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Linkedin</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://www.linkedin.com/in/paulo-fagundes-dev/" className="text-sm md:text-lg text-slate-300 underline truncate">linkedin.com/in/paulo-fagundes-dev</a>
                            <CopyButton />
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">GitHub</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://github.com/paulo0264" className="text-sm md:text-lg text-slate-300 underline truncate">github.com/paulo0264</a>
                            <CopyButton />
                        </div>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default Contato;