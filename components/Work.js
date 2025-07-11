export default function Work() {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid container mx-auto px-6 gap-8">
        {[
          { img: "/assets/img/work1.jpg", title: "Restaurant", description: "A brief description of project one.", url: "https://example-web-ekos-projects-a032e859.vercel.app/restaurant" },
          { img: "/assets/img/work2.jpg", title: "Retail Store", description: "A brief description of project two.", url: "https://example-web-ekos-projects-a032e859.vercel.app/retail" },
          { img: "/assets/img/work3.jpg", title: "Professional Service", description: "A brief description of project three.", url: "https://example-web-ekos-projects-a032e859.vercel.app/professional-services" },
          { img: "/assets/img/work4.jpg", title: "Health and Fitness", description: "A brief description of project four.", url: "https://example-web-ekos-projects-a032e859.vercel.app/health-and-fitness" },
          { img: "/assets/img/work5.jpg", title: "Entertainment", description: "A brief description of project five.", url: "https://example-web-ekos-projects-a032e859.vercel.app/entertainment" },
          { img: "/assets/img/work6.jpg", title: "Hotel and Accomodation", description: "A brief description of project six.", url: "https://example-web-ekos-projects-a032e859.vercel.app/hotel" },
          { img: "/assets/img/work2.jpg", title: "Education", description: "A brief description of project two.", url: "https://example-web-ekos-projects-a032e859.vercel.app/education" },
        ].map((item, index) => (
          <a key={index} href={item.url} className="work__item">
            <img src={item.img} alt="" className="work__img-main" />
            <div className="work__overlay">
              <h3 className="work__title">{item.title}</h3>
              <p className="work__description">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}