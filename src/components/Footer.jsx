export default function Footer(){
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm text-neutral-500">
        <div>© {new Date().getFullYear()} Abdelhadi Jasim Al Hammadi</div>
        <div className="flex items-center gap-4">
          <a href="/packages" className="hover:text-black">الباقات</a>
          <a href="tel:+971000000000" className="hover:text-black">اتصال</a>
          <a href="https://wa.me/971000000000" target="_blank" className="hover:text-black">واتساب</a>
        </div>
      </div>
    </footer>
  )
}
