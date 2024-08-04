import './FeedbackBlock.css'

export default function FeedbackBlock({imgSrc,spanInfo,text}) {
  return (
    <div className='feedback_block_content'>
        <img src={imgSrc} alt="" className='feedback_block_img'/>
        <div className='feedback_block_title'>
            <span>{spanInfo}</span>
            <p>{text}</p>
        </div>
    </div>
  )
}
