const Services = () => {
  return (
    <section id="services" className="py-16 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>Nuestros Servicios</h2>
      <p className="text-lg mb-12" style={{ color: 'var(--color-secondary)' }}>
        Ofrecemos una amplia gama de servicios de catering para hacer de tu evento un éxito.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--color-light-gray)' }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-primary-text)' }}>Eventos Corporativos</h3>
          <p style={{ color: 'var(--color-secondary)' }}>
            Desde reuniones de negocios hasta grandes conferencias, ofrecemos menús personalizados y un servicio impecable.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--color-light-gray)' }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-primary-text)' }}>Bodas y Celebraciones</h3>
          <p style={{ color: 'var(--color-secondary)' }>Hacemos de tu día especial una experiencia culinaria inolvidable con opciones elegantes y deliciosas.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--color-light-gray)' }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-primary-text)' }}>Eventos Privados</h3>
          <p style={{ color: 'var(--color-secondary)' }}>
            Catering íntimo para cenas privadas, fiestas familiares y cualquier ocasión especial en casa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
