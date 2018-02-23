import React from 'react';
import Aux from '../../hoc/Auxiliary';
import { debug } from 'util';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
); 

export default layout;