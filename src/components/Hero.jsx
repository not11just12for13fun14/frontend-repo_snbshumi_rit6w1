import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[600] tracking-tight text-neutral-900 leading-[1.1]">
            المكتب القانوني للقضايا الحسّاسة والجرائم الإلكترونية في دبي
          </h1>
          <p className="mt-6 text-neutral-600 text-lg md:text-xl max-w-2xl">
            حماية قانونية متقدمة، سرعة في الاستجابة، وشفافية كاملة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/971000000000" target="_blank" className="inline-flex items-center rounded-full bg-[#D4AF37] text-black px-6 py-3 text-sm font-medium hover:brightness-95 transition">تواصل واتساب</a>
            <a href="tel:+971000000000" className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium hover:shadow-sm transition">اتصل الآن</a>
          </div>
        </div>
        <div className="order-1 md:order-2 aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  )
}
