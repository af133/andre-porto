import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiLaravel,
  SiGo,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {/* 🌐 Visit Website Button — Green + External Arrow */}
      <Link rel="noopener" target="_blank" href={live} className="flex gap-2">
        <Button
          size="sm"
          className="group bg-green-600 hover:bg-green-700 text-white flex items-center">
          Live Demo
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </Link>

      {/* 🐙 GitHub Button — Dark + Icon + Arrow */}
      {repo && (
        <Link rel="noopener" target="_blank" href={repo} className="flex gap-2">
          <Button
            size="sm"
            className="group bg-gray-800 hover:bg-gray-900 text-white flex items-center">
            <FaGithub className="mr-2 w-5 h-5" />
            Source Code
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      )}
    </div>
  );
};


export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon:<SiLaravel/>,
  },
  golang: {
    title: "Golang",
    bg: "black",
    fg: "white",
    icon:<SiGo/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[]; devops:Skill[];database:Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My 3D Developer Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["/assets/projects-screenshots/portfolio/landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: []
      ,
      devops:[],
      database:[],
    },
    live: "#",
    github: "https://github.com/af133/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Beautiful 3D Objects </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard model? Yeah! I made that (<u><a href="#" target="_blank">download here</a></u>). That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like typing - but every keystroke brings design and code together.
          </p>
          <SlideShow
            images={[
              `/assets/nav-link-previews/landing.png`,
              `/assets/nav-link-previews/skill.png`,
              `/assets/nav-link-previews/project.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/navbar.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>
          <p className="font-mono mb-2">
            My top personal and freelance projects - no filler, all killer.
          </p>
          <SlideShow
            images={[
              `/assets/nav-link-previews/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio - it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 02. Portfolio project
    id: "portfolio 2",
    category: "Portfolio",
    title: "Histoplay",
    src: "/assets/project/histoplay/1.png",
    screenshots: ["assets/project/histoplay/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node],
      devops:[],
      database:[PROJECT_SKILLS.firebase],
    },
    live: "https://histoplay.vercel.app/",
    github: "https://github.com/Saptamabar/HistoPlay",
    get content() {
      return (
      <div>
        <TypographyP className="font-mono text-muted-foreground">
          🇮🇩 Selamat datang di <span className="font-semibold text-primary">Histoplay</span>,
          platform pembelajaran sejarah Indonesia berbasis gamifikasi yang mengubah
          proses belajar menjadi pengalaman yang lebih interaktif, seru, dan penuh tantangan.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="mt-10 mb-4">
          Belajar Sejarah Jadi Lebih Menyenangkan
        </TypographyH3>

        <p className="font-mono leading-7 text-muted-foreground">
          Pernah merasa belajar sejarah hanya tentang menghafal tanggal dan nama tokoh?
          Kami juga pernah merasakannya. Histoplay hadir untuk mengubah cara belajar
          sejarah melalui pengalaman yang lebih visual, interaktif, dan menyenangkan.
          Dengan berbagai tantangan dan alur pembelajaran yang menarik, memahami
          perjalanan bangsa Indonesia menjadi jauh lebih mudah dan tidak membosankan.
        </p>

        <SlideShow
          images={[
            "/assets/project/histoplay/1.png",
            "/assets/project/histoplay/2.png",
            "/assets/project/histoplay/3.png",
            "/assets/project/histoplay/4.png",
            "/assets/project/histoplay/5.png",
            "/assets/project/histoplay/6.png",
          ]}
        />

        <TypographyH3 className="mt-10 mb-4">
          ✨ Fitur Unggulan
        </TypographyH3>

        <p className="font-mono leading-7 text-muted-foreground">
          Histoplay dirancang dengan antarmuka modern dan pengalaman belajar yang
          intuitif. Pengguna dapat menjelajahi materi sejarah, menyelesaikan berbagai
          tantangan, memperoleh pencapaian (achievement), serta menguji pemahaman
          melalui kuis interaktif yang dikemas seperti sebuah permainan.
        </p>
        <SlideShow
          images={[
            "/assets/nav-link-previews/histoplay/1.png",
          ]}
        />

        <TypographyH3 className="mt-10 mb-4">
          🎯 Tujuan Pengembangan
        </TypographyH3>

        <p className="font-mono leading-7 text-muted-foreground">
          Histoplay dikembangkan dengan harapan dapat meningkatkan minat masyarakat,
          khususnya generasi muda, terhadap sejarah Indonesia. Kami percaya bahwa
          belajar tidak harus membosankan. Dengan memadukan unsur edukasi dan
          gamifikasi, Histoplay menghadirkan pengalaman belajar yang lebih efektif,
          menyenangkan, dan mudah diingat.
        </p>

        <div className="mt-10 rounded-xl border bg-muted/30 p-6 text-center">
          <p className="font-mono text-lg font-semibold">
            "Sejarah bukan hanya untuk dihafal,
            tetapi untuk dipahami dan dialami."
          </p>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            — Histoplay
          </p>
        </div>
      </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio 3",
    category: "Portfolio",
    title: "Geogenz",
    src: "/assets/project/geogenz/1.png",
    screenshots: ["assets/project/geogenz/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
      devops:[],
      database:[ PROJECT_SKILLS.firebase,],
    },
    live: "https://geogenz.com",
    github: "https://github.com/af133/survey-jember",
    get content() {
      return (
      <div>
      <TypographyP className="font-mono text-muted-foreground">
        Selamat datang di <span className="font-semibold text-primary">GeoGenZ</span>,
        platform penelitian berbasis WebGIS yang dikembangkan untuk menganalisis
        persepsi Generasi Z terhadap sektor pertanian di Kabupaten Jember. Platform
        ini mengintegrasikan survei digital, visualisasi data spasial, dashboard
        analitik, serta peta interaktif untuk mendukung pengambilan keputusan
        berbasis geospasial.
      </TypographyP>

      <ProjectsLinks live={this.live} repo={this.github} />

      <TypographyH3 className="mt-10 mb-4">
        🌍 Platform Penelitian Berbasis WebGIS
      </TypographyH3>

      <p className="font-mono leading-7 text-muted-foreground">
        GeoGenZ merupakan bagian dari penelitian
        <span className="font-semibold">
          {" "}
          "Model Geoinformatika untuk Analisis Persepsi Generasi Z terhadap Potensi
          Wilayah Lokal Kabupaten Jember"
        </span>.
        Platform ini dirancang untuk mengumpulkan data survei geotagged,
        memvisualisasikan persebaran responden pada peta interaktif, serta
        mengintegrasikan data sosial dan spasial dalam satu sistem berbasis web.
      </p>

      <SlideShow
        images={[
          "/assets/project/geogenz/1.png",
          "/assets/project/geogenz/2.png",
          "/assets/project/geogenz/3.png",
          "/assets/project/geogenz/4.png",
          "/assets/project/geogenz/5.png",
          "/assets/project/geogenz/6.png",
        ]}
      />

      <TypographyH3 className="mt-10 mb-4">
        🚀 Fitur Utama
      </TypographyH3>

      <p className="font-mono leading-7 text-muted-foreground">
        Platform ini menyediakan beberapa fitur utama untuk mendukung proses
        penelitian, di antaranya:
      </p>

      <ul className="mt-4 space-y-3 font-mono text-muted-foreground list-disc pl-6">
        <li>📝 Survei digital berbasis lokasi (Geotagged Survey).</li>
        <li>🗺️ Interactive Map menggunakan Leaflet dan OpenStreetMap.</li>
        <li>📊 Dashboard analitik untuk visualisasi hasil survei.</li>
        <li>📈 Grafik statistik menggunakan Chart.js.</li>
        <li>👨‍💼 Dashboard Admin untuk mengelola responden dan data penelitian.</li>
        <li>📍 Visualisasi persebaran responden dan analisis spasial.</li>
      </ul>
      <TypographyH3 className="mt-10 mb-4">
        🎯 Kontribusi Saya
      </TypographyH3>

      <p className="font-mono leading-7 text-muted-foreground">
        Sebagai <span className="font-semibold">Asisten Peneliti</span>, saya
        berkontribusi dalam merancang dan mengembangkan keseluruhan platform
        GeoGenZ, mulai dari implementasi antarmuka pengguna, dashboard admin,
        sistem survei, integrasi Firebase, visualisasi data, hingga pengembangan
        peta interaktif berbasis WebGIS untuk mendukung analisis penelitian.
      </p>

      <div className="mt-10 rounded-xl border bg-muted/30 p-6 text-center">
        <p className="font-mono text-lg font-semibold">
          "Menghubungkan data sosial dan informasi geospasial menjadi insight yang
          bermanfaat melalui teknologi WebGIS."
        </p>

        <p className="mt-2 font-mono text-sm text-muted-foreground">
          — GeoGenZ Research Platform
        </p>
      </div>
      </div>
      );
    },
  },
  { // 04. Portfolio project
    id: "portfolio 4",
    category: "Portfolio",
    title: "Trustchain AI",
    src: "/assets/project/trustchain/1.png",
    screenshots: ["assets/project/trustchain/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.vite,
        
      ],
      backend: [PROJECT_SKILLS.golang,],
      devops:[PROJECT_SKILLS.docker],
      database: [PROJECT_SKILLS.firebase,],

    },
    live: "https://trustchain.com",
    github: "https://github.com/af133/",
    get content() {
      return (
      <div>
      <TypographyP className="font-mono text-muted-foreground">
        Selamat datang di <span className="font-semibold text-primary">TrustChain</span>,
        platform deteksi penipuan transaksi keuangan secara real-time yang
        menggabungkan kecerdasan buatan, Explainable AI, dan teknologi blockchain
        untuk membantu mengidentifikasi aktivitas transaksi yang mencurigakan secara
        cepat, akurat, dan transparan.
      </TypographyP>

      <ProjectsLinks live={this.live} repo={this.github} />

      <TypographyH3 className="mt-10 mb-4">
        🛡️ Deteksi Fraud Berbasis AI
      </TypographyH3>

      <p className="font-mono leading-7 text-muted-foreground">
        TrustChain memanfaatkan kombinasi model <span className="font-semibold">LSTM (Long Short-Term Memory)</span>
        dan <span className="font-semibold">Isolation Forest</span> untuk mendeteksi
        anomali pada transaksi keuangan secara real-time. Selain menghasilkan
        prediksi, sistem juga menyediakan penjelasan terhadap setiap keputusan
        menggunakan <span className="font-semibold">SHAP (SHapley Additive Explanations)</span>,
        sehingga proses deteksi menjadi lebih transparan dan mudah dipahami.
      </p>

      <SlideShow
        images={[
          "/assets/project/trustchain/1.png",
          "/assets/project/trustchain/2.png",
          "/assets/project/trustchain/3.png",
          "/assets/project/trustchain/4.png",
          "/assets/project/trustchain/5.png",
          "/assets/project/trustchain/6.png",
          "/assets/project/trustchain/7.png"
        ]}
      />

      <TypographyH3 className="mt-10 mb-4">
        🚀 Fitur Utama
      </TypographyH3>

      <ul className="mt-4 space-y-3 font-mono text-muted-foreground list-disc pl-6">
        <li>⚡ Deteksi fraud transaksi secara real-time.</li>
        <li>🧠 Ensemble Machine Learning menggunakan LSTM dan Isolation Forest.</li>
        <li>🔍 Explainable AI dengan SHAP untuk menjelaskan hasil prediksi.</li>
        <li>⛓️ Blockchain audit trail untuk menjaga integritas riwayat transaksi.</li>
        <li>📊 Dashboard analitik untuk monitoring transaksi dan aktivitas fraud.</li>
        <li>🚨 Sistem notifikasi terhadap transaksi berisiko tinggi.</li>
      </ul>

      <TypographyH3 className="mt-10 mb-4">
        💻 Teknologi yang Digunakan
      </TypographyH3>

      <p className="font-mono leading-7 text-muted-foreground">
        TrustChain dikembangkan dengan memanfaatkan teknologi modern pada bidang
        pengembangan web, machine learning, explainable AI, dan blockchain untuk
        menghasilkan sistem yang aman, cepat, dan mudah dianalisis.
      </p>

      <TypographyH3 className="mt-10 mb-4">
        🎯 Tujuan Pengembangan
      </TypographyH3>

      <p className="font-mono leading-7 text-muted-foreground">
        Tujuan utama TrustChain adalah membantu institusi keuangan mendeteksi
        transaksi yang berpotensi fraud secara lebih dini. Dengan mengombinasikan
        kecerdasan buatan, interpretabilitas model, dan pencatatan berbasis
        blockchain, platform ini mampu meningkatkan keamanan transaksi sekaligus
        membangun kepercayaan terhadap proses pengambilan keputusan sistem.
      </p>

      <div className="mt-10 rounded-xl border bg-muted/30 p-6 text-center">
        <p className="font-mono text-lg font-semibold">
          "Mendeteksi fraud secara cerdas, menjelaskan setiap keputusan, dan
          menjaga integritas data melalui teknologi blockchain."
        </p>

        <p className="mt-2 font-mono text-sm text-muted-foreground">
          — TrustChain
        </p>
      </div>
    </div>
      );
    },
  },
  { // 05. Portfolio project
    id: "portfolio 5",
    category: "Portfolio",
    title: "Rancangin Digital",
    src: "/assets/project/rancangindigital/1.png",
    screenshots: ["assets/project/rancangindigital/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
      ],
      devops:[],
      database:[]
    },
    live: "https://rancangindigital.my.id",
    github: "https://github.com/af133/",
    get content() {
      return (
     <div>
        <TypographyP className="font-mono text-muted-foreground">
          Selamat datang di <span className="font-semibold text-primary">Rancangin Digital</span>,
          sebuah website company profile modern yang dilengkapi dengan Content
          Management System (CMS) untuk memudahkan pengelolaan konten. Website ini
          dirancang dengan tampilan yang profesional, responsif, dan mendukung
          dua bahasa (Indonesia & English) sehingga dapat menjangkau audiens yang
          lebih luas.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="mt-10 mb-4">
          🌐 Website Company Profile Modern
        </TypographyH3>

        <p className="font-mono leading-7 text-muted-foreground">
          RancanginDigital menghadirkan website company profile yang berfokus pada
          pengalaman pengguna dan kemudahan pengelolaan konten. Seluruh informasi
          perusahaan dapat diperbarui melalui dashboard CMS tanpa perlu melakukan
          perubahan langsung pada source code.
        </p>

        <SlideShow
          images={[
            "/assets/project/rancangindigital/1.png",
            "/assets/project/rancangindigital/2.png",
            "/assets/project/rancangindigital/3.png",
            "/assets/project/rancangindigital/4.png",
            "/assets/project/rancangindigital/5.png",
            "/assets/project/rancangindigital/6.png",
            "/assets/project/rancangindigital/7.png",
          ]}
        />

        <TypographyH3 className="mt-10 mb-4">
          🚀 Fitur Utama
        </TypographyH3>

        <ul className="mt-4 space-y-3 font-mono text-muted-foreground list-disc pl-6">
          <li>🏠 Halaman Beranda yang modern dan responsif.</li>
          <li>💼 Halaman Layanan untuk menampilkan jasa yang ditawarkan.</li>
          <li>📂 Portfolio untuk menampilkan hasil pekerjaan perusahaan.</li>
          <li>🏢 Halaman Tentang Kami yang berisi profil perusahaan.</li>
          <li>⭐ Testimoni pelanggan sebagai bukti kepercayaan.</li>
          <li>🌍 Dukungan multi-bahasa (Bahasa Indonesia & English).</li>
          <li>🛠️ Dashboard CMS untuk mengelola seluruh konten website.</li>
          <li>📱 Tampilan responsif di desktop, tablet, dan mobile.</li>
        </ul>
        <TypographyH3 className="mt-10 mb-4">
          🎯 Tujuan Pengembangan
        </TypographyH3>

        <p className="font-mono leading-7 text-muted-foreground">
          RancanginDigital dikembangkan untuk membantu perusahaan membangun identitas
          digital yang profesional melalui website company profile yang informatif,
          mudah dikelola, serta mampu menjangkau pengunjung dari berbagai negara
          melalui dukungan dua bahasa.
        </p>

        <div className="mt-10 rounded-xl border bg-muted/30 p-6 text-center">
          <p className="font-mono text-lg font-semibold">
            "Membangun identitas digital yang profesional melalui website modern,
            responsif, dan mudah dikelola."
          </p>

          <p className="mt-2 font-mono text-sm text-muted-foreground">
            — RancanginDigital
          </p>
        </div>
      </div>
      );
    },
  },
];
export default projects;
