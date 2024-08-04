import './Feedback.css'
import ArrowButtons from '../../../elements/ArrowButtons/ArrowButtons'
import FeedbackBlock from './elements/FeedbackBlock/FeedbackBlock'
import feedbackAvatar1 from '../../../../assets/images/feedback-avatar1.png'
import feedbackAvatar2 from '../../../../assets/images/feedback-avatar2.png'

export default function Feedback() {
  return (
    <div className="feedback _container">
        <div className="feedback_title">
            <h2>TESTIMONIALS</h2>
            <h1>Client says about us</h1>
        </div>
        <div className='feedback_buttons'>
            <ArrowButtons />
        </div>
        <div className='feedback_block'>
          <FeedbackBlock 
            imgSrc={feedbackAvatar1}
            spanInfo={'Louis Saville '}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.'}
          />
          <FeedbackBlock 
            imgSrc={feedbackAvatar2}
            spanInfo={'Rekha Varadwaz'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.'}
          />
        </div>
    </div>
  )
}
