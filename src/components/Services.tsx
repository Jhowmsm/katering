const Services = () => {
  return (
    <section id="services" className="py-20 px-8 text-center" style={{ backgroundColor: 'var(--color-secondary-light)' }}>
      <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Nuestros Servicios</h2>
      <p className="text-lg mb-12 max-w-3xl mx-auto" style={{ color: 'var(--color-primary-dark)' }}>
        Ofrecemos una gama exclusiva de servicios de catering, diseñados para transformar cualquier ocasión en una experiencia culinaria memorable y sofisticada.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border-light)' }}>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Eventos Corporativos</h3>
          <p style={{ color: 'var(--color-primary-dark)' }}>
            Desde cumbres ejecutivas hasta galas anuales, nuestro catering corporativo eleva su marca con menús impecables y un servicio discreto.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border-light)' }}>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Bodas y Celebraciones</h3>
          <p style={{ color: 'var(--color-primary-dark)' }}>
            Creamos el banquete de sus sueños, fusionando la alta cocina con la magia de su día especial para una celebración inolvidable.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border-light)' }}>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Experiencias Privadas</h3>
          <p style={{ color: 'var(--color-primary-dark)' }}>
            Catering íntimo y personalizado para cenas exclusivas, reuniones familiares o cualquier evento privado que requiera distinción.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
