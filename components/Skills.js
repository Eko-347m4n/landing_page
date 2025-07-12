import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('basic');

  const certificates = {
    basic: [
      { href: "https://www.hackerrank.com/certificates/iframe/ed175df9149a", imgSrc: "/assets/img/problem_solving_basic_certificate_page_1.jpg", title: "Problem Solving (Basic)" },
      { href: "https://www.hackerrank.com/certificates/iframe/5c2467f5d84b", imgSrc: "/assets/img/python_basic_certificate_page_1.jpg", title: "Python (Basic)" },
      { href: "https://www.hackerrank.com/certificates/iframe/6f6662645202", imgSrc: "/assets/img/javascript_basic_certificate_page_1.jpg", title: "JavaScript (Basic)" },
      { href: "https://www.hackerrank.com/certificates/iframe/303e6bf49a19", imgSrc: "/assets/img/r_basic_certificate_page_1.jpg", title: "R (Basic)" },
      { href: "https://www.hackerrank.com/certificates/iframe/961684d02fb5", imgSrc: "/assets/img/sql_basic certificate_page-0001.jpg", title: "SQL (Basic)" },
    ],
    intermediate: [
      { href: "https://www.hackerrank.com/certificates/iframe/3a787b57c031", imgSrc: "/assets/img/javascript_intermediate_certificate_page_1.jpg", title: "JavaScript (Intermediate)" },
      { href: "https://www.hackerrank.com/certificates/iframe/47ea5a71bee9", imgSrc: "/assets/img/rest_api_intermediate_certificate_page_1.jpg", title: "Rest API (Intermediate)" },
      { href: "https://www.hackerrank.com/certificates/iframe/47ea5a71bee9", imgSrc: "/assets/img/problem_solving_intermediate certificate_page_1.jpg", title: "Problem Solving (Intermediate)" },
      { href: "https://www.hackerrank.com/certificates/iframe/3c75c148d017", imgSrc: "/assets/img/sql_intermediate certificate_page-0001.jpg", title: "SQL (Intermediate)" },
    ],
    role: [
      { href: "https://www.hackerrank.com/certificates/iframe/69bdfce40d73", imgSrc: "/assets/img/frontend_developer_react certificate_page-0001.jpg", title: "Frontend Developer (React)" },
      { href: "https://www.hackerrank.com/certificates/iframe/e3be8601d008", imgSrc: "/assets/img/software_engineer certificate_page-0001.jpg", title: "Software Engineer" },
    ],
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills & Certifications</h2>

      <div className="skills__container container mx-auto px-6">
        <div className="text-center md:text-left">
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            I have a strong foundation in web development and a passion for creating beautiful, intuitive, and highly performant user experiences.
          </p>
          <div className="flex justify-center gap-4 my-8">
            <a href="https://github.com/Eko-347m4n/Eko-347m4n" target="_blank" rel="noopener noreferrer">
              <img height="170" src={`https://github-readme-stats.vercel.app/api?username=Eko-347m4n&show_icons=true&theme=tokyonight&count_private=true&hide_border=true&cache_bust=${new Date().getTime()}`} />
            </a>
            <a href="https://github.com/Eko-347m4n/Eko-347m4n" target="_blank" rel="noopener noreferrer">
              <img height="170" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Eko-347m4n&layout=compact&theme=tokyonight&hide_border=true&cache_bust=${new Date().getTime()}`} />
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center border-b border-gray-300 dark:border-gray-700">
            <button onClick={() => setActiveTab('basic')} className={`py-2 px-4 text-lg font-medium ${activeTab === 'basic' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>Basic</button>
            <button onClick={() => setActiveTab('intermediate')} className={`py-2 px-4 text-lg font-medium ${activeTab === 'intermediate' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>Intermediate</button>
            <button onClick={() => setActiveTab('role')} className={`py-2 px-4 text-lg font-medium ${activeTab === 'role' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>Role</button>
          </div>

          <div className="py-8">
            <div className="flex flex-wrap justify-center certificate-grid">
              {certificates[activeTab].map((cert, index) => (
                <a key={index} href={cert.href} target="_blank" rel="noopener noreferrer" className="work__item" style={{width: '300px'}}>
                  <img src={cert.imgSrc} alt={`HackerRank: ${cert.title}`} className="work__img-main" />
                  <div className="work__overlay">
                    <h3 className="work__title">{cert.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}