import React from 'react'
import '../../styles/headerStyles/_tabStyles.scss'
import { useNavigate } from 'react-router-dom'

const Tabs = ({title, link}) => {

    const navigate = useNavigate()

    const handleTabRoute = () => {
        if(link){
            navigate(link)
        }
    }
  return (
    <div className='tabs__container'>
        <button className='tabs__container__button' onClick={handleTabRoute}>{title}</button>
    </div>
  )
}

export default Tabs