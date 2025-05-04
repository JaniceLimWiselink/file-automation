import React from 'react'
import { IoMdBook } from 'react-icons/io'
import { 
    BurstMode as BurstModeIcon,
    Compare as CompareIcon,
    WbSunny as WbSunnyIcon,
    Email as EmailIcon,
    AccessTimeOutlined as AccessTimeIcon
} from '@mui/icons-material'

import Nexus from "./views/Nexus"
import Compare from './views/Compare'
import Compile from './views/Compile'
import PlexusForecast from './views/PlexusForecast'
import JabilForecast from './views/JabilForecast'
import Rescheduler from './views/Rescheduler'
import QuotationCompare from './views/QuotationCompare'
import QuotationCompile from './views/QuotationCompile'

const routes = [
    {
        path: '/plexus/jit',
        name: 'JIT Program',
        icon: <IoMdBook size={25} style={{ color: '#fff' }} />,
        component: Nexus
    },
    {
        path: '/plexus/forecast',
        name: 'Forecast',
        icon: <WbSunnyIcon size={25} style={{ color: '#fff' }}
        />,
        component: PlexusForecast
    },
    {
        path: '/plexus/email',
        name: 'Email',
        icon: <EmailIcon size={25} style={{ color: '#fff' }}
        />,
        component: PlexusForecast
    },
    {
        path: '/jabil/forecast',
        name: 'Forecast',
        icon: <WbSunnyIcon size={25} style={{ color: '#fff' }}
        />,
        component: JabilForecast
    },
    {
        path: '/ecommerce/online-stock-pricing',
        name: 'Online Stock Pricing',
        icon: <CompareIcon size={25} style={{ color: '#fff' }}
        />,
        component: Compare
    },
    {
        path: '/ecommerce/compile',
        name: 'Compile',
        icon: <BurstModeIcon size={25} style={{ color: '#fff' }}
        />,
        component: Compile
    },
    {
        path: '/admin/reschedule',
        name: 'Reschedule',
        icon: <AccessTimeIcon size={25} style={{ color: '#fff' }}
        />,
        component: Rescheduler
    },
    {
        path: '/admin/transfer-quotation',
        name: 'Transfer Quotation',
        icon: <IoMdBook size={25} style={{ color: '#fff' }}
        />,
        component: QuotationCompare
    },
    {
        path: '/admin/input-supplier-price',
        name: 'Input Supplier Price',
        icon: <IoMdBook size={25} style={{ color: '#fff' }}
        />,
        component: QuotationCompile
    },
    
]

export default routes;