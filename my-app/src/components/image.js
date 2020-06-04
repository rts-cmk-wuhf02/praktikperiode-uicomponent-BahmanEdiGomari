import React from 'react';
import {css} from 'emotion';
//import rectangle from '../img/Rectangle 2.png'

   
const image = ({ src }) => {
    return (
        <img className={css({
            
            width: '50%',
            height: '250px',
            
        })} src={src} />
        
    ) 
}   



export default image;  