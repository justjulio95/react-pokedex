import React from "react";
import { Container, Card } from "react-bootstrap";

function Home() {
  return(
    <Container>
      <div className="mt-5">
        <h1 className="text-center">Welcome to your Pokedex</h1>
        <p className="text-center">This Pokedex is currently updated with all your favorite Pokemon from the Kanto region to the Galar region!</p>
        <p className="text-center">For now, all you can do is look up your favorite pokemon for some base stats, but give it some time, you may be able to do a lot more...</p>
      </div>

      <div>
        <Card className="bg-secondary">
          <Card.Body className="d-flex justify-content-around">
            <div>
              <a href="/"><h1>Full Pokedex</h1></a>
            </div>
            <div>
              <h1>Random Pokemon</h1>
            </div>
            <div>
              <h1>Search By Name?</h1>
            </div>
            <div>
              <h1>Search By Number?</h1>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default Home;