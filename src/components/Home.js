import { Alert, Container, Row, Col } from 'react-bootstrap';

import splash from '../assets/madison-splash.jpg'

function Home() {
    return <div>
        <Alert variant="warning">Special thanks to PokeAPI for the data used in this assignment!</Alert>
        <Container>
            <Row>
                <Col sm={12} md={6}><img src={splash} style={{width: "100%"}} alt="View of Madison, WI"></img></Col>
                <Col sm={12} md={6}>
                    <h2>About Our Badgermon Colosseum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, dui id molestie tempus, ante turpis ultricies quam, at lobortis libero nulla convallis eros. Etiam ultricies dignissim libero, vel efficitur mi posuere id. Fusce vitae sollicitudin ipsum. Nulla luctus tortor justo, ac hendrerit nibh accumsan ac.</p>
                    <p>Praesent id metus ac lorem vulputate molestie. Fusce quis massa at libero sollicitudin vehicula id sit amet purus. Morbi ac fermentum justo. Nullam auctor diam est, sed luctus nunc maximus maximus. Suspendisse viverra elit vel nisi euismod, a posuere augue condimentum.</p>
                    <p>Curabitur elit mi, congue ac egestas sit amet, hendrerit molestie eros. Ut venenatis mauris vulputate ante commodo, eu rhoncus quam cursus. Suspendisse vitae iaculis mi. In risus massa, lacinia quis mollis quis, tincidunt sed augue. Integer at mauris eu velit consequat hendrerit. Aliquam ultrices finibus ultrices. Curabitur tincidunt diam suscipit diam fringilla condimentum. Duis non ornare urna, id imperdiet tellus.</p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Home;
