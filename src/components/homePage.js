import Division from "./division";
import "../styles/division.scss";
import "../styles/homePage.scss";
import {HiOutlineMenuAlt2} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import { useRef, useState } from "react";
import OffCanvas from "./offCanvas";
export default function HomePage() {
    const [open, setOpen] = useState(true)
    const [canvas, setCanvas] = useState(false)
    const [content, setContent] = useState()
    // const [background, setBackground] = useState({
    //     backgroundImage: "",
    //     zIndex: 100,
        
    // });
    const [background, setBackground] = useState("");
    // const bodyRef = useRef(null);
    const categories =[
        {
            id: 1,
            name: "FMCG",
            desc: " iFuture Globistic is engaged in manufacturing, trading and exporting a wide range of FMCG and Agro products.",
            imgpath: "https://www.ifutureglobistic.com/assets/images/Mobile/fmcg-banner-img.jpg",
            tagline : "(Fast Moving Consumer Goods)"
        },
        {
            id: 2,
            name: "Technology",
            desc:" iFuture Globistic has stepped into Technology with a vision to develop innovative products and provide IT solutions.",
            imgpath: "https://www.ifutureglobistic.com/assets/images/Mobile/technology-banner-img.jpg"
        },
        {
            id: 3,
            name: "Agro Farming",
            desc:" We are a natural farming company with end to end expertise in natural farming, including plantation development, agriculture and supply",
            imgpath: "https://www.ifutureglobistic.com/assets/images/Mobile/agro-banner-img.jpg"
        },
        {
            id: 4,
            name: "Engineering",
            desc: " We have highly sophisticated fabrication unit setup for all kinds of fabrication services.",
            imgpath: "https://www.ifutureglobistic.com/assets/images/Mobile/engineering-banner-img.jpg"
        }
    ]
    const bgImgs = [
        {
            imgpath: "https://www.ifutureglobistic.com/assets/images/banner/fmcg.jpg"
        },
        {
            imgpath:"https://www.ifutureglobistic.com/assets/images/banner/technology.jpg"
        },
        {
            imgpath:"https://www.ifutureglobistic.com/assets/images/banner/agro-farming.jpg"
        },
        {
            imgpath:"https://www.ifutureglobistic.com/assets/images/banner/engineering.jpg"
        }
    ];

    function buttonChange(){
        setOpen(!open)
    }

    // function handleClick(index){
    //    setBackground(...background,
    //        ...{
    //            backgroundImage : bgImgs[index].imgpath
    //        })
    // }
    function handleClick(index){
        setBackground(bgImgs[index].imgpath)
        setCanvas(!canvas)
     }
     
    return(
        <div>
         {
          open ?
         (
            <div style={{backgroundImage: `url(${background})`}} className="homePage-container">
            <Division categories={categories} canvas={canvas} handleClick={handleClick}/>
            <div className="logo">
                <img src="https://www.ifutureglobistic.com/assets/images/logo-white.svg"/>
            </div>
            <button onClick={() => buttonChange()}>
                <HiOutlineMenuAlt2/>
            </button>
        </div>
         )
             :
          (
            <div className="flipPage-container">
            <div className="flipPage-part1">
               <OffCanvas open={open} >
               <div className="flipPage-part1-index">
                   <ul>
                       <li>FMCG</li>
                       <li>TECHNOLOGY</li>
                       <li>AGRO FARMING</li>
                       <li>ENGINEERING</li>
                   </ul>
               </div>
               </OffCanvas>
              
               <div className="flipPage-part1-map">
                   <img src="https://www.ifutureglobistic.com/assets/images/map.jpg"/>
               </div>
               <div className="flipPage-part1-logo">
                   <div>
                     <img src="https://www.ifutureglobistic.com/assets/images/logo-white.svg"/>
                   </div>
              </div>
               <div className="flipPage-part1-address">
                  <p>CORPORATE OFFICE:
                     #39-22-18/5, FIRST FLOOR,PARK ENCLAVE,
                      MADHAVADHARA, VISAKHAPATNAM, 
                      ANDHRA PRADESH - 530007</p>
               </div>
            </div>
            <div className="flipPage-part2">
            <button className="btn-close" onClick={() => buttonChange()}>
                <AiOutlineClose/>
            </button>
                 <ul>
                   <li>About</li>
                   <li>Our Products</li>
                   <li>Services</li>
                   <li>Blog</li>
                   <li>Careers</li>
                   <li>Contact</li>
                 </ul>
            </div>
       </div>
          )
        }
        </div>
    )
}