import Img from './image';
import H1  from './h1';
import Text from './Text';
import Paragraph from './paragraph';
import Writing from  './writing';

function Card() {
    return (
        <div>
            <Img src="prop /component/src/img/Rectangle 52.png" alt="image"/>
            <Writing/>
            <H1/>
            <Text/>
            <Paragraph/>
        </div>
    )
}

export default Card;