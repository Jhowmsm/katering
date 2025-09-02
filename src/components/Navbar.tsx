import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/file.svg" alt="Ktering Logo" width={32} height={32} />
        </Link>
        <span className="ml-2 text-xl font-bold" style={{ color: 'var(--color-primary-text)' }}>Ktering</span>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-800" style={{ color: 'var(--color-secondary)' }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-gray-800" style={{ color: 'var(--color-secondary)' }}>
            Servicios
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-800" style={{ color: 'var(--color-secondary)' }}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-gray-800" style={{ color: 'var(--color-secondary)' }}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
