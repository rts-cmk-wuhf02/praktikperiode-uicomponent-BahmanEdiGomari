import react from 'react';
 

const Img = ({props, alt, text}) => {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
        </figure>
    )
}


export default Img;
