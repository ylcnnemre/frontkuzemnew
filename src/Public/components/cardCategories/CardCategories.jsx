import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import "./index.scss"


const CardCatagories = (props) => {
    return (
        <Card id='card'>
            <Card.Body id='cardBody'>

                <img src={props.img} alt="" id='imgCard' />

                <Card.Title id='cardTitle'>{props.text} </Card.Title>
            </Card.Body>
        </Card>
    )
}
CardCatagories.propTypes = {
    text: PropTypes.string.isRequired,
    img: PropTypes.any.isRequired
}

export default CardCatagories;
