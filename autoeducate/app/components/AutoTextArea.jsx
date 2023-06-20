import { useEffect, useState, useRef } from 'react'
import './AutoResizableTextarea.css'
import { ReloadState } from '../context/ReloadContext'

export function AutoResizableTextarea () {
  const [text, setText] = useState('')
  const textareaRef = useRef(null)
  const { reload } = ReloadState()

  const handleChange = (event) => {
    setText(event.target.value)
    adjustTextareaHeight()
    console.log('update')
  }

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }
  useEffect(() => {
    setText('')
  }, [reload])

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      placeholder='Publica algo'
      className='textarea-auto-resizable'
      id='comentar'
    />
  )
}
