import React from 'react';
import { GrGoogle } from 'react-icons/gr';

import { Button } from './packages/design_components/Button/Button';
import FullwidthButton from './packages/design_components/FullwidthButton/FullwidthButton';
import IconButton from './packages/design_components/IconButton/IconButton';

const App = () => {
    return (
        <div>
            <h1>inTime</h1>
            <div>
                <Button type='button'
                    size='large'
                    theme='success'>
                    {'Button'}
                </Button>
            </div>
            <div>
                <IconButton size='large'>
                    {<GrGoogle />}
                </IconButton>
            </div>
            <div>
                <FullwidthButton type="button" size='large' theme='success' fullwidth>
                    {Button}
                </FullwidthButton>
            </div>
        </div>
    );
};

export default App;
