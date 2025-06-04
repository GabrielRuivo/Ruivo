'use client'

import React, { useState } from 'react'
import { FaReact, FaAngular, FaAws, FaDocker, FaNodeJs, FaCalendar, FaBriefcase } from 'react-icons/fa'
import { SiNestjs, SiMysql, SiDotnet, SiRabbitmq, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export default function Services () {
  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([0, 1, 2, 3]) // Todas as empresas expandidas por padrão

  const toggleExpand = (index: number) => {
    if (expandedExperiences.includes(index)) {
      setExpandedExperiences(expandedExperiences.filter((i: number) => i !== index))
    } else {
      setExpandedExperiences([...expandedExperiences, index])
    }
  }

  const experiences = [
    {
      company: 'Smart FIIs',
      period: 'janeiro de 2025 - Present',
      role: 'Fundador & Desenvolvedor',
      website: 'https://www.smartfiis.com/',
      description: 'Desenvolvi e lancei a Smart FIIs, uma plataforma SaaS dedicada à análise de Fundos de Investimento Imobiliário brasileiros. O projeto combina minha experiência em desenvolvimento web com meu interesse pelo mercado financeiro. Implementei recursos como análise comparativa de FIIs, carteiras de investimento personalizadas, simuladores e sistema de favoritos, proporcionando aos investidores ferramentas intuitivas para tomada de decisão. A plataforma atualiza diariamente dados de mais de 100 FIIs listados na B3, incluindo preços, indicadores e histórico de dividendos.',
      descriptionEn: 'I developed and launched Smart FIIs, a SaaS platform dedicated to analyzing Brazilian Real Estate Investment Funds. The project combines my web development experience with my interest in the financial market. I implemented features such as comparative FII analysis, personalized investment portfolios, simulators, and a favorites system, providing investors with intuitive decision-making tools. The platform daily updates data from over 100 FIIs listed on B3, including prices, indicators, and dividend history.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MySQL'],
      techIcons: [FaReact, SiTypescript, FaNodeJs, SiTailwindcss, SiMysql] as IconType[],
      techColors: ['bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300', 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300', 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300', 'bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300', 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      company: 'Férias & Co.',
      period: 'abril de 2024 - Present (1 ano 1 mês)',
      role: 'Desenvolvedor de software',
      website: 'https://ferias.co/',
      description: 'Aqui no Férias & Co. tive a oportunidade de atuar com foco no desenvolvimento e aprimoramento do aplicativo mobile em React Native. Participei ativamente de todo o ciclo de lançamento do app, desde a refatoração de código legado e correção de bugs até a publicação nas lojas App Store e Google Play. Além disso, colaborei em projetos utilizando C#/.NET e Angular, ampliando minha experiência com integrações de serviços de turismo e otimização de fluxos de dados.',
      descriptionEn: 'At Férias & Co., I had the opportunity to focus on developing and enhancing the mobile application in React Native. I actively participated in the entire app launch cycle, from refactoring legacy code and fixing bugs to publishing on the App Store and Google Play. Additionally, I collaborated on projects using C#/.NET and Angular, expanding my experience with tourism service integrations and data flow optimization.',
      technologies: ['React Native', 'Angular', '.NET'],
      techIcons: [TbBrandReactNative, FaAngular, SiDotnet] as IconType[],
      techColors: ['bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300', 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300', 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-300'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      company: 'Bankme',
      period: 'outubro de 2022 - maio de 2024 (1 ano 8 meses)',
      role: 'Tech Lead',
      website: 'https://bankme.tech/',
      description: 'Na Bankme, fui promovido a Tech Lead após demonstrar empenho no produto de crédito e eficiência operacional, além de minha capacidade de liderança. Tive o privilégio de montar e liderar duas squads, garantindo a eficiência das entregas e recebendo feedbacks positivos da liderança sobre meu desempenho. Além de evoluir tecnicamente, desenvolvi habilidades essenciais como gestão de equipe, tomada de decisão sob pressão, alinhamento de prazos e expectativas com stakeholders. Essa experiência consolidou minha paixão por liderança técnica e aprimorou minha visão estratégica no desenvolvimento de produtos.',
      descriptionEn: 'At Bankme, I was promoted to Tech Lead after demonstrating commitment to the credit product and operational efficiency, as well as my leadership capabilities. I had the privilege of building and leading two squads, ensuring delivery efficiency and receiving positive feedback from leadership about my performance. Beyond technical growth, I developed essential skills such as team management, decision-making under pressure, and aligning deadlines and expectations with stakeholders. This experience consolidated my passion for technical leadership and enhanced my strategic vision in product development.',
      technologies: ['Angular', 'NestJS', 'AWS', 'Docker', 'RabbitMQ'],
      techIcons: [FaAngular, SiNestjs, FaAws, FaDocker, SiRabbitmq] as IconType[],
      techColors: ['bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300', 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300', 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      company: 'Bankme',
      period: 'março de 2022 - novembro de 2022 (9 meses)',
      role: 'Desenvolvedor full stack pleno',
      website: 'https://bankme.tech/',
      description: "Na Bankme, ingressei como Desenvolvedor Pleno, tendo meu primeiro contato com o ecossistema de Startups, Fintechs, KPI's, Securitização e Eficiência Operacional. Aprendi e apliquei tecnologias como AWS, GCP, Docker, RabbitMQ, NestJS e Angular, ampliando minha expertise em arquitetura de software. Aprofundei-me em princípios como Clean Code, SOLID, TDD e DDD, elevando a qualidade das entregas. Trabalhei em um ambiente dinâmico e inovador, focado em alta performance e escalabilidade. Essa experiência fortaleceu minha visão estratégica e minha capacidade de desenvolver soluções robustas.",
      descriptionEn: 'At Bankme, I joined as a Senior Developer, having my first contact with the ecosystem of Startups, Fintechs, KPIs, Securitization, and Operational Efficiency. I learned and applied technologies such as AWS, GCP, Docker, RabbitMQ, NestJS, and Angular, expanding my expertise in software architecture. I deepened my understanding of principles such as Clean Code, SOLID, TDD, and DDD, elevating the quality of deliveries. I worked in a dynamic and innovative environment, focused on high performance and scalability. This experience strengthened my strategic vision and my ability to develop robust solutions.',
      technologies: ['Angular', 'NestJS', 'AWS', 'Docker', 'RabbitMQ'],
      techIcons: [FaAngular, SiNestjs, FaAws, FaDocker, SiRabbitmq] as IconType[],
      techColors: ['bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300', 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300', 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300', 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300', 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      company: 'Luby Software',
      period: 'junho de 2021 - março de 2022 (10 meses)',
      role: 'Desenvolvedor de software júnior',
      website: 'https://luby.com.br/',
      description: 'Atuando como Desenvolvedor Júnior na Luby, participei de diversos projetos, como tótens para pedidos de pizza, apps de leitura técnica de gás e CRMs para seguradoras e previdência. Foi meu primeiro contato trabalhando em squads ágeis, onde além do desenvolvimento, apoiei o líder técnico na condução dos projetos. Recebi feedbacks positivos sobre minhas soft skills, o que despertou meu interesse em me tornar Tech Lead. Essa experiência fortaleceu minhas habilidades técnicas e de liderança.',
      descriptionEn: 'As a Junior Developer at Luby, I participated in various projects, such as pizza ordering kiosks, gas technical reading apps, and CRMs for insurance and pension companies. It was my first experience working in agile squads, where in addition to development, I supported the technical leader in managing projects. I received positive feedback on my soft skills, which sparked my interest in becoming a Tech Lead. This experience strengthened my technical and leadership skills.',
      technologies: ['React', 'React Native', 'NestJS'],
      techIcons: [FaReact, TbBrandReactNative, SiNestjs] as IconType[],
      techColors: ['bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300', 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300', 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'],
      color: 'from-green-500 to-teal-500'
    },
    {
      company: 'Luby Software',
      period: 'outubro de 2020 - junho de 2021 (9 meses)',
      role: 'Trainee web developer',
      website: 'https://luby.com.br/',
      description: 'Estagiei na LabLuby por 6 meses, onde aprendi JavaScript Vanilla, React Native, AdonisJS, React e Node.js, atuando no desenvolvimento full stack. Durante esse período, aprimorei boas práticas, versionamento com Git e consumo de APIs. Meu progresso me levou a ser efetivado como Desenvolvedor Júnior em apenas 4 meses no programa LabLuby. Foi uma experiência essencial para meu crescimento técnico e profissional.',
      descriptionEn: 'I interned at LabLuby for 6 months, where I learned JavaScript Vanilla, React Native, AdonisJS, React, and Node.js, working in full stack development. During this period, I improved best practices, versioning with Git, and API consumption. My progress led me to be hired as a Junior Developer in just 4 months in the LabLuby program. It was an essential experience for my technical and professional growth.',
      technologies: ['React', 'React Native', 'Node.js'],
      techIcons: [FaReact, TbBrandReactNative, FaNodeJs] as IconType[],
      techColors: ['bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300', 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300', 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'],
      color: 'from-yellow-500 to-amber-600'
    }
  ]

  // Agrupar experiências por empresa
  const groupedExperiences = experiences.reduce<Array<{ companyName: string, companyColor: string, companyWebsite: string, experiences: typeof experiences }>>((acc, experience) => {
    const existingCompany = acc.find(group => group.companyName === experience.company)

    if (existingCompany != null) {
      existingCompany.experiences.push(experience)
    } else {
      acc.push({
        companyName: experience.company,
        companyColor: experience.color,
        companyWebsite: experience.website,
        experiences: [experience]
      })
    }

    return acc
  }, [])

  return (
    <div
      id="third-section"
      className="
        flex
        flex-col
        items-center
        w-full
        min-h-screen
        py-8 sm:py-12 lg:py-16
        px-4 sm:px-6 lg:px-8
        bg-bg-primary
        dark:bg-bg-primary-dark
        dark:text-text-primary-dark
        transition-colors
        duration-200
      "
    >
      <div className="max-w-7xl w-full">
        <div className="text-center sm:text-left mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3">
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
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium opacity-70 sm:ml-10">Professional Experience</h2>
        </div>

        <div className="relative">
          {/* Linha do tempo vertical - oculta em mobile */}
          <div className="hidden md:block absolute left-8 w-px h-full bg-gray-300 dark:bg-gray-700" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {groupedExperiences.map((company, companyIndex) => (
              <div
                key={companyIndex}
                className="relative md:pl-20"
              >
                {/* Marcador da empresa na linha do tempo - apenas desktop */}
                <div className="hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r bg-gray-400 dark:bg-gray-600" />

                <div
                  className={`
                    bg-white dark:bg-bg-secondary-dark 
                    p-4 sm:p-6 rounded-lg shadow-md 
                    transition-all duration-300 
                    hover:shadow-lg
                    border-l-4 border-gray-300 dark:border-gray-600
                    cursor-pointer
                    w-full
                  `}
                  onClick={() => { toggleExpand(companyIndex) }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                    <h2 className="text-xl sm:text-2xl font-medium flex items-center flex-wrap">
                      {React.createElement(FaBriefcase as any, { className: 'mr-2 text-pink-hover flex-shrink-0' })}
                      <a
                        href={company.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-hover transition-colors duration-200 break-words"
                        onClick={(e) => { e.stopPropagation() }}
                      >
                        {company.companyName}
                      </a>
                    </h2>
                    <span className="text-sm font-medium text-pink-hover self-start sm:self-center">
                      {expandedExperiences.includes(companyIndex) ? 'Recolher' : 'Expandir'}
                    </span>
                  </div>

                  <div
                    className={`
                      overflow-hidden transition-all duration-300 mt-4
                      ${expandedExperiences.includes(companyIndex) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="space-y-6 sm:space-y-8">
                      {company.experiences.map((experience, expIndex) => (
                        <div
                          key={expIndex}
                          className={`
                            p-2 sm:p-4 rounded-lg
                            ${expIndex !== company.experiences.length - 1 ? 'border-b dark:border-gray-700 pb-6 sm:pb-8' : ''}
                            relative
                          `}
                        >
                          {/* Conectores internos para múltiplas experiências - apenas desktop */}
                          {expIndex !== company.experiences.length - 1 && (
                            <div className="hidden sm:block absolute left-0 top-8 h-[calc(100%-2rem)] w-px bg-gray-200 dark:bg-gray-800" />
                          )}

                          {/* Indicador de experiência - apenas desktop */}
                          <div className="hidden sm:block absolute left-0 top-8 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 -ml-1" />

                          <div className="w-full">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-4 mb-4">
                              <h3 className="text-lg sm:text-xl font-medium sm:pl-4">
                                {experience.role}
                              </h3>
                              <div className="flex items-center text-xs sm:text-sm opacity-70 sm:pl-4 lg:pl-0">
                                {React.createElement(FaCalendar as any, { className: 'mr-1 text-pink-hover flex-shrink-0' })}
                                <span className="break-words">{experience.period}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:pl-4">
                              {experience.technologies.map((tech, techIndex) => {
                                const IconComponent = experience.techIcons[techIndex]
                                return (
                                  <div
                                    key={techIndex}
                                    className={`
                                      flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 
                                      ${experience.techColors[techIndex]} 
                                      rounded-full transition-colors duration-200
                                      text-xs sm:text-sm
                                    `}
                                  >
                                    {React.createElement(IconComponent as any, { className: 'w-3 h-3 sm:w-4 sm:h-4' })}
                                    <span className="font-medium whitespace-nowrap">{tech}</span>
                                  </div>
                                )
                              })}
                            </div>

                            <div className="pt-4 border-t dark:border-gray-800 space-y-4">
                              <div>
                                <div className="flex items-center mb-2">
                                  <span className="text-lg mr-2">🇧🇷</span>
                                  <span className="text-sm font-medium opacity-80">Português</span>
                                </div>
                                <p className="text-sm sm:text-base font-thin opacity-70 leading-relaxed">
                                  {experience.description}
                                </p>
                              </div>

                              <div className="border-t dark:border-gray-800 pt-4">
                                <div className="flex items-center mb-2">
                                  <span className="text-lg mr-2">🇺🇸</span>
                                  <span className="text-sm font-medium opacity-80">English</span>
                                </div>
                                <p className="text-sm sm:text-base font-thin opacity-70 leading-relaxed">
                                  {experience.descriptionEn}
                                </p>
                              </div>
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
