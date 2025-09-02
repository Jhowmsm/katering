const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 text-center" style={{ backgroundColor: 'var(--color-secondary-light)' }}>
      <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Contáctenos</h2>
      <p className="text-lg mb-12 max-w-3xl mx-auto" style={{ color: 'var(--color-primary-dark)' }}>
        Estamos a su disposición para diseñar la experiencia culinaria perfecta para su próximo evento. No dude en ponerse en contacto con nosotros.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div>
          <h3 className="text-3xl font-semibold mb-6" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Información de Contacto</h3>
          <p className="mb-4 text-lg" style={{ color: 'var(--color-primary-dark)' }}>
            <strong style={{ color: 'var(--color-primary-dark)' }}>Teléfono:</strong> +34 123 456 789
          </p>
          <p className="mb-4 text-lg" style={{ color: 'var(--color-primary-dark)' }}>
            <strong style={{ color: 'var(--color-primary-dark)' }}>Email:</strong> info@ktering.com
          </p>
          <p className="mb-4 text-lg" style={{ color: 'var(--color-primary-dark)' }}>
            <strong style={{ color: 'var(--color-primary-dark)' }}>Dirección:</strong> Calle Ficticia, 123, Ciudad, País
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-6" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Envíanos un Mensaje</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: 'var(--color-primary-dark)' }}>Nombre</label>
              <input type="text" id="name" name="name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2" style={{ borderColor: 'var(--color-border-light)', backgroundColor: 'var(--color-background-white)', color: 'var(--color-primary-dark)' }} />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: 'var(--color-primary-dark)' }}>Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2" style={{ borderColor: 'var(--color-border-light)', backgroundColor: 'var(--color-background-white)', color: 'var(--color-primary-dark)' }} />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2" style={{ color: 'var(--color-primary-dark)' }}>Mensaje</label>
              <textarea id="message" name="message" rows={5} className="w-full p-3 border rounded-md focus:outline-none focus:ring-2" style={{ borderColor: 'var(--color-border-light)', backgroundColor: 'var(--color-background-white)', color: 'var(--color-primary-dark)' }}></textarea>
            </div>
            <button type="submit" className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--color-accent-gold)', color: 'var(--color-primary-dark)' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
