import Button from '../../../elements/Button/Button'
import './TitleBLock.css'


export default function TitleBlock({h2,h1,p,btn}) {
    return(
        <div className='title-block'>
            <h2>{h2}</h2>
            <h1>{h1}</h1>
            <p>{p}</p>
            <Button>{btn}</Button>
        </div>
    )
}

