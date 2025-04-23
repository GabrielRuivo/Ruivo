"use client";

export default function Services() {
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
        <h2 className="text-2xl font-medium mb-10 opacity-70">Professional Experience</h2>

        <div className="space-y-12">
          {/* Férias & Co. */}
          <div className="bg-white dark:bg-bg-secondary-dark p-8 rounded-lg shadow-md transition-colors duration-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-medium">Férias & Co.</h2>
              <span className="text-sm opacity-70">abril de 2024 - Present (1 ano 1 mês)</span>
            </div>
            <h3 className="text-xl mb-2">Desenvolvedor de software</h3>
            <p className="text-base font-thin opacity-70">
              Aqui no Férias & Co. tive a oportunidade de atuar com foco no
              desenvolvimento e aprimoramento do aplicativo mobile em React Native.
              Participei ativamente de todo o ciclo de lançamento do app, desde a
              refatoração de código legado e correção de bugs até a publicação nas
              lojas App Store e Google Play. Além disso, colaborei em projetos utilizando
              C#/.NET e Angular, ampliando minha experiência com integrações de serviços
              de turismo e otimização de fluxos de dados.
            </p>
            <p className="text-base font-thin opacity-70 mt-4 border-t dark:border-gray-900 pt-4">
              At Férias & Co., I had the opportunity to focus on developing and enhancing the mobile application in React Native.
              I actively participated in the entire app launch cycle, from refactoring legacy code and fixing bugs to publishing on
              the App Store and Google Play. Additionally, I collaborated on projects using C#/.NET and Angular, expanding my experience
              with tourism service integrations and data flow optimization.
            </p>
          </div>

          {/* Bankme - Tech Lead */}
          <div className="bg-white dark:bg-bg-secondary-dark p-8 rounded-lg shadow-md transition-colors duration-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-medium">Bankme</h2>
              <span className="text-sm opacity-70">outubro de 2022 - maio de 2024 (1 ano 8 meses)</span>
            </div>
            <h3 className="text-xl mb-2">Tech Lead</h3>
            <p className="text-base font-thin opacity-70">
              Na Bankme, fui promovido a Tech Lead após demonstrar empenho no
              produto de crédito e eficiência operacional, além de minha capacidade de
              liderança. Tive o privilégio de montar e liderar duas squads, garantindo a
              eficiência das entregas e recebendo feedbacks positivos da liderança sobre
              meu desempenho. Além de evoluir tecnicamente, desenvolvi habilidades
              essenciais como gestão de equipe, tomada de decisão sob pressão,
              alinhamento de prazos e expectativas com stakeholders. Essa experiência
              consolidou minha paixão por liderança técnica e aprimorou minha visão
              estratégica no desenvolvimento de produtos.
            </p>
            <p className="text-base font-thin opacity-70 mt-4 border-t dark:border-gray-900 pt-4">
              At Bankme, I was promoted to Tech Lead after demonstrating commitment to the credit product and operational efficiency,
              as well as my leadership capabilities. I had the privilege of building and leading two squads, ensuring delivery efficiency
              and receiving positive feedback from leadership about my performance. Beyond technical growth, I developed essential skills
              such as team management, decision-making under pressure, and aligning deadlines and expectations with stakeholders.
              This experience consolidated my passion for technical leadership and enhanced my strategic vision in product development.
            </p>
          </div>

          {/* Bankme - Desenvolvedor full stack pleno */}
          <div className="bg-white dark:bg-bg-secondary-dark p-8 rounded-lg shadow-md transition-colors duration-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-medium">Bankme</h2>
              <span className="text-sm opacity-70">março de 2022 - novembro de 2022 (9 meses)</span>
            </div>
            <h3 className="text-xl mb-2">Desenvolvedor full stack pleno</h3>
            <p className="text-base font-thin opacity-70">
              Na Bankme, ingressei como Desenvolvedor Pleno, tendo meu primeiro
              contato com o ecossistema de Startups, Fintechs, KPI's, Securitização e
              Eficiência Operacional. Aprendi e apliquei tecnologias como AWS, GCP,
              Docker, RabbitMQ, NestJS e Angular, ampliando minha expertise em
              arquitetura de software. Aprofundei-me em princípios como Clean Code,
              SOLID, TDD e DDD, elevando a qualidade das entregas. Trabalhei em um
              ambiente dinâmico e inovador, focado em alta performance e escalabilidade.
              Essa experiência fortaleceu minha visão estratégica e minha capacidade de
              desenvolver soluções robustas.
            </p>
            <p className="text-base font-thin opacity-70 mt-4 border-t dark:border-gray-900 pt-4">
              At Bankme, I joined as a Senior Developer, having my first contact with the ecosystem of Startups, Fintechs, KPIs,
              Securitization, and Operational Efficiency. I learned and applied technologies such as AWS, GCP, Docker, RabbitMQ,
              NestJS, and Angular, expanding my expertise in software architecture. I deepened my understanding of principles such
              as Clean Code, SOLID, TDD, and DDD, elevating the quality of deliveries. I worked in a dynamic and innovative environment,
              focused on high performance and scalability. This experience strengthened my strategic vision and my ability to develop
              robust solutions.
            </p>
          </div>

          {/* Luby Software - Desenvolvedor de software júnior */}
          <div className="bg-white dark:bg-bg-secondary-dark p-8 rounded-lg shadow-md transition-colors duration-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-medium">Luby Software</h2>
              <span className="text-sm opacity-70">junho de 2021 - março de 2022 (10 meses)</span>
            </div>
            <h3 className="text-xl mb-2">Desenvolvedor de software júnior</h3>
            <p className="text-base font-thin opacity-70">
              Atuando como Desenvolvedor Júnior na Luby, participei de diversos projetos,
              como tótens para pedidos de pizza, apps de leitura técnica de gás e CRMs
              para seguradoras e previdência. Foi meu primeiro contato trabalhando em
              squads ágeis, onde além do desenvolvimento, apoiei o líder técnico na
              condução dos projetos. Recebi feedbacks positivos sobre minhas soft skills,
              o que despertou meu interesse em me tornar Tech Lead. Essa experiência
              fortaleceu minhas habilidades técnicas e de liderança.
            </p>
            <p className="text-base font-thin opacity-70 mt-4 border-t dark:border-gray-900 pt-4">
              As a Junior Developer at Luby, I participated in various projects, such as pizza ordering kiosks, gas technical reading apps,
              and CRMs for insurance and pension companies. It was my first experience working in agile squads, where in addition to
              development, I supported the technical leader in managing projects. I received positive feedback on my soft skills,
              which sparked my interest in becoming a Tech Lead. This experience strengthened my technical and leadership skills.
            </p>
          </div>

          {/* Luby Software - Trainee web developer */}
          <div className="bg-white dark:bg-bg-secondary-dark p-8 rounded-lg shadow-md transition-colors duration-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-medium">Luby Software</h2>
              <span className="text-sm opacity-70">outubro de 2020 - junho de 2021 (9 meses)</span>
            </div>
            <h3 className="text-xl mb-2">Trainee web developer</h3>
            <p className="text-base font-thin opacity-70">
              Estagiei na LabLuby por 6 meses, onde aprendi JavaScript Vanilla, React
              Native, AdonisJS, React e Node.js, atuando no desenvolvimento full
              stack. Durante esse período, aprimorei boas práticas, versionamento com
              Git e consumo de APIs. Meu progresso me levou a ser efetivado como
              Desenvolvedor Júnior em apenas 4 meses no programa LabLuby. Foi uma
              experiência essencial para meu crescimento técnico e profissional.
            </p>
            <p className="text-base font-thin opacity-70 mt-4 border-t dark:border-gray-900 pt-4">
              I interned at LabLuby for 6 months, where I learned JavaScript Vanilla, React Native, AdonisJS, React, and Node.js,
              working in full stack development. During this period, I improved best practices, versioning with Git, and API consumption.
              My progress led me to be hired as a Junior Developer in just 4 months in the LabLuby program. It was an essential experience
              for my technical and professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}