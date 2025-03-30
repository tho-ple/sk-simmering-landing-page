"use client"

export function KontaktForm() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Schreib uns eine Nachricht</h2>
      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-300">Nutze das Formular, um uns direkt zu kontaktieren. Wir freuen uns auf deine Nachricht!</p>
      <form className="mt-6 w-full max-w-lg" onSubmit={(e) => { e.preventDefault(); alert('Nachricht gesendet!'); }}>
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" type="text" id="name" placeholder="Dein Name" required />
        
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mt-4 mb-2" htmlFor="email">E-Mail</label>
        <input className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" type="email" id="email" placeholder="Deine E-Mail" required />
        
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mt-4 mb-2" htmlFor="message">Nachricht</label>
        <textarea className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" id="message" rows={4} placeholder="Deine Nachricht" required></textarea>
        
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition" type="submit">Senden</button>
      </form>
    </section>
  );
}