import { Link } from 'wouter'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="bg-white shadow-md py-4">
                <nav className="container mx-auto flex gap-4">
                    <Link href="/">Inicio</Link>
                    <Link href="/otra">Otra página</Link>
                </nav>
            </header>

            <main className="container mx-auto mt-8">{children}</main>
        </div>
    )
}
