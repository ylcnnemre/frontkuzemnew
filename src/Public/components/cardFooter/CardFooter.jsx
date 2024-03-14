import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./index.scss"
import PropTypes from 'prop-types';

const CardFooter = (props) => {
    return (

        <Card className='card' style={{ visibility: `${props.visibility}` }}>
            <Row>
                <Col className='col1' >
                    <img src={props.section} alt='' id='img'></img>

                </Col>
                <Col className='col2'>
                    <p className='p1 pt-3'>{props.number}</p>
                    <p className='p2'>{props.catagorie}</p>
                </Col>
            </Row> </Card>

    )
}


CardFooter.propTypes = {
    section: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    catagorie: PropTypes.string,
    visibility: PropTypes.string,
}
export default CardFooter
