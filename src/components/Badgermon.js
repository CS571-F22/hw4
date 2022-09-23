import { useCallback } from 'react';
import { Card, Table, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

function Badgermon(props) {

    const interceptButtonAction = useCallback(() => {
        if (props.badgermon.uuid) {
            // This is a unique badgermon... preserve its identity!
            props.buttonAction({...props.badgermon});
        } else {
            // This is a generic badgermon... generate a new UUID for it!
            props.buttonAction({...props.badgermon, uuid: uuidv4()});
        }
    }, [props]);

    return <Card style={{ marginTop: "1rem" }}>
        <Card.Img variant="top" src={props.badgermon.img} alt="Picture of Badgermon" />
        <Card.Body>
            <Card.Title>{props.badgermon.name}</Card.Title>
            <Table>
                <tbody>
                    <tr>
                        <td>Weight</td>
                        <td>{props.badgermon.weight} kg</td>
                    </tr>
                    <tr>
                        <td>Types</td>
                        <td>{props.badgermon.types.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Stats</td>
                        <td>{props.badgermon.stats.hp}HP {props.badgermon.stats.attack}AT {props.badgermon.stats.defense}DF</td>
                    </tr>
                </tbody>
            </Table>
        </Card.Body>
        <Card.Footer>
            <Button
                variant={props.buttonVariant}
                onClick={interceptButtonAction}>
                    {props.buttonText}
            </Button>
        </Card.Footer>
    </Card>
}

export default Badgermon;
