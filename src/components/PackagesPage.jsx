import { Shield, Wallet, Gavel, FileText, Building2, Star, Coins, Megaphone, AlertTriangle } from 'lucide-react'

const pkgs = [
  { icon: Shield, title: 'Cyber Shield', ar: 'حماية إلكترونية', price: 'AED 8k–25k', desc: 'تحقيقات رقمية، شكاوى الجرائم الإلكترونية، وحماية السمعة.' },
  { icon: Megaphone, title: 'Influencer Shield', ar: 'درع المؤثر', price: 'AED 6k–18k', desc: 'إدارة تعاقدات المحتوى، نزاعات علامات تجارية، وسياسة إعلان.' },
  { icon: Coins, title: 'Crypto Shield', ar: 'درع العملات الرقمية', price: 'AED 12k–45k', desc: 'حماية معاملات الكريبتو، تتبع المحافظ، ونزاعات البورصات.' },
  { icon: Wallet, title: 'Fraud Guard', ar: 'مكافحة الاحتيال', price: 'AED 10k–40k', desc: 'تحقيقات، استرداد أصول، وإجراءات قانونية سريعة.' },
  { icon: Gavel, title: 'Criminal Defense Prime', ar: 'الدفاع الجنائي', price: 'AED 20k–120k', desc: 'تمثيل شامل في القضايا الحساسة والمعقدة.' },
  { icon: FileText, title: 'Contracts Studio', ar: 'استوديو العقود', price: 'AED 3k–15k', desc: 'صياغة ومراجعة عقود ثنائية اللغة بدقة عالية.' },
  { icon: Building2, title: 'Corporate Counsel', ar: 'مستشار الشركات', price: 'AED 12k–60k', desc: 'حوكمة، تأسيس، واستشارة مستمرة للشركات.' },
  { icon: Star, title: 'Digital Crisis Room', ar: 'طوارئ إلكترونية', price: 'AED 15k–55k', desc: 'غرفة عمليات عاجلة لحالات الاختراق والتشهير والابتزاز.' },
]

export default function PackagesPage(){
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">باقات قانونية متميزة</h1>
        <p className="mt-3 text-neutral-600">اختر الحزمة المناسبة وابدأ فورًا.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pkgs.map((p)=> (
            <div key={p.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p.icon className="w-6 h-6" />
              <div className="mt-3 text-[#D4AF37] text-xs uppercase tracking-widest">{p.title}</div>
              <div className="mt-1 font-semibold">{p.ar}</div>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-neutral-500">{p.price}</div>
                <a href="https://wa.me/971000000000" target="_blank" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-xs hover:bg-neutral-800 transition">احجز الآن</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">أسئلة شائعة</h2>
        <div className="mt-6 space-y-4">
          {[
            {q:'كيف يتم بدء الملف؟', a:'نعقد اتصالًا أوليًا، نجمع الحقائق، ثم نضع خطة عمل واضحة ومواعيد متابعة.'},
            {q:'هل البيانات سرية؟', a:'نعم. نعمل ببروتوكولات سرية صارمة وحفظ ملفات مشفرة.'},
            {q:'هل توجد متابعات دورية؟', a:'نعم. تقارير أسبوعية مختصرة حسب الحزمة.'},
          ].map((f)=> (
            <details key={f.q} className="rounded-xl border border-black/5 bg-white p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
