import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cardbox = ({ text, title, btnName, onClick }) => {



    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>onClick()}>{btnName}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cardbox;
