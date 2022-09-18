import React from 'react'
import './Overview.css'
import logo from "./Logo/logo.png";
function Overview() {
  return (
    <div className='mainDashboard'>
    <div className='dashboardInfo'>
        <p className='infoText'>CineElite</p>
    </div>
    <div className='dashboardContentContainer'>
    <div className='dashboardContent'>
        <div className='businessOverview'>
            <img className='businessLogo' src={logo} alt='CineElite'></img>
            <p className='overViewHeading'>Fname's Business Overview</p>
            <p className='overViewPara'>Saturday, 3 September 2022</p>
        </div>
        <div className='businessActions'>
            <div className='actionControls'>
            <div className='actionControlsCont'>
                <p className='actions'>Notifications</p>
                <p>2 unread threads</p>
                <div className='actionCount'>2</div>
            </div>
            </div>
            <div className='actionControls'>
            <div className='actionControlsCont'>
            <p className='actions'>Open Documents</p>
                <p>1 Quote, 1 Invoice</p>
                <div className='actionCount'>3</div>
            </div>
            </div>
            <div className='actionControls  needAction'>
            <div className='actionControlsCont'>
                <p>Account Status</p>
            <p className='actions'>Action Needed</p>
                <p>CEID00001</p>
            </div>
            </div>
            <div className='actionControls'>
            <div className='actionControlsCont'>
            <p className='actions'>Profile</p>
                <p>5 views / week 8 referrals</p>
                <p>80% complete</p>
            </div>
            </div>
        </div>
        <div className='businessCalendar'>
            <div className='calendarContainer'></div>
            <div className='businessUpcoming'>
                <p>Upcoming Activities</p>
            </div>
        </div>
        <div className='businessDetails'>
            <div className='businessMyInvites'></div>
            <div className='businessMykit'>
            <div className='businessMykitText'>
                <p>My Kit</p>
            </div>
            <div className='businessMykitDetails'>
            <div className='businessMykitContent'>
                <p className='businesskitHeadings'>Total Units</p>
                <p>24</p>
            </div>
            <div className='businessMykitContent'>
                <p className='businesskitHeadings'>In Use Now</p>
                <p>7</p>
            </div>
            <div className='businessMykitContent'>
                <p className='businesskitHeadings'>Selling</p>
                <p>2</p>
            </div>
            <div className='businessMykitContent'>
                <p className='businesskitHeadings'>Watchlist</p>
                <p>6</p>
            </div>
            </div>
            </div>
            <div className='businessMyInvites'>
                <div className='businessMyInviteText'>
                <p>You have invited 12</p>
                <p>industry professionals.</p>
                </div>
                <div className='businessMyInviteAction'>
                    <button className='businessInviteActionButton'>Invite More</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

  )
}

export default Overview