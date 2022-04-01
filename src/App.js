import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function About() {
  return <div>
    <Container>
      <Row>
        <Col>
          Se voce conseguiu acessar essa pagina, então o routing esta funcionando!
        </Col>
      </Row>
    </Container>
  </div>
}

function MainPage() {
  return <div>
    <Container>
      <Row>
        <Col>
          Esta é a main page!
        </Col>
      </Row>
    </Container>
  </div>
}

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="test-drive">
            Se a cor deste background não for branco então o scss esta funcionando
          </Col>
        </Row>
        <Router>
          <Row>
            <Col>
              <Link to="/">Home</Link>
            </Col>
            <Col>
              <Link to="/about">Sobre</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <MainPage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    </div>
  );
}

export default App;
