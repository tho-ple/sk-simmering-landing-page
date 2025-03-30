export function Vereinsabend() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12">
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
  </section>
  );
}
