
export default function Division({categories,canvas,handleClick}){
    // console.log(categories);
    // console.log(handleClick)
     console.log('canvas',canvas)
    return(
        <div className="division-container">
         {
                categories.length &&  categories.map((e,i) => {
                return(
                    <div key={e.id} 
                    onMouseOver={() => handleClick(i)} 
                    className={`categories ${e.name.split(" ")[0]}`} 
                    style={
                         canvas ?
                           {backgroundImage: `url(${e.imgpath})`} 
                           :
                           {backgroundImage: "none"}
                           }>
                        <div className="categories-content">
                          <h4>{e.name}</h4>
                          <p>{e.desc}</p>
                         </div>
                      
                    </div>
                )
             })  
            }
          
        </div>
    )
}