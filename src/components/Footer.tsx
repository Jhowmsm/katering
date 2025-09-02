const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-8 text-center">
      <div className="container mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Ktering. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          {/* Social Media Icons/Links Placeholder */}
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
