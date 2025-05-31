import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>wulu.in — Anime & Manga Universe</title>
        <meta name="description" content="Stream anime, manage your manga list, explore seasonal releases, and join the community at wulu.in." />
        <meta property="og:title" content="wulu.in — Anime & Manga Universe" />
        <meta property="og:description" content="Your ultimate anime and manga hub. Watch, shop, review, and connect." />
        <meta property="og:image" content="/og-cover.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-16 bg-sakura bg-cover">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Welcome to <span className="text-dark">wulu.in</span>
        </h1>
        <p className="text-lg text-dark max-w-2xl mx-auto">
          Discover, stream, and track your favorite anime and manga titles. Dive into seasonal charts, fan communities, and curated recommendations.
        </p>
        <div className="mt-8 space-x-4">
          <Link href="/anime">
            <span className="px-6 py-2 bg-primary text-white rounded-xl shadow hover:bg-pink-500 transition">Explore Anime</span>
          </Link>
          <Link href="/manga">
            <span className="px-6 py-2 border border-primary text-primary rounded-xl hover:bg-light">Read Manga</span>
          </Link>
        </div>
      </section>
    </>
  )
}
