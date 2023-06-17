import React from 'react'
import '../../styles/headerStyles/_tabStyles.scss'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Tabs = ({title, link, alias}) => {

    const navigate = useNavigate()

    const handleTabRoute = () => {
        if(link){
            navigate(link)
        }
    }
  return (
    <div className='tabs__container'>
        {link ? (<button className='tabs__container__button' onClick={handleTabRoute}>{title}</button>) : (alias && (<HashLink className='tabs__container__hashLink' to={`/#${alias}`} smooth>{title}</HashLink>))}
    </div>
  )
}

export default Tabs