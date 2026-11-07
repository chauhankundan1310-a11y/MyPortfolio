import { useEffect, useState } from 'react'

function TypedRole({ text }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    let timeout
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i += 1
        timeout = setTimeout(type, 55)
      }
    }
    type()
    return () => clearTimeout(timeout)
  }, [text])

  return (
    <h2 className="hero-role">
      {displayed}
      <span className="cursor">|</span>
    </h2>
  )
}

export default TypedRole
