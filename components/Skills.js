export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid md:grid-cols-2 md:gap-8">
        <div className="md:text-left">
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            I have a strong foundation in web development and a passion for creating beautiful, intuitive, and highly performant user experiences.
          </p>
          <div className="flex justify-center gap-4">
            <img height="170" src="https://github-readme-stats.vercel.app/api?username=Eko-347m4n&show_icons=true&theme=tokyonight&count_private=true&hide_border=true" />
            <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Eko-347m4n&layout=compact&theme=tokyonight&hide_border=true" />
          </div>
        </div>

        <div>
          <img src="/assets/img/work3.jpg" alt="" className="skills__img rounded-lg shadow-lg" />
        </div>
      </div>

      <div>
        <div align="center">
          <a href="https://www.hackerrank.com/certificates/iframe/ed175df9149a" target="_blank" rel="noopener noreferrer">
            <img src="asset/problem_solving_basic_certificate_page_1.jpg" alt="HackerRank: Problem Solving (Basic)" width="300" />
          </a>
          <a href="https://www.hackerrank.com/certificates/iframe/5c2467f5d84b" target="_blank" rel="noopener noreferrer">
            <img src="asset/python_basic_certificate_page_1.jpg" alt="HackerRank: Python (Basic)" width="300" />
          </a>
          <a href="https://www.hackerrank.com/certificates/iframe/6f6662645202" target="_blank" rel="noopener noreferrer">
            <img src="asset/javascript_basic_certificate_page_1.jpg" alt="HackerRank: JavaScript (Basic)" width="300" />
          </a>
          <a href="https://www.hackerrank.com/certificates/iframe/303e6bf49a19" target="_blank" rel="noopener noreferrer">
            <img src="asset/r_basic_certificate_page_1.jpg" alt="HackerRank: R (Basic)" width="300" />
          </a>
        </div>
      </div>
    </section>
  )
}

