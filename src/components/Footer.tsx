const Footer = () => {
  return (
    <footer className="py-10 px-8 text-center" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-secondary-light)' }}>
      <div className="container mx-auto">
        <p className="mb-4 text-lg">&copy; {new Date().getFullYear()} Ktering. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 text-xl">
          {/* Social Media Icons/Links Placeholder */}
          <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
