import React from 'react'
import '../../styles/headerStyles/_headerStyles.scss'
import { useState } from 'react'
import moment from 'moment/moment'
import Logo from '../../assets/logo.png'
import Tabs from './Tabs'
import { tabs } from './tabsData'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const [currentTime, setCurrentTime] = useState('')
    const clockFormat = moment().utcOffset("0").format("DD-MMM-YY")
    let navigate = useNavigate()

    const updateTime = () => {
        setCurrentTime(moment().utcOffset("0").format("HH:mm:ss"))
    }

    setInterval(updateTime, 1000)

  return (
    <section className='header__container'>
        <div className='header__container__left'>
            <img onClick={() => navigate('/')} src={Logo} alt='Logo' />
        </div>
        <div className='header__container__center'>
            <h3 className='header__container__center__time'>{currentTime}</h3>
            <h5 className='header__container__center__format'>{clockFormat}</h5>
        </div>
        <div className='header__container__right'>
            <button className='header__container__right__darkmode'>toggle</button>
            {
                tabs && tabs.length > 0 && tabs.map(tab => (
                    <Tabs key={tab.tabId} title={tab.tabName} link={tab.link} />
                ))
            }
        </div>
    </section>
  )
}

export default Header