import Button from '../../../../../elements/Button/Button'

export default function NewsComponents({imgSrc,h1,p}) {
  return (
    <div className="newscomponents">
        <img src={imgSrc} alt="" />
        <h1>{h1}</h1>
        <p>{p}</p>
        <Button>CONTINUE READING....</Button>
    </div>
  )
}
