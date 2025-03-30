export function Vereinsabend() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 w-full max-w-4xl mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Vereinsabend</h2>
      <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">Schach in Simmering - Komm vorbei und spiel mit!</p>
      <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-400">📍 <strong>Ort:</strong> Cafe Michelle, Grillgasse 14A, 1110 Wien</p>
      <p className="mt-2 text-center text-lg text-gray-700 dark:text-gray-400">📅 <strong>Vereinsabend:</strong> Dienstag ab 15:30</p>
      
      <div className="mt-8 w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=Cafe%20Michelle%20Grillgasse%2014A%20Wien&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}