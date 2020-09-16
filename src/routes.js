import React from 'react'
import Nexus from "./views/Nexus";
import Compare from './views/Compare';
import Compile from './views/Compile';

import { IoMdBook, } from 'react-icons/io'
import BurstModeIcon from '@material-ui/icons/BurstMode';
import CompareIcon from '@material-ui/icons/Compare';

const routes = [
    {
        path: '/file-automation/plexus',
        name: 'Plexus Compiler',
        icon: <IoMdBook size={25} style={{ color: '#fff' }} />,
        component: Nexus
    },
    {
        path: '/file-automation/compare',
        name: 'Compare',
        icon: <CompareIcon size={25} style={{ color: '#fff' }}
        />,
        component: Compare
    },
    {
        path: '/file-automation/compile',
        name: 'Compile',
        icon: <BurstModeIcon size={25} style={{ color: '#fff' }}
        />,
        component: Compile
    }
]

export default routes;