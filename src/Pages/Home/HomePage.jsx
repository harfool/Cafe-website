import React, { useState } from 'react'
import './HomePage.css'
import Header from '../Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
const HomePage = () => {
    const [Category, setCategory] = useState('all')

    return (
        <div>
            <Header/>
            <ExploreMenu setCategory={setCategory} Category={Category}/>
            
        </div>
    )
}

export default HomePage