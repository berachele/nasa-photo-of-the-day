import React, {useState} from "react"
import {Col, Card, CardBody, Button, Collapse} from 'reactstrap';
import styled from "styled-components"

const PhotoCard = props => {

    const CardH3 = styled.h3`
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: bolder;
    `
    const ImageStyle = styled.img`
        flex-shrink: 0;
        width: 100%;
        vertical-align: middle;
        border-style:none;
        border-radius: 5px;
        box-sixing:border-box;
        margin: 1% 0 3%;
    `
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen)

    return (
        <Col sm="12" md={{size: 6, offset:3}}>
            <CardBody className="photo-card">
                <CardH3>{props.title}</CardH3>
                <ImageStyle className = "today-photo" alt = "NASA's photo of the day" src = {props.image}/>
                <div>
                    <Button color="secondary" onClick={toggle}>More Info</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                             <CardBody>{props.explain}</CardBody>
                        </Card>
                    </Collapse>
                 </div>
            </CardBody>
        </Col>
    )
}

export default PhotoCard