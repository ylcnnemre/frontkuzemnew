import Button from 'react-bootstrap/Button';
import "./buttonPurple.scss"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ButtonPurple = (props) => {
    return (
        <>
            <Link to={props.page}>
                <Button id='primaryButton' size='sm' style={{ backgroundColor: props.btnColor }} >
                    {props.buttonText}
                </Button>
            </Link>
        </>
    )
}
ButtonPurple.propTypes = {
    buttonText: PropTypes.string.isRequired,
    btnColor: PropTypes.any,
    page: PropTypes.string,

};
export default ButtonPurple;
