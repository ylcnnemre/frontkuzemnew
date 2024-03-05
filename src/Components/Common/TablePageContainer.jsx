import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import BreadCrumb from "./BreadCrumb";

const TablePageContainer = ({ title, children }) => {
    return (
        <React.Fragment>

            <Container fluid>
                <BreadCrumb title={title} pageTitle="Kuzem" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <CardHeader>
                                <h4 className="card-title mb-0 flex-grow-1">{title} Sayfası</h4>
                            </CardHeader>
                            <CardBody>
                                <div id="table-gridjs">{children}</div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    );
};

TablePageContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default TablePageContainer;
