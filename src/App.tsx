import React from 'react';
import Button from './components/Button/Button';

const App = () => {
    return (
        <div>
            <h1>inTime</h1>
            <Button
                border="3px solid #218294"
                backgroundColor="#fff"
                color="#218294"
                height="60px"
                onClick={() => console.log("You clicked on the pink circle!")}
                radius="none"
                width="250px"
                children="Button"
                fontSize="30px" 
                textDecoration="none"
                display="block"
                lineHeight="60px"
                fontFamily="Arial, sans-serif"
            />
        </div>
    );
};

export default App;
