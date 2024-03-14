import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Proptypes from 'prop-types'


import './index.scss'
import { useTranslation } from 'react-i18next';
import ButtonPurple from '../buttons/ButtonPurple';

const CardBlog = (props) => {

    const { t } = useTranslation();
    return (
        <div >
            <Card style={{ width: '95%', minHeight: '450px', maxHeight: '450px' }} id='Card'>
                <Card.Img variant="top" src={props.img} />
                <Card.Body style={{ paddingTop: '0' }}>
                    <Card.Title id='title'>{props.title}</Card.Title>
                    <Card.Text id='content'>
                        {props.content}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                </ListGroup>
                <Card.Body style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '70px' }}>
                    <Card.Text id='date'>{props.date}</Card.Text>
                    <ButtonPurple buttonText={t("btnxx")} page={props.page} ></ButtonPurple>
                </Card.Body>
            </Card>
        </div>
    )
};

CardBlog.propTypes = {
    title: Proptypes.string,
    content: Proptypes.string,
    date: Proptypes.string,
    img: Proptypes.any,
    page: Proptypes.string,

}

export default CardBlog
