import React from 'react'
import Nexus from "./views/Nexus";

import { IoMdBook, } from 'react-icons/io'

const routes = [{
    path: '/nexus',
    name: 'Nexus Compiler',
    icon: < IoMdBook size={25}
        style={
            { color: '#fff' }}
    />,
    component: Nexus
}]

export default routes;