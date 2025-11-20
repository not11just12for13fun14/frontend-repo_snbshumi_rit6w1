export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <div className="text-[#D4AF37] tracking-widest text-xs uppercase">About</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">عبدالهادي جاسم الحمادي</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            محامٍ ومستشار قانوني معتمد، بخبرة واسعة في القضايا الحسّاسة والجرائم الإلكترونية، وتمثيل المؤثرين والشركات في ملفات عالية المخاطر. أسلوب عمل يوازن بين السرعة والسرية والدقة الاستراتيجية.
          </p>
        </div>
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
          {["الجرائم الإلكترونية","قضايا المؤثرين","الاحتيال المالي","الدفاع الجنائي","العقود","الشركات"].map((i)=> (
            <div key={i} className="rounded-2xl border border-black/5 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="text-sm text-neutral-500">خدمة مميزة</div>
              <div className="mt-2 font-medium">{i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
