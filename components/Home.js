export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container bd-grid container mx-auto px-6 md:grid md:grid-cols-2 md:gap-8">
        <div className="home__data text-center md:text-left md:order-1">
          <h1 className="home__title">
            Hi,<br />
            I'm <span className="home__title-color">Eko Aji</span><br />
            Web Developer
          </h1>
          <a href="#contact" className="button">Contact</a>
        </div>

        <div className="home__img mx-auto md:order-2">
          <svg className="home__blob max-w-full" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" masktype="alpha">
              <path d="M370.8,14.1C431.2,44,467.9,107.5,477.2,174.3C485.9,237.2,454.9,294.4,416.5,344.9C373.7,401.2,326.1,462.8,255.4,466.2C179.4,469.8,111.5,422.1,65.2,361.8C17.5,299.8,-17.2,219.6,9.2,145.9C34,76.6,114.9,54.7,184.1,29.5C245.8,6.9,311.9,-15,370.8,14.1Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M370.8,14.1C431.2,44,467.9,107.5,477.2,174.3C485.9,237.2,454.9,294.4,416.5,344.9C373.7,401.2,326.1,462.8,255.4,466.2C179.4,469.8,111.5,422.1,65.2,361.8C17.5,299.8,-17.2,219.6,9.2,145.9C34,76.6,114.9,54.7,184.1,29.5C245.8,6.9,311.9,-15,370.8,14.1Z" />
              <image className="home__blob-img" width="100%" height="100%" href="/assets/img/perfil.png" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

