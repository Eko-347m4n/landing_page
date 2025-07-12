export default function Work() {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid container mx-auto px-6 gap-8 grid grid-cols-1 md:grid-cols-3">
        {[
          { img: "/assets/img/work1.jpg", title: "Restaurant", description: "Website for a modern restaurant.", url: "https://example-web-ekos-projects-a032e859.vercel.app/restaurant" },
          { img: "/assets/img/work2.jpg", title: "Retail Store", description: "E-commerce site for a retail business.", url: "https://example-web-ekos-projects-a032e859.vercel.app/retail" },
          { img: "/assets/img/work3.jpg", title: "Professional Service", description: "Landing page for a service-based company.", url: "https://example-web-ekos-projects-a032e859.vercel.app/professional-services" },
          { img: "/assets/img/work4.jpg", title: "Health and Fitness", description: "Web application for a fitness brand.", url: "https://example-web-ekos-projects-a032e859.vercel.app/health-and-fitness" },
          { img: "/assets/img/work5.jpg", title: "Entertainment", description: "Promotional website for an entertainment event.", url: "https://example-web-ekos-projects-a032e859.vercel.app/entertainment" },
          { img: "/assets/img/work6.jpg", title: "Accomodation", description: "Booking website for hotel and accomodation.", url: "https://example-web-ekos-projects-a032e859.vercel.app/hotel" },
          { img: "/assets/img/work2.jpg", title: "Education", description: "Online platform for educational resources.", url: "https://example-web-ekos-projects-a032e859.vercel.app/education" },
        ].map((item, index, arr) => (
          <a key={index} href={item.url} className={`work__item ${arr.length % 3 === 1 && index === arr.length - 1 ? 'md:col-start-2' : ''}`} target="_blank" rel="noopener noreferrer">
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