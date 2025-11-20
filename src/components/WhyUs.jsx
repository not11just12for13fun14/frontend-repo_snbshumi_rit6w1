import { ShieldCheck, Lock, Sparkles, CalendarClock } from 'lucide-react'

const reasons = [
  { icon: CalendarClock, title: 'سرعة الرد', desc: 'استجابة فورية وقنوات مباشرة على مدار الساعة.' },
  { icon: Lock, title: 'السرية التامة', desc: 'مستوى حماية عالي للمعلومات والملفات الحساسة.' },
  { icon: Sparkles, title: 'خبرة القضايا الحساسة', desc: 'تعامل احترافي مع ملفات عالية المخاطر وتعقيد.' },
  { icon: ShieldCheck, title: 'متابعة أسبوعية', desc: 'تقارير مختصرة ومنظمة حول مسار القضية.' },
]

export default function WhyUs(){
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">لماذا تختارنا</h3>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r)=> (
            <div key={r.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <r.icon className="w-6 h-6" />
              <div className="mt-3 font-medium">{r.title}</div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
