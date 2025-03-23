// app/events/page.tsx

import React from "react";

export default function EventsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      {/* "Nächstes Match" Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Nächstes Match</h2>
        <p className="text-gray-700 dark:text-gray-300">Unser nächstes Match findet am <strong>29. März 2025</strong> um <strong>15:00 Uhr</strong> statt.</p>
        <p className="text-gray-700 dark:text-gray-300">Ort: <strong>Cafe Michelle, Grillgasse 14A, 1110 Wien</strong></p>
      </section>
    </div>
  );
}
