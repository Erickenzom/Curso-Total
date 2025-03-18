import React, { useState } from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Main(){
    const [image, setImage] = useState("/Images/download.jpg")
    const [isFading, setIsFading] = useState(false)
    const [text, setText] = useState(<> </>)
    const Cont = 
    <>
        <p></p>
        <p></p>
        <a href="https://github.com/Erickenzom">Meu GitHub (Clique-me)</a>
        <br/>
        <a href="https://instagram.com/erick_enzom">Meu Instagram (Clique-me)</a>
        <br/>
        <a href="https://www.amazon.com.br">Qualquer (Clique-me)</a>
        
    </>;

    const tagGeral = 
    <>

        <p>Bem vindo ao Meu Portifólio</p>
    </>

    
    const tagHistoria = 
    <>
        <p>Prazer me chamo Erick e esse é um pequeno pedaço da minha história na programação.
        Sempre fui fascinado por tecnologia. Na adolescência, descobri a programação e, com muita dedicação, comecei a estudar. No começo foi difícil, mas não desisti e continuei praticando. Hoje, estou desenvolvendo minhas habilidades como programador e buscando novos desafios para continuar crescendo.</p>
    </>;

    const tagTrab = 
    <>
        <p>Já tive contato com varias linguagens de programação como React, Phyton, C#, JavaScript, JQuery, e algumas experiencias como Desenvolvedor Web .Hoje estou em nivel Junior porém sigo sendo um Desenvolvedor FullStack </p>
    </>;
    

    function ChangeImage (newImage, newText){
        setIsFading(true);
        setTimeout(() =>{
            setImage(newImage);
            setIsFading(false);
            setText(newText);
        },500);
    }

    return(
        <>
            <Container>
                <Row className = "center-content">                
                    <Fade>
                        <div>
                            <h1 className="fonte">Welcome To Matrix</h1>
                        </div>       
                    </Fade>
                </Row>
                <Row className = "center-content">
                    <Zoom>
                       <div>
                            <img
                                className={`earth ${isFading ? "fade-out" : "fade-in"}`}
                                onClick={()=> ChangeImage("/Images/Neo.jpeg", tagGeral)}
                                src= {image}
                            />
                       </div>
                    </Zoom>
                </Row>

                {image !== "/Images/download.jpg" &&(
                    <Fade>
                        <Row>
                            <Col>
                                <Button
                                    variant ="info"
                                    className="large-button"
                                    onClick={()=> ChangeImage("/Images/download2.png", tagHistoria)}
                                    block
                                    >
                                        HISTÓRIA
                                </Button>
                            </Col>

                            <Col>
                                <Button
                                    variant="danger"
                                    className="large-button"
                                    onClick={()=> ChangeImage("/Images/Codi.jpg",tagTrab)}
                                    block
                                >
                                    TRABALHO
                                </Button>
                            </Col>

                            <Col>
                                <Button
                                    variant="warning"
                                    className="large-button"
                                    onClick={()=> ChangeImage("/Images/Redes.jpg",Cont)}
                                    block
                                >
                                    CONTATO
                                </Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="black-background">
                            <Col className="description-text">{text}</Col>
                        </Row>
                    </Fade>
                )}
                </Container>
        </>
    
    );
}