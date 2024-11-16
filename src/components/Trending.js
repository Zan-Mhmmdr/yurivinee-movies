import { Card, Container, Row, Col, Image } from "react-bootstrap"
import film from "../assets/images/trending/film1.jpg"
import interstellarImage from "../assets/images/trending/interstellar.webp"
import marvelImage from "../assets/images/trending/marvel.jpg"
import spidermanImage from "../assets/images/trending/spiderman.jpeg"
import toystory3Image from "../assets/images/trending/toystory3.jpg"
import worldwarzImage from "../assets/images/trending/worldwar.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">Trending Movies</h1>
                <br/>
                <Row>
                    <Col md={4} className="movie-wrapper" id="trending">
                        <Card className=" movie-image ">
                            <Image src={film} alt="Card image" className="images"
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Peaky Blinders</Card.Title>
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
                            <Image src={interstellarImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">INTERSTELLAR</Card.Title>
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
                            <Image src={marvelImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Marvel</Card.Title>
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
                            <Image src={spidermanImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Amazing Spider-Man 2</Card.Title>
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
                            <Image src={toystory3Image} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Toy Story 3</Card.Title>
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
                            <Image src={worldwarzImage} alt="Card image"className="images" 
                           />
                           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">World War Z </Card.Title>
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

export default Trending;