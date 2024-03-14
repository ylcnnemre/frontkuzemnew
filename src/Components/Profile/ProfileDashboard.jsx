import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { getUserByIdApi } from '../../api/UserApi';
import { CircleLoader } from 'react-spinners';
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { toast } from 'react-toastify';
import ProfilePhotoTab from './ProfilePhotoTab';
import ProfileDetail from './ProfileDetail';
import ChangePasswordTab from './ChangePasswordTab';

const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [userData, setUserData] = useState()
  const [state, dispatch] = useContext(UserContext)
  const navigate = useNavigate()
  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const getUserProfileData = async () => {
    try {
      let response = await getUserByIdApi(state._id)
      setUserData(response.data)
    }
    catch (err) {
      if (err.response.status == 403) {
        navigate("/anasayfa")
      }
      toast.error(err.response.data.message, {
        autoClose: 1000
      })
    }
  }
  useEffect(() => {
    getUserProfileData()
  }, [])

  return (
    <>
      {
        !userData ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircleLoader color="#36d7b7" />
          </div>
        ) : (
          <Container fluid>
            <Row>
              <Col xxl={3} >
                <ProfilePhotoTab user={userData} setUser={setUserData} />
              </Col>
              <Col xxl={9}>
                <Card>
                  <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                    role="tablist">
                    <NavItem>
                      <NavLink
                        className={`${activeTab == "1" ? "active" : ""}`}
                        onClick={() => {
                          tabChange("1");
                        }}>
                        <i className="fas fa-home"></i>
                        Profil Detay
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#"
                        className={`${activeTab == "2" ? "active" : ""}`}
                        onClick={() => {
                          tabChange("2");
                        }}
                        type="button">
                        <i className="far fa-user"></i>
                        Parola Değiştir
                      </NavLink>
                    </NavItem>

                  </Nav>
                  <CardBody className="p-4">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <ProfileDetail user={userData} setUser={setUserData} />
                      </TabPane>
                      <TabPane tabId="2">
                        <ChangePasswordTab />
                      </TabPane>


                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )
      }
    </>
  )
}

export default ProfileDashboard