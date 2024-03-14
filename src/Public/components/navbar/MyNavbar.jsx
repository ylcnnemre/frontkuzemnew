import './Navbar.scss'
import Container from 'react-bootstrap/Container';
/* import Col from 'react-bootstrap/Container'; */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonPurple from '../buttons/ButtonPurple';
import { NavLink, Link } from 'react-router-dom'
/* import {useHistory} from 'react-router-dom' */
import { useTranslation } from "react-i18next"
import Dropdown from 'react-bootstrap/Dropdown';
import { TfiWorld } from "react-icons/tfi";
import Logo from "../../../assets/images/logo.png"






const MyNavbar = () => {

  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
    console.log("lang =>",lang)
    await i18n.changeLanguage(lang)
  }

  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " id='Navbar'>
      <Container fluid id='container'>
        <NavLink to="/">
          <img src={Logo} alt="logo" id='logo'
          />
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >


          <Nav className="me-auto" id='buttons' >

            <Link to="/" id='button1' >{t('Home')}</Link>
            <NavLink to="/kurumsal" id='button1'>{t('Kurumsal')} </NavLink>
            <NavLink to="/ekitap" id='button1'>{t('ebook')}</NavLink>
            <NavLink to="/egitimler" id='button1'>{t('education')}</NavLink>
            <NavLink to="/guncel" id='button1'>{t('news')}</NavLink>
            <NavLink to="/blog" id='button1'>{t('blog')}</NavLink>
            <NavLink to="/iletisim" id='button1'>{t('contact')}</NavLink>

          </Nav>


          <div className='langDiv2'>
            <Nav>
              <Container style={{ display: "flex", justifyContent: "start" }}>
                <NavLink id='buttonLog'>{t('login')}</NavLink>
                <NavLink id='buttonLog' className='ayrac'> / </NavLink>
                <NavLink id='buttonLog'>{t('signup')}</NavLink>
              </Container>
            </Nav>
            <div className='pt-2'>
              <ButtonPurple id='buttonPurple' buttonText={t('btn')}  > </ButtonPurple>
            </div>



            {/*_________________________________ dil seçme kısmı________________________________________ */}



            <Dropdown data-bs-theme="light" className='pl-5' style={{ outline: "none" }}>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent" style={{ border: "none" }} >
                <TfiWorld />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginTop: "0", padding: 0, borderRadius: "10px", maxWidth: "50%" }}>
                <div className='langDiv'>
                  <button onClick={() => clickHandle('tr')} style={{ border: "none", backgroundColor: "#7f56d9", borderRadius: "10px" }} className='dume'>Tr</button>

                  <button onClick={() => clickHandle('en')} style={{ border: "none", backgroundColor: "#7f56d9", borderRadius: "10px" }} className="mt-1 dume">En</button>

                  <button onClick={() => clickHandle('ar')} style={{ border: "none", backgroundColor: "#7f56d9", borderRadius: "10px" }} className="mt-1 dume">Ar</button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>












        </Navbar.Collapse>

      </Container>

    </Navbar>

  )
}

export default MyNavbar
