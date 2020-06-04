import React from 'react';
import {css} from 'emotion';
//import rectangle from '../img/Rectangle 2.png'

   
const image = ({ src }) => {
    return (
        <figure>
             <img className={css({
            width: '50%',
            height: '250px',
        })} src={props.src} alt={props.alt}/>
        </figure>
       
        
    ) 
}   



export default image;  