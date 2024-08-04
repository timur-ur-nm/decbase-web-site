import './AchievementBlock.css'

export default function AchievementBlock({amount,description}) {
  return (
    <div className='achievement_block_content'>
        <span>{amount}</span>
        <p>{description}</p>
    </div>
  )
}
