export function Vereinsabend() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 w-full max-w-4xl mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Vereinsabend</h2>
      <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">Schach in Simmering - Komm vorbei und spiel mit!</p>
      <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-400">📍 <strong>Ort:</strong> Dany's Cafe, Krausegasse 2A, Wien 1110</p>
      <p className="mt-2 text-center text-lg text-gray-700 dark:text-gray-400">📅 <strong>Vereinsabend:</strong> Dienstag ab 17:00</p>
      
      <div className="mt-8 w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.6803641159922!2d16.414825576725164!3d48.17424134860758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daa02be093715%3A0xe075fe3ddf8a5db1!2sKrausegasse%202A%2C%201110%20Wien!5e0!3m2!1sde!2sat!4v1766152466571!5m2!1sde!2sat"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}