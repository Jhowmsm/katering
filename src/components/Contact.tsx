const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>Contáctanos</h2>
      <p className="text-lg mb-12" style={{ color: 'var(--color-secondary)' }}>
        Estamos listos para ayudarte a planificar tu próximo evento. Ponte en contacto con nosotros.
      </p>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-text)' }}>Información de Contacto</h3>
          <p className="mb-2" style={{ color: 'var(--color-secondary)' }}>
            <strong style={{ color: 'var(--color-primary-text)' }>Teléfono:</strong> +34 123 456 789
          </p>
          <p className="mb-2" style={{ color: 'var(--color-secondary)' }}>
            <strong style={{ color: 'var(--color-primary-text)' }>Email:</strong> info@ktering.com
          </p>
          <p className="mb-2" style={{ color: 'var(--color-secondary)' }}>
            <strong style={{ color: 'var(--color-primary-text)' }>Dirección:</strong> Calle Ficticia, 123, Ciudad, País
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-text)' }>Envíanos un Mensaje</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>Nombre</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium" style={{ color: 'var(--color-primary-text)' }}>Mensaje</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-text)' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
