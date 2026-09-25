export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Dental AI
          </h1>
          <p className="mt-2 text-gray-600">
            Assistant intelligent pour votre cabinet dentaire
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Agenda</h2>
            <p className="mt-2 text-sm text-gray-500">
              Gérer les rendez-vous
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Patients</h2>
            <p className="mt-2 text-sm text-gray-500">
              Consulter les patients
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Assistant IA</h2>
            <p className="mt-2 text-sm text-gray-500">
              Poser une question à l’IA
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Facturation</h2>
            <p className="mt-2 text-sm text-gray-500">
              Gérer la facturation
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}