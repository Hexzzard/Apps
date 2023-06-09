/* eslint-disable @next/next/no-img-element */
import { Button } from './Button'

export function Hero () {
  const imagenes = {
    halfCircle3: 'https://static.overlay-tech.com/assets/92aef93f-1c98-4d87-bd16-baecbd4d1000.svg',
    halfCircle2: 'https://static.overlay-tech.com/assets/34518600-1951-4cd1-90f7-518504a4acdf.svg',
    halfCircle1: 'https://static.overlay-tech.com/assets/8c2a1dc0-1065-4267-841b-f0a9e46da2ea.svg',
    user1: 'https://static.overlay-tech.com/assets/57b18405-de99-4356-b424-5119db92b677.png',
    pattern: 'https://static.overlay-tech.com/assets/dc827d76-3118-4c91-a154-c77f0e433acc.svg',
    user3: 'https://static.overlay-tech.com/assets/27409670-f1c9-4210-bd71-406f78d5b66d.png',
    user4: 'https://static.overlay-tech.com/assets/dff9c91d-1bd2-472c-8c4b-672e45e15474.png',
    user2: 'https://static.overlay-tech.com/assets/81930e5b-1b0e-44cc-bb8c-77bd3b0b30af.png'
  }

  return (
    <div className='hero-5'>
      <div className='content'>
        <div className='header-copy'>
          <h1 className='landing-page-ui-kit'>
            AutoEducate
          </h1>
          <p className='lorem-ipsum-dolor-si'>
            Una pagina para prepararte para la PSU
          </p>
        </div>
        <Button color='button-2' route='/login'>
          Comienza
        </Button>
      </div>
      <div className='creative-block'>
        <div className='overlap-group3'>
          <div className='black-bg' />
          <img src={imagenes.halfCircle3} alt='Half Circle 3' className='half-circle-3' />
          <img src={imagenes.halfCircle2} alt='Half Circle 2' className='half-circle-2' />
          <img src={imagenes.halfCircle1} alt='Half Circle 1' className='half-circle-1' />
          <img src={imagenes.user1} alt='user 1' className='user-1' />
          <img src={imagenes.pattern} alt='pattern' className='pattern' />
          <img src={imagenes.user3} alt='user 3' className='user-3' />
          <img src={imagenes.user4} alt='user 4' className='user-4' />
          <img src={imagenes.user2} alt='user 2' className='user-2' />
        </div>
      </div>
    </div>
  )
}
