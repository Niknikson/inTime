import React from 'react';
import { GrGoogle } from 'react-icons/gr';

import { Button } from './packages/design_components/Button/Button';
import IconButton from './packages/design_components/IconButton/IconButton';

const App = () => {
    return (
        <div>
            <h1>inTime</h1>
            {/* <Button type='button'
                size='small'
                theme='success'>
                {'Button'}
            </Button> */}
            <div>
                <IconButton size='small'>
                    {<GrGoogle />}
                </IconButton>
            </div>
        </div>
    );
};

export default App;
