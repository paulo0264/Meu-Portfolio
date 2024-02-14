
import { Projects } from '@/components/Home/Projects';
import { Project, AboutMe as TAboutMe } from '@/components/types/Home';
import Head from "next/head";
import { GetStaticProps } from 'next';
import { AboutMe } from '@/components/Home/AboutMe';


interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home;
  return (
    <>
      <Head>
        <title>Sobre mim | Paulo</title>
      </Head>

      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

// 'https://api.github.com/users/paulo0264/repos',
const loadHome = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/huri3l/b2d6a36f169dfe3fcd11a5dac89d83cc/raw/ad2cd1cd3c858ffd6fd70af5c80bb6bf98ee2cdf/home.json',
  );
  const home = await res.json();

  return home;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  };
};

export default Home;
