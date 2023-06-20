export function Pregunta (props) {
  const { id, title, descripcion, A, B, C, D } = props
  return (
    <div className='pregunta'>
      <h2 className='form_title'>{title}</h2>
      <p>{descripcion}</p>
      <div className='radio-option'>
        <input type='radio' id={`${id}A`} name={`P${id}`} value='0' />
        <label htmlFor={`${id}A`} className='radio-labelA'>
          <div className='radio-imageA' />
          <span className='option-label'>{A}</span>
        </label>
      </div>
      <div className='radio-option'>
        <input type='radio' id={`${id}B`} name={`P${id}`} value='1' />
        <label htmlFor={`${id}B`} className='radio-labelB'>
          <div className='radio-imageB' />
          <span className='option-label'>{B}</span>
        </label>
      </div>
      <div className='radio-option'>
        <input type='radio' id={`${id}C`} name={`P${id}`} value='2' />
        <label htmlFor={`${id}C`} className='radio-labelC'>
          <div className='radio-imageC' />
          <span className='option-label'>{C}</span>
        </label>
      </div>
      <div className='radio-option'>
        <input type='radio' id={`${id}D`} name={`P${id}`} value='3' />
        <label htmlFor={`${id}D`} className='radio-labelD'>
          <div className='radio-imageD' />
          <span className='option-label'>{D}</span>
        </label>
      </div>
    </div>
  )
}
