import { useEffect } from 'react'

export default function HeadMeta({ title, description, locale = 'ar_AE', url = window.location.href, image = '/og-image.jpg', keywords = [] , schema }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('keywords', keywords.join(', '))
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:locale', locale, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:image', image, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)

    // Structured data (JSON-LD)
    if (schema) {
      let script = document.getElementById('jsonld-schema')
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'jsonld-schema'
        document.head.appendChild(script)
      }
      script.text = JSON.stringify(schema)
    }
  }, [title, description, locale, url, image, JSON.stringify(schema)])

  return null
}
