const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/catering-hero.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Experiencias Culinarias Inolvidables
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Transformamos tus eventos en momentos mágicos con sabores exquisitos y un servicio impecable.
        </p>
        <button
          className="px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-text)' }}
        >
          Descubre Nuestros Servicios
        </button>
      </div>
    </section>
  );
};

export default Hero;
