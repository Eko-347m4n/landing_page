export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid container mx-auto px-6 md:grid-cols-2 md:gap-8">
        <div className="md:text-left">
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            I have a strong foundation in web development and a passion for creating beautiful, intuitive, and highly performant user experiences.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Eko-347m4n/Eko-347m4n" target="_blank" rel="noopener noreferrer">
              <img height="170" src={`https://github-readme-stats.vercel.app/api?username=Eko-347m4n&show_icons=true&theme=tokyonight&count_private=true&hide_border=true&cache_bust=${new Date().getTime()}`} />
            </a>
            <a href="https://github.com/Eko-347m4n/Eko-347m4n" target="_blank" rel="noopener noreferrer">
              <img height="170" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Eko-347m4n&layout=compact&theme=tokyonight&hide_border=true&cache_bust=${new Date().getTime()}`} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        {/* Basic Certificates */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Basic Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <a href="https://www.hackerrank.com/certificates/iframe/ed175df9149a" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/problem_solving_basic_certificate_page_1.jpg" alt="HackerRank: Problem Solving (Basic)" className="mx-auto" width="300" />
              </a>
            </div>
            <div className="text-center">
              <a href="https://www.hackerrank.com/certificates/iframe/5c2467f5d84b" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/python_basic_certificate_page_1.jpg" alt="HackerRank: Python (Basic)" className="mx-auto" width="300" />
              </a>
            </div>
            <div className="text-center">
              <a href="https://www.hackerrank.com/certificates/iframe/6f6662645202" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/javascript_basic_certificate_page_1.jpg" alt="HackerRank: JavaScript (Basic)" className="mx-auto" width="300" />
              </a>
            </div>
            <div className="text-center">
              <a href="https://www.hackerrank.com/certificates/iframe/303e6bf49a19" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/r_basic_certificate_page_1.jpg" alt="HackerRank: R (Basic)" className="mx-auto" width="300" />
              </a>
            </div>
          </div>
        </div>

        {/* Intermediate Certificates */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Intermediate Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <a href="https://www.hackerrank.com/certificates/iframe/3a787b57c031" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/javascript_intermediate_certificate_page_1.jpg" alt="HackerRank: JavaScript (Intermediate)" className="mx-auto" width="300" />
              </a>
            </div>
            <div className="text-center">
              <a href="https.hackerrank.com/certificates/iframe/47ea5a71bee9" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/rest_api_intermediate_certificate_page_1.jpg" alt="HackerRank: Rest API (Intermediate)" className="mx-auto" width="300" />
              </a>
            </div>
            <div className="text-center">
              <a href="https://www.hackerrank.com/certificates/iframe/47ea5a71bee9" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/problem_solving_intermediate%20certificate_page_1.jpg" alt="HackerRank: Problem Solving (Intermediate)" className="mx-auto" width="300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}