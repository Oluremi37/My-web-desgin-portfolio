const Stats = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-500">15+</h3>
            <p className="text-slate-300 mt-2">Projects Built</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-orange-500">MERN</h3>
            <p className="text-slate-300 mt-2">Full-Stack Development</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-orange-500">End-to-End</h3>
            <p className="text-slate-300 mt-2">Development & Deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
