export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid container mx-auto px-6">
        <form action="" className="contact__form max-w-lg mx-auto">
          <input type="text" id="contactName" placeholder="Name" className="contact__input" />
          
          <textarea id="contactMessage" placeholder="Your Message" cols="0" rows="7" className="contact__input"></textarea>
          <input type="button" value="Send Message" className="contact__button button" onClick={sendWhatsAppMessage} />
        </form>
      </div>
    </section>
  )
}

function sendWhatsAppMessage() {
  const name = document.getElementById('contactName').value;
  const message = document.getElementById('contactMessage').value;
  const phoneNumber = '6285171533534'; // Your WhatsApp number

  if (name && message) {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20my%20name%20is%20${encodeURIComponent(name)}.%0A%0A${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  } else {
    alert('Please fill in both your Name and Message.');
  }
}

