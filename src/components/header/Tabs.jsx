import React from 'react'
import '../../styles/headerStyles/_tabStyles.scss'

const Tabs = ({title, link}) => {

    const handleTabRoute = () => {
        console.log(link)
    }
  return (
    <div className='tabs__container'>
        <button className='tabs__container__button' onClick={handleTabRoute}>{title}</button>
    </div>
  )
}

export default Tabs