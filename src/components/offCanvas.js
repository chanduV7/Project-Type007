import { useState } from "react";
import "../styles/offCanvas.scss";

export default function OffCanvas({children,open}){

    return(
        <div className={`offCanvas-container ${open ? "offcanvas-close" : "offcanvas-open"}`}>
             {children}
        </div>
    )
}