export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form action="" className="contact__form max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="email" placeholder="Email" className="contact__input" />
          <textarea placeholder="Your Message" cols="0" rows="7" className="contact__input"></textarea>
          <input type="button" value="Send Message" className="contact__button button" />
        </form>
      </div>
    </section>
  )
}

