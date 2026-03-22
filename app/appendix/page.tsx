const mineralData = [
    { mineral: "Coltan (Tantalum)", use: "Electronics", note: "Critical to capacitors and high-tech devices" },
    { mineral: "Gold", use: "Finance / electronics", note: "Easy to trade, high value, difficult to trace" },
    { mineral: "Tin", use: "Industrial soldering", note: "Important to electronics manufacturing" },
    { mineral: "Tungsten", use: "Industrial / defense", note: "Strategic but smaller volume" },
  ];
  
  export default function AppendixPage() {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Research Section
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Data Appendix
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            This appendix gathers structured material related to minerals,
            companies, actor roles, and the broader conflict system.
          </p>
        </section>
  
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold">Key Minerals</h2>
  
            <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200">
              <table className="w-full border-collapse text-left">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold">Mineral</th>
                    <th className="px-4 py-3 text-sm font-semibold">Main Use</th>
                    <th className="px-4 py-3 text-sm font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {mineralData.map((row) => (
                    <tr key={row.mineral} className="border-t border-neutral-200">
                      <td className="px-4 py-3">{row.mineral}</td>
                      <td className="px-4 py-3">{row.use}</td>
                      <td className="px-4 py-3 text-neutral-700">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">Company References</h3>
                <p className="mt-3 leading-7 text-neutral-700">
                  This section will later include Rwanda-linked trading and export
                  companies, international buyers, and ownership notes where
                  available.
                </p>
              </div>
  
              <div className="rounded-3xl border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">Timeline and Sanctions</h3>
                <p className="mt-3 leading-7 text-neutral-700">
                  This section will later include major turning points,
                  investigations, sanctions, and diplomatic milestones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }