import { Shield, FileText, Briefcase, Gavel, Building2, BadgePercent } from 'lucide-react'

const items = [
  { icon: Shield, title: 'الجرائم الإلكترونية', desc: 'تحقيقات رقمية، شكاوى الجرائم الإلكترونية، وحماية السمعة.' },
  { icon: Briefcase, title: 'قضايا المؤثرين', desc: 'إدارة التعاقدات، النزاعات التجارية، والسمعة الرقمية.' },
  { icon: BadgePercent, title: 'الاحتيال المالي', desc: 'ملاحقة قضايا الاحتيال، غسيل الأموال، واسترداد الأصول.' },
  { icon: Gavel, title: 'الدفاع الجنائي', desc: 'تمثيل قانوني شامل في القضايا الحساسة والمعقدة.' },
  { icon: FileText, title: 'العقود', desc: 'صياغة ومراجعة عقود محكمة بلهجتين عربي/انجليزي.' },
  { icon: Building2, title: 'الشركات', desc: 'تأسيس، حوكمة، وحلول قانونية للشركات وروّاد الأعمال.' },
]

export default function Services(){
  return (
    <section className="bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">خدمات مختارة</h3>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item)=> (
            <div key={item.title} className="group rounded-2xl p-6 bg-white border border-black/5 shadow-sm hover:shadow-md transition">
              <item.icon className="w-6 h-6 text-neutral-900" />
              <div className="mt-4 font-medium">{item.title}</div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-[#D4AF37] to-transparent"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
