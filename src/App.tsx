import React from 'react';
import { Button } from './components/Button/Button';

const App = () => {
    return (
        <div>
            <h1>inTime</h1>
           <Button icon="fa fa-user fa-lg fa-fw" 
                   type='button' 
                   size='large' 
                   theme='success' 
                   children='button' />
        </div>
    );
};

export default App;
