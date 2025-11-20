import { useEffect, useRef, useState } from 'react'

const testimonials = [
  { name: 'عميل مؤثر', text: 'استجابة سريعة وسرية عالية. تم حل النزاع خلال أيام وبأقل ضرر ممكن.' },
  { name: 'شركة تقنية', text: 'فريق يفهم الجرائم الإلكترونية بعمق. قدموا حلولاً عملية وفعالة.' },
  { name: 'رائد أعمال', text: 'عقود احترافية ثنائية اللغة حافظت على حقوقنا عند التوسّع.' },
]

export default function Testimonials(){
  const ref = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=> setIndex((i)=> (i+1) % testimonials.length), 3500)
    return ()=> clearInterval(id)
  },[])

  return (
    <section className="bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">تقييمات موثوقة</h3>
        </div>
        <div className="mt-10 overflow-hidden" ref={ref}>
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t, i)=> (
              <div key={i} className="min-w-full px-2">
                <div className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm">
                  <p className="text-neutral-700 leading-relaxed text-lg">“{t.text}”</p>
                  <div className="mt-4 text-sm text-neutral-500">— {t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
