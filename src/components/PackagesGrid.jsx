const base = [
  { title: 'Cyber Shield', ar: 'حماية إلكترونية', price: 'AED 8k–25k', desc: 'تحقيقات رقمية + شكاوى الجرائم الإلكترونية + متابعة أسبوعية.' },
  { title: 'Influencer Legal Kit', ar: 'حماية المؤثرين', price: 'AED 6k–18k', desc: 'عقود، نزاعات، إدارة سمعة، وسياسة محتوى.' },
  { title: 'Fraud Guard', ar: 'مكافحة الاحتيال', price: 'AED 10k–40k', desc: 'تحقيقات، استرداد أصول، وإجراءات قانونية سريعة.' },
  { title: 'Criminal Defense Prime', ar: 'الدفاع الجنائي', price: 'AED 20k–120k', desc: 'تمثيل شامل في القضايا الحساسة والمعقدة.' },
  { title: 'Contracts Studio', ar: 'استوديو العقود', price: 'AED 3k–15k', desc: 'صياغة ومراجعة عقود ثنائية اللغة بدقة عالية.' },
  { title: 'Corporate Counsel', ar: 'مستشار الشركات', price: 'AED 12k–60k', desc: 'حوكمة، تأسيس، واستشارة مستمرة للشركات.' },
]

export default function PackagesGrid(){
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">باقات قانونية فاخرة</h3>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {base.map((p)=> (
          <div key={p.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-[#D4AF37] text-xs uppercase tracking-widest">{p.title}</div>
            <div className="mt-2 font-semibold">{p.ar}</div>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-neutral-500">{p.price}</div>
              <a href="/packages" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-xs hover:bg-neutral-800 transition">تفاصيل</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
