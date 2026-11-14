import Link from 'next/link';
import { Palette, LayoutGrid, Type, Route, Plus, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const GAMES = [
  {
    slug: 'kelompokkan-warna',
    title: 'Kelompokkan Warna',
    description: 'Seret objek ke area warna yang tepat sebelum waktu habis. Kumpulkan combo untuk skor maksimal!',
    icon: Palette,
    color: 'from-terracotta-400 to-terracotta-600',
  },
  {
    slug: 'matching',
    title: 'Mencocokkan Gambar',
    description: 'Buka dua kartu bertema Lamongan dan temukan pasangannya sebelum kehabisan percobaan.',
    icon: LayoutGrid,
    color: 'from-lamongan-400 to-lamongan-600',
  },
  {
    slug: 'merangkai-huruf',
    title: 'Merangkai Huruf',
    description: 'Lihat foto petunjuk, lalu susun huruf acak menjadi kata tentang wisata dan makanan Lamongan.',
    icon: Type,
    color: 'from-leaf-400 to-leaf-600',
  },
  {
    slug: 'coding-unplugged',
    title: 'Si Lele Cari Harta Karun',
    description: 'Coding unplugged: susun kartu panah agar Si Lele sampai ke harta karun di WBL.',
    icon: Route,
    color: 'from-sunny-400 to-terracotta-500',
  },
  {
    slug: 'penjumlahan-makanan',
    title: 'Penjumlahan Makanan Tradisional',
    description: 'Hitung soto, pecel lele, wingko, dan makanan khas Lamongan lainnya, lalu jumlahkan.',
    icon: Plus,
    color: 'from-terracotta-300 to-leaf-500',
  },
];

export function GamePreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Game Edukasi</h2>
          <p className="mx-auto mt-1 max-w-md text-sm text-secondary">
            Uji ketangkasan dan ingatanmu sambil belajar tentang Lamongan.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {GAMES.map((game, i) => {
          const Icon = game.icon;
          return (
            <Reveal key={game.slug} delay={i * 0.1}>
              <div className="relative overflow-hidden rounded-xl2 border border-subtle bg-surface p-7 shadow-soft dark:shadow-soft-dark">
                <div
                  className={`absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br ${game.color} opacity-20 blur-2xl`}
                  aria-hidden
                />
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${game.color} text-white`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold">{game.title}</h3>
                <p className="mt-2 text-sm text-secondary">{game.description}</p>
                <Link href={`/game/${game.slug}`} className="mt-5 inline-block">
                  <Button size="sm" variant="outline">
                    Mainkan <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Button>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
