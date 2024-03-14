
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import './index.scss'

const StudentOpinionsCard = (props) => {
    return (
        <Card className='xyz000'>
            <Card.Body id='body'>
                <Col id='column' style={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                    <div> <img src={props.img} alt="" className='img' style={{ height: '45px', marginRight: '10px' }} /></div>
                    <div> <Card.Title className='name pt-4' >{props.name}</Card.Title></div>
                </Col>




                <Card.Text className='pt-4 text' style={{ color: '#7E7EAA' }}>
                    {props.text}

                </Card.Text>
                <img src="../src/assets/images/voteStars.png" alt="" className='pt-3 vote' />
            </Card.Body>
        </Card>
    )
};
StudentOpinionsCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default StudentOpinionsCard
