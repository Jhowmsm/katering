import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="py-6 px-8 flex justify-between items-center" style={{ backgroundColor: 'var(--color-background-white)', borderBottom: '1px solid var(--color-border-light)' }}>
      <div className="flex items-center">
        <Link href="/">
          <Image src="/file.svg" alt="Ktering Logo" width={32} height={32} style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(16%) saturate(2990%) hue-rotate(180deg) brightness(96%) contrast(90%)' }} /> {/* Adjust filter for dark logo color */}
        </Link>
        <span className="ml-3 text-2xl font-bold" style={{ color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>Ktering</span>
      </div>
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-lg hover:underline" style={{ color: 'var(--color-primary-dark)' }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#services" className="text-lg hover:underline" style={{ color: 'var(--color-primary-dark)' }}>
            Servicios
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-lg hover:underline" style={{ color: 'var(--color-primary-dark)' }}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-lg hover:underline" style={{ color: 'var(--color-primary-dark)' }}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
