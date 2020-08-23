import React from "react"

export default function BlogCard(props){
    console.log(props)

    // let date = props.blog.pubDate
    // let blip = props.blog.content.replace("<p>", "").replace("</p>", "")
    //  let blip = DOMParser.parseFromString(props.blog.content, 'text/html')
    function getContent(content){
       const array = content.split("<p>")
        // function getStart(){
        //     let num = 0
        //     array.forEach((x, i) => {
        //         if(x === "p"){
        //             return num = i
        //         }
        //     })
        //     return num
        // }
        
        return array[1].substring(0, 180) + "..."
        // return content.substring(getStart(), getStart()+100)
    }
    return (
        <div className="blog-card">
            <div className="blog-card-img-div" style={{backgroundImage: `url(${props.blog.thumbnail})`}}>
                {/* <img src={props.blog.thumbnail} /> */}

            </div>
            <div className="blog-card-body">
                <h4>{props.blog.title}</h4>
                <p>{props.blog.pubDate.substring(0,10)}</p>
                <p>{getContent(props.blog.description)}</p>
            </div>
            
        </div>
    )
}