import { Card, Container, Row, Col, Image } from "react-bootstrap"
import dddImage from "../assets/images/anime/dandadan.jpg"
import onkImage from "../assets/images/anime/onk.jpeg"
import frierenImage from "../assets/images/anime/frieren.jpg"
import jjks2Image from "../assets/images/anime/jjks2.jpeg"
import mtImage from "../assets/images/anime/mt.webp"
import coteImage from "../assets/images/anime/cote.jpg"

const Anime = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">Anime</h1>
                <br/>
                <Row>
                    <Col md={4} className="movie-wrapper" id="anime">
                        <Card className=" movie-image ">
                            <Image src={onkImage} alt="Card image" className="images"
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Oshi no Ko S2</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional   content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>

                           </div>
 
                        </Card>

                    </Col>
                    <Col md={4} className="movie-wrapper ">
                        <Card className=" movie-image ">
                            <Image src={dddImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dandadan</Card.Title>
                                    <Card.Text className="text-left">
                                    After being aggressively rejected, Momo Ayase finds herself sulking when she stumbles across a boy being bullied.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>

                           </div>
 
                        </Card>

                    </Col>
                    <Col md={4} className="movie-wrapper ">
                        <Card className=" movie-image ">
                            <Image src={frierenImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Sousou no Frieren</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional   content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>

                           </div>
 
                        </Card>

                    </Col>
                    <Col md={4} className="movie-wrapper ">
                        <Card className=" movie-image ">
                            <Image src={jjks2Image} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Jujutsu Kaisen, Shibuya Arc</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional   content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>

                           </div>
 
                        </Card>

                    </Col>
                    <Col md={4} className="movie-wrapper ">
                        <Card className=" movie-image ">
                            <Image src={mtImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Mushoku Tensei</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional   content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>

                           </div>
 
                        </Card>

                    </Col>
                    <Col md={4} className="movie-wrapper ">
                        <Card className=" movie-image ">
                            <Image src={coteImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Classroom of The Elite S4</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional   content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>

                           </div>
 
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Anime;