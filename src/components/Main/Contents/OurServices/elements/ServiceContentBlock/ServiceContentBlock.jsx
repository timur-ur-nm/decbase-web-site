import './ServiceContentBlock.css'


export default function ServiceContentBlock({img,title, content}) {
  return (
    <div className='service-content-block'>
        <img src={img} alt="" className='' />
        <div className='service-content-block_title'> 
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}
