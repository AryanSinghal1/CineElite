import React from 'react'
import './Dashboard.css'
import earn from './Logo/image 3.png';
import calendarImage from './Logo/image 9.png'
import equipImage from './Logo/support 1.png'
import billImage from './Logo/image 5.png'
import DocImage from './Logo/image 6.png'
import orderImage from './Logo/image 7.png'
import Logo from './Logo/logo.png'
function Dashboard() {
  return (
    <div className='DashboardContainer'>
    <div className='DashboardMain'>
    <div className='DashboardInfo'>
    <div className='DashboardInfoText'>
        <h2>Dashboard</h2>
        <p>Hi! Welcome Back</p>
        </div>
        <div className='DashboardSearchContainer'>
        <div className='DashboardSearch'>
            {/* <input type='text' placeholder='Search'></input> */}
            <img src={Logo} alt='logo'></img>
        </div>
        </div>
    </div>
    <div className='DashboardActions'>
    <div className='DashboardActionContainer'>
        <div className='DashboardNotifications'>
            <p>Notifications</p>
        </div>
        <div className='DashboardActionOptions'>
            <div className='DashboardActionOptionsSelect'>
            <div className='DashboardActionOptionsSelectContainer'>
            <div className='DashboardActionOptionsImage'>
                <img src={earn} alt='actionImage'></img>
            </div>
            <p>Earning</p>
            </div>
            </div>
            <div className='DashboardActionOptionsSelect'>
            <div className='DashboardActionOptionsSelectContainer'>
            <div className='DashboardActionOptionsImage'>
                <img src={calendarImage} alt='actionImage'></img>
            </div>
            <p>Calendar</p>
            </div>
            </div>
            <div className='DashboardActionOptionsSelect'>
            <div className='DashboardActionOptionsSelectContainer'>
            <div className='DashboardActionOptionsImage'>
                <img src={equipImage} alt='actionImage'></img>
            </div>
            <p>Equipment/Services</p>
            </div>
            </div>
            <div className='DashboardActionOptionsSelect'>
            <div className='DashboardActionOptionsSelectContainer'>
            <div className='DashboardActionOptionsImage'>
                <img src={billImage} alt='actionImage'></img>
            </div>
            <p>Billing</p>
            </div>
            </div>
            <div className='DashboardActionOptionsSelect'>
            <div className='DashboardActionOptionsSelectContainer'>
            <div className='DashboardActionOptionsImage'>
                <img src={DocImage} alt='actionImage'></img>
            </div>
            <p>Document</p>
            </div>
            </div>
            <div className='DashboardActionOptionsSelect'>
            <div className='DashboardActionOptionsSelectContainer'>
            <div className='DashboardActionOptionsImage'>
                <img src={orderImage} alt='actionImage'></img>
            </div>
            <p>Order</p>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</div>
  )
}

export default Dashboard