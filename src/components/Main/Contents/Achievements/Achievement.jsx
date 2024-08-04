import './Achievement.css'
import AchievementBlock from './elements/AchievementBlock/AchievementBlock'

export default function Achievement() {
  return (
    <div className='achievement'>
        <div className='achievement _container'>
            <div className='achievement_title'>
              <h1>3000+ Completed Work</h1>
              <h1>Which WE have Successfully Done</h1>
            </div>

            <div className='achievement_block'>
              <AchievementBlock amount='980'description='Project'/>
              <AchievementBlock amount='520'description='Happy Client'/>
              <AchievementBlock amount='330'description='Winners'/>
              <AchievementBlock amount='120'description='Recoment'/>
            </div>
        </div>
    </div>
  )
}
