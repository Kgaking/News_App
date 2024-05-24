import React from 'react'

const randomTexts = [
    'Check out this article to learn more about the latest developments in the field of technology!',
    'Read more about this topic to gain a deeper understanding of the complex issues involved and how they affect our daily lives.',
    'Explore this story to discover the fascinating history behind this groundbreaking innovation and how it has changed the world.',
    'Discover this news to stay up-to-date on the latest trends and advancements in the industry and how they will impact your future.',
    'Get the inside scoop on this exciting new product and how it can revolutionize the way you live and work.',
    'Dive into this in-depth analysis to uncover the hidden secrets and surprising facts behind this intriguing topic.',
    'Stay ahead of the curve with this comprehensive guide to the latest research and findings in this rapidly evolving field.',
    'Uncover the truth behind this controversial issue and learn how it affects you and your community.',
    'Join the conversation and share your thoughts on this thought-provoking topic that is changing the way we think and live.',
    'Take a closer look at this remarkable achievement and learn how it was made possible through dedication, hard work, and innovative thinking.',
  ];
const NewsItem =(props)=>{
    let {title, description,imgurl,newsurl,author,date,source}=props
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];

    return (
    <div className=' container-3 my-3'>
        <div className="card mx-3" style={{height:"500px"}}>
        <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:"0"
        }}>
        <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>
            <img src={!imgurl?"https://static.toiimg.com/thumb/msid-110253372,width-1070,height-580,imgsize-89884,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imgurl} className="card-img-top"    style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}...<span className="badge text-bg-success">new</span></h5>
                <p className="card-text">{description || randomText}...</p>
                <p className="card-text"><small>Updated by {!author?"Unknown":author} on <br/> {new Date(date).toGMTString()}</small></p>
                <a  rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark" style={{ position: 'absolute', bottom: '20px', right: '20px' ,transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>Read More</a>
            </div>
            </div>
        </div>
    )
  }


export default NewsItem
