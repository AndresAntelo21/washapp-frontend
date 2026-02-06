import { Link } from 'wouter';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-white py-4 shadow-md">
        <nav className="container mx-auto flex gap-4">
          <Link href="/">Inicio</Link>
        </nav>
      </header>

      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
}
