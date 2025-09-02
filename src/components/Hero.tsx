const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/catering-hero-refined.jpg)' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div> {/* Dark overlay */}
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-background-white)', fontFamily: 'Playfair Display, serif' }}>
          Arte Culinario para Momentos Inolvidables
        </h1>
        <p className="text-xl mb-10" style={{ color: 'var(--color-secondary-light)' }}>
          Transformamos cada evento en una sinfonía de sabores y elegancia, diseñada exclusivamente para ti.
        </p>
        <button
          className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: 'var(--color-accent-gold)', color: 'var(--color-primary-dark)' }}
        >
          Descubre Nuestra Experiencia
        </button>
      </div>
    </section>
  );
};

export default Hero;
