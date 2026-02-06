import { useEffect, useRef, useState } from 'react'

export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setRevealed(true)
        io.disconnect()
      }
    }, options)
    io.observe(node)
    return () => io.disconnect()
  }, [options])

  return { ref, revealed }
}
