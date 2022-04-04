import React from 'react';
import { Button } from './components/Button/Button';

const App = () => {
    return (
        <div>
            <h1>inTime</h1>
           <Button type='button' 
                   size='large' 
                   theme='success' 
                   children='button' />
        </div>
    );
};

export default App;
