import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return(
    <Container>
      <div className="mt-5">
        <h1 className="text-center">Welcome to your Pokedex</h1>
        <p className="text-center">This Pokedex is currently updated with all your favorite Pokemon from the Kanto region to the Galar region!</p>
        <p className="text-center">For now, all you can do is look up your favorite pokemon for some base stats, but give it some time, you may be able to do a lot more...</p>
      </div>
    </Container>
  )
}

export default Home;