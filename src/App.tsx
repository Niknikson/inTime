import React from 'react';
import { GrGoogle } from 'react-icons/gr';

import { Button } from './packages/design_components/Button/Button';
import Checkbox from './packages/design_components/Checkbox/Checkbox';
import FullwidthButton from './packages/design_components/FullwidthButton/FullwidthButton';
import IconButton from './packages/design_components/IconButton/IconButton';
import Input from './packages/design_components/Input/Input';

const App = () => {

    return (
        <div>
            <h1>inTime</h1>
                <Button type='button'
                    size='large'
                    theme='success'>
                    {'Button'}
                </Button>
                <IconButton size='large'>
                    {<GrGoogle />}
                </IconButton>
                <FullwidthButton type="button" size='large' theme='success'>
                    {Button}
                </FullwidthButton>
            <Input type="text" 
                   value="value" 
                   Icon={GrGoogle}
                   span='text'
                   placeholder="input text" 
                   size='large' />
            <Checkbox />
        </div>
    );
};

export default App;
