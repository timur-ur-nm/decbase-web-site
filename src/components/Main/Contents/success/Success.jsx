import "./Success.css"
import SuccesImg from '../../../../assets/images/success.png'
import Button from '../../../../components/elements/Button/Button'

export default function Success() {
  return (
    <div className="success _container">
        <div className="success_title">
            <p>20</p>
            <h1>Years Of Successful Working The Market</h1>
            <Button>READ MORE</Button>
        </div>
        <img src={SuccesImg} alt="" />
    </div>
  )
}
