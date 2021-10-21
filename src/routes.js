import React from 'react'
import Nexus from "./views/Nexus";
import Compare from './views/Compare';
import Compile from './views/Compile';
import PlexusForecast from './views/PlexusForecast';
import JabilForecast from './views/JabilForecast';

import { IoMdBook, } from 'react-icons/io'
import BurstModeIcon from '@material-ui/icons/BurstMode';
import CompareIcon from '@material-ui/icons/Compare';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EmailIcon from '@material-ui/icons/Email';
import Rescheduler from './views/Rescheduler';

const routes = [
    {
        path: '/file-automation/plexus/jit',
        name: 'JIT Program',
        icon: <IoMdBook size={25} style={{ color: '#fff' }} />,
        component: Nexus
    },
    {
        path: '/file-automation/plexus/forecast',
        name: 'Forecast',
        icon: <WbSunnyIcon size={25} style={{ color: '#fff' }}
        />,
        component: PlexusForecast
    },
    {
        path: '/file-automation/plexus/email',
        name: 'Email',
        icon: <EmailIcon size={25} style={{ color: '#fff' }}
        />,
        component: PlexusForecast
    },
    {
        path: '/file-automation/jabil/forecast',
        name: 'Forecast',
        icon: <WbSunnyIcon size={25} style={{ color: '#fff' }}
        />,
        component: JabilForecast
    },
    {
        path: '/file-automation/ecommerce/compare',
        name: 'Compare',
        icon: <CompareIcon size={25} style={{ color: '#fff' }}
        />,
        component: Compare
    },
    {
        path: '/file-automation/ecommerce/compile',
        name: 'Compile',
        icon: <BurstModeIcon size={25} style={{ color: '#fff' }}
        />,
        component: Compile
    },
    {
        path: '/file-automation/ecommerce/reschedule',
        name: 'Reschedule',
        icon: <BurstModeIcon size={25} style={{ color: '#fff' }}
        />,
        component: Rescheduler
    },
    
    
]

export default routes;