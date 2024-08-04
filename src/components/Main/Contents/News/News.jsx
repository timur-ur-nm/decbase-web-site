import "./News.css"
import NewsComponents from "../MainContent/components/NewsComponents/NewsComponents"

import news1 from '../../../../assets/images/news1.png'
import news2 from '../../../../assets/images/news2.png'

export default function News() {
  return (
    <div className="news">
        <div className="news_container _container">
          <div className="news-title">
              <h2>LETEST NEWS</h2>
              <h1>From Our Blog</h1>
          </div>

          <div className="news-content">
             <NewsComponents 
              imgSrc={news1} 
              h1={'2020 Interior Design Trends'} 
              p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.'}/>
            <NewsComponents 
              imgSrc={news2} 
              h1={'28 Notable Product at ARC Interior Design'} 
              p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.'}/>
          
          </div>
        </div>
    </div>
  )
}
