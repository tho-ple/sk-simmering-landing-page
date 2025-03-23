import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>1. Simmeringer Schachklub - Wien</title>
        <meta name="description" content="Der 1. Simmeringer Schachklub lädt ein! Spiele Schach in Wien 1110, Simmering. Jeden Dienstag ab 15:30 im Cafe Michelle." />
        <meta name="keywords" content="Schach, Wien, Simmering, Schachklub, Schachverein, Cafe Michelle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-12">
        <p className="mt-4 text-lg text-center">Schach in Simmering - Komm vorbei und spiel mit!</p>
        <p className="mt-2 text-center">📍 <strong>Ort:</strong> Cafe Michelle, Grillgasse 14A, 1110 Wien</p>
        <p className="mt-2 text-center">📅 <strong>Vereinsabend:</strong> Dienstag ab 15:30</p>
        <p className="mt-2 text-center">📧 <strong>Kontakt:</strong> <a href="mailto:glattesmail@gmail.com" className="text-blue-500">glattesmail@gmail.com</a></p>
        
        <div className="mt-6 w-full max-w-4xl h-64">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?q=Cafe%20Michelle%20Grillgasse%2014A%20Wien&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
