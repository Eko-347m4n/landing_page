export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid container mx-auto px-6 md:grid-cols-2 md:gap-8">
        <div className="about__img">
          <img src="/assets/img/mypixel-removebg-preview.png" alt="About Eko Aji" className="rounded-lg shadow-lg" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="about__subtitle">I'm Eko Aji</h2>
          <p className="about__text">
            A passionate and creative web developer with a knack for building beautiful and functional websites. I specialize in front-end development and love bringing ideas to life in the browser.
          </p>
        </div>
      </div>
    </section>
  )
}

