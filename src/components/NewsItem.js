import React from 'react'

//export class NewsItem extends Component {
const NewsItem =(props)=>{
  //render() {
    let {title,description,imageUrl,newsUrl,author,date,source}= props;
    const truncateDescription = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
    const truncateTitle = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
  
    const maxLength = 100;
    return (
      <div className="my-1">
        <div className="card" >
          <div style={{display:'flex',
           justifyContent:'flex-end',
          position:'absolute',
        right:'0'}}><span className=" badge rounded-pill bg-dark" style={{left:'90%', zIndex:'1'}}>{source}</span></div>
          
        <img src={!imageUrl?"https://media.npr.org/assets/img/2023/08/23/gettyimages-1246380465_wide-988ee4aed30ae3694625fabeee293896dfe60421-s1400-c100.jpg":imageUrl}className="card-img-top" alt="..." style={{height:'200px'}}/>
            <div className="card-body"style={{height:'360px', borderColor:'#87CEEB', borderWidth:'5px', borderRadius:'15px'}}>
                <h5 className="card-title" style={{color:'#0F52BA'}}>{truncateTitle(title, maxLength)}</h5>
                <p className="card-text">{truncateDescription(description, maxLength)}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="beautiful-button">Read More</a>
            </div>
        </div>
    </div>
    ) 
  }


export default NewsItem
