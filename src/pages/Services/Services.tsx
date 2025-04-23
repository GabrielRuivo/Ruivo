"use client";

import { useState, Fragment } from "react";
import { FaReact, FaAngular, FaAws, FaDocker, FaNodeJs, FaCalendar, FaBriefcase } from "react-icons/fa";
import { SiNestjs, SiMysql, SiDotnet, SiRabbitmq } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IconType } from "react-icons";

export default function Services() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  const experiences = [
    {
      company: "Férias & Co.",
      period: "abril de 2024 - Present (1 ano 1 mês)",
      role: "Desenvolvedor de software",
      description: "Aqui no Férias & Co. tive a oportunidade de atuar com foco no desenvolvimento e aprimoramento do aplicativo mobile em React Native. Participei ativamente de todo o ciclo de lançamento do app, desde a refatoração de código legado e correção de bugs até a publicação nas lojas App Store e Google Play. Além disso, colaborei em projetos utilizando C#/.NET e Angular, ampliando minha experiência com integrações de serviços de turismo e otimização de fluxos de dados.",
      descriptionEn: "At Férias & Co., I had the opportunity to focus on developing and enhancing the mobile application in React Native. I actively participated in the entire app launch cycle, from refactoring legacy code and fixing bugs to publishing on the App Store and Google Play. Additionally, I collaborated on projects using C#/.NET and Angular, expanding my experience with tourism service integrations and data flow optimization.",
      technologies: ["React Native", "Angular", ".NET"],
      techIcons: [TbBrandReactNative, FaAngular, SiDotnet] as IconType[],
      techColors: ["bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300", "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300", "bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-300"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      company: "Bankme",
      period: "outubro de 2022 - maio de 2024 (1 ano 8 meses)",
      role: "Tech Lead",
      description: "Na Bankme, fui promovido a Tech Lead após demonstrar empenho no produto de crédito e eficiência operacional, além de minha capacidade de liderança. Tive o privilégio de montar e liderar duas squads, garantindo a eficiência das entregas e recebendo feedbacks positivos da liderança sobre meu desempenho. Além de evoluir tecnicamente, desenvolvi habilidades essenciais como gestão de equipe, tomada de decisão sob pressão, alinhamento de prazos e expectativas com stakeholders. Essa experiência consolidou minha paixão por liderança técnica e aprimorou minha visão estratégica no desenvolvimento de produtos.",
      descriptionEn: "At Bankme, I was promoted to Tech Lead after demonstrating commitment to the credit product and operational efficiency, as well as my leadership capabilities. I had the privilege of building and leading two squads, ensuring delivery efficiency and receiving positive feedback from leadership about my performance. Beyond technical growth, I developed essential skills such as team management, decision-making under pressure, and aligning deadlines and expectations with stakeholders. This experience consolidated my passion for technical leadership and enhanced my strategic vision in product development.",
      technologies: ["React", "NestJS", "MySQL"],
      techIcons: [FaReact, SiNestjs, SiMysql] as IconType[],
      techColors: ["bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300", "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300", "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      company: "Bankme",
      period: "março de 2022 - novembro de 2022 (9 meses)",
      role: "Desenvolvedor full stack pleno",
      description: "Na Bankme, ingressei como Desenvolvedor Pleno, tendo meu primeiro contato com o ecossistema de Startups, Fintechs, KPI's, Securitização e Eficiência Operacional. Aprendi e apliquei tecnologias como AWS, GCP, Docker, RabbitMQ, NestJS e Angular, ampliando minha expertise em arquitetura de software. Aprofundei-me em princípios como Clean Code, SOLID, TDD e DDD, elevando a qualidade das entregas. Trabalhei em um ambiente dinâmico e inovador, focado em alta performance e escalabilidade. Essa experiência fortaleceu minha visão estratégica e minha capacidade de desenvolver soluções robustas.",
      descriptionEn: "At Bankme, I joined as a Senior Developer, having my first contact with the ecosystem of Startups, Fintechs, KPIs, Securitization, and Operational Efficiency. I learned and applied technologies such as AWS, GCP, Docker, RabbitMQ, NestJS, and Angular, expanding my expertise in software architecture. I deepened my understanding of principles such as Clean Code, SOLID, TDD, and DDD, elevating the quality of deliveries. I worked in a dynamic and innovative environment, focused on high performance and scalability. This experience strengthened my strategic vision and my ability to develop robust solutions.",
      technologies: ["Angular", "NestJS", "AWS", "Docker", "RabbitMQ"],
      techIcons: [FaAngular, SiNestjs, FaAws, FaDocker, SiRabbitmq] as IconType[],
      techColors: ["bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300", "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300", "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300", "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300", "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      company: "Luby Software",
      period: "junho de 2021 - março de 2022 (10 meses)",
      role: "Desenvolvedor de software júnior",
      description: "Atuando como Desenvolvedor Júnior na Luby, participei de diversos projetos, como tótens para pedidos de pizza, apps de leitura técnica de gás e CRMs para seguradoras e previdência. Foi meu primeiro contato trabalhando em squads ágeis, onde além do desenvolvimento, apoiei o líder técnico na condução dos projetos. Recebi feedbacks positivos sobre minhas soft skills, o que despertou meu interesse em me tornar Tech Lead. Essa experiência fortaleceu minhas habilidades técnicas e de liderança.",
      descriptionEn: "As a Junior Developer at Luby, I participated in various projects, such as pizza ordering kiosks, gas technical reading apps, and CRMs for insurance and pension companies. It was my first experience working in agile squads, where in addition to development, I supported the technical leader in managing projects. I received positive feedback on my soft skills, which sparked my interest in becoming a Tech Lead. This experience strengthened my technical and leadership skills.",
      technologies: ["React", "React Native", "NestJS"],
      techIcons: [FaReact, TbBrandReactNative, SiNestjs] as IconType[],
      techColors: ["bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300", "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300", "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"],
      color: "from-green-500 to-teal-500"
    },
    {
      company: "Luby Software",
      period: "outubro de 2020 - junho de 2021 (9 meses)",
      role: "Trainee web developer",
      description: "Estagiei na LabLuby por 6 meses, onde aprendi JavaScript Vanilla, React Native, AdonisJS, React e Node.js, atuando no desenvolvimento full stack. Durante esse período, aprimorei boas práticas, versionamento com Git e consumo de APIs. Meu progresso me levou a ser efetivado como Desenvolvedor Júnior em apenas 4 meses no programa LabLuby. Foi uma experiência essencial para meu crescimento técnico e profissional.",
      descriptionEn: "I interned at LabLuby for 6 months, where I learned JavaScript Vanilla, React Native, AdonisJS, React, and Node.js, working in full stack development. During this period, I improved best practices, versioning with Git, and API consumption. My progress led me to be hired as a Junior Developer in just 4 months in the LabLuby program. It was an essential experience for my technical and professional growth.",
      technologies: ["React", "React Native", "Node.js"],
      techIcons: [FaReact, TbBrandReactNative, FaNodeJs] as IconType[],
      techColors: ["bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300", "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300", "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"],
      color: "from-yellow-500 to-amber-600"
    },
  ];

  // Agrupar experiências por empresa
  const groupedExperiences = experiences.reduce((acc, experience) => {
    const existingCompany = acc.find(group => group.companyName === experience.company);
    
    if (existingCompany) {
      existingCompany.experiences.push(experience);
    } else {
      acc.push({
        companyName: experience.company,
        companyColor: experience.color,
        experiences: [experience]
      });
    }
    
    return acc;
  }, [] as { companyName: string; companyColor: string; experiences: typeof experiences }[]);

  return (
    <div 
      id="third-section" 
      className="
        flex 
        flex-col
        items-center 
        w-full 
        min-h-screen 
        py-16
        bg-bg-primary
        dark:bg-bg-primary-dark
        dark:text-text-primary-dark
        transition-colors
        duration-200
      "
    >
      <div className="max-w-7xl w-full px-8">
        <h1 className="text-4xl font-semibold mb-3">
          <span
            className="
              bg-clip-text
              text-gradient 
              bg-gradient-to-r from-pink-hover to-light-orange-hover
            "
          >
            Experiência Profissional
          </span>
        </h1>
        <h2 className="text-2xl font-medium mb-10 opacity-70 ml-10">Professional Experience</h2>

        <div className="relative timeline-container">
          {/* Linha do tempo vertical */}
          <div className="absolute left-0 md:left-[15%] w-px h-full bg-gray-300 dark:bg-gray-700 timeline-line" />

          <div className="space-y-12 relative">
            {groupedExperiences.map((company, companyIndex) => (
              <div 
                key={companyIndex}
                className="relative pl-8 md:pl-[calc(15%+2rem)]"
              >
                {/* Marcador da empresa na linha do tempo */}
                <div 
                  className={`absolute left-[-10px] md:left-[15%] w-5 h-5 rounded-full bg-gradient-to-r ${company.companyColor} translate-x-[-50%] z-10`}
                />

                <div 
                  className={`
                    bg-white dark:bg-bg-secondary-dark 
                    p-6 rounded-lg shadow-md 
                    transition-all duration-300 
                    hover:shadow-lg
                    border-l-4 bg-gradient-to-r ${company.companyColor} border-opacity-50
                    cursor-pointer
                  `}
                  onClick={() => expandedExperience === companyIndex ? setExpandedExperience(null) : setExpandedExperience(companyIndex)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-medium flex items-center">
                      {FaBriefcase({ className: "mr-2 text-pink-hover" })}
                      {company.companyName}
                    </h2>
                    <span className="text-sm font-medium text-pink-hover">
                      {expandedExperience === companyIndex ? 'Recolher' : 'Expandir'}
                    </span>
                  </div>

                  <div 
                    className={`
                      overflow-hidden transition-all duration-300 mt-4
                      ${expandedExperience === companyIndex ? 'max-h-[2000px]' : 'max-h-0'}
                    `}
                  >
                    <div className="space-y-8">
                      {company.experiences.map((experience, expIndex) => (
                        <div 
                          key={expIndex}
                          className={`
                            p-4 rounded-lg
                            ${expIndex !== company.experiences.length - 1 ? 'border-b dark:border-gray-700 pb-8' : ''}
                            relative
                          `}
                        >
                          {/* Conectores internos para múltiplas experiências */}
                          {expIndex !== company.experiences.length - 1 && (
                            <div className="absolute left-0 top-8 h-[calc(100%-2rem)] w-px bg-gray-200 dark:bg-gray-800" />
                          )}
                          
                          {/* Indicador de experiência */}
                          <div className="absolute left-0 top-8 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 -ml-1" />

                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="text-xl font-medium mb-2 pl-4">
                                {experience.role}
                              </h3>
                              <div className="flex items-center text-sm opacity-70">
                                {FaCalendar({ className: "mr-1 text-pink-hover" })}
                                <span>{experience.period}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-3 mb-4 pl-4">
                              {experience.technologies.map((tech, techIndex) => {
                                const IconComponent = experience.techIcons[techIndex];
                                return (
                                  <div 
                                    key={techIndex} 
                                    className={`flex items-center gap-1 px-3 py-2 ${experience.techColors[techIndex]} rounded-full transition-colors duration-200`}
                                  >
                                    {IconComponent && IconComponent({ className: "mr-1" })}
                                    <span className="text-sm font-medium">{tech}</span>
                                  </div>
                                );
                              })}
                            </div>
                            
                            <div className={`
                              pt-4 border-t dark:border-gray-800
                            `}>
                              <p className="text-base font-thin opacity-70">
                                🇧🇷 {experience.description}
                              </p>
                              <p className="text-base font-thin opacity-70 mt-4 border-t dark:border-gray-800 pt-4">
                                🇺🇸 {experience.descriptionEn}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}