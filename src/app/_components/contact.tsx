export function Kontakt() {
    return (
        <section className="flex flex-col items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 w-full max-w-4xl mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Kontakt</h2>
        <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-300">Bei Fragen oder Interesse melde dich gerne!</p>
        <div className="mt-6 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">👤 Erwin Crvcek</p>
          <p className="mt-3 text-lg">📧 <strong>E-Mail:</strong> <a href="mailto:glattesmail@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">glattesmail@gmail.com</a></p>
          <p className="mt-2 text-lg">📞 <strong>Telefon:</strong> <a href="tel:+436603534966" className="text-blue-500 dark:text-blue-400 hover:underline">+43660 3534966</a></p>
        </div>
      </section>
    );
  }