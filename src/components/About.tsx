const About = () => {
  return (
    <section id="about" className="py-20 px-8 text-center max-w-4xl mx-auto" style={{ backgroundColor: 'var(--color-background-white)' }}>
      <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Nuestra Filosofía</h2>
      <p className="text-lg mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        En Ktering, cada plato es una obra de arte y cada evento una experiencia inolvidable. Con una pasión inquebrantable por la gastronomía y un compromiso con la excelencia, transformamos ingredientes frescos y de temporada en creaciones culinarias que deleitan los sentidos y elevan cualquier celebración. Nuestra dedicación al detalle y al servicio impecable asegura que cada momento sea tan perfecto como lo imaginaste.
      </p>
      {/* Optional: Add an elegant image here later */}
    </section>
  );
};

export default About;
