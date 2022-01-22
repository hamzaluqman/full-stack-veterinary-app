import * as FaIcons from 'react-icons/fa';
import './UserSideBar.css'
import { Link } from 'react-router-dom';

const UserSideBar = () => {
    return (
        
        <div className = "side-bar" >
        
         <br/><br/>
          <Link to='/users'>
            <div className="current-user">
                <div className = "current-user-icon">
                     <FaIcons.FaUsers size = '0.9cm' /> </div> 
                     <span className ='current-user-text'> Current Users</span> </div>
          </Link>

          <Link to='/pendinguser'>
                <div className="pending-request">
                    <div className = "pending-request-icon"> <FaIcons.FaUserPlus size = '0.9cm' /> </div>
                    <span className ='pending-request-text'>Pending Requests </span> </div>
          </Link>
          
          <Link to='/blockuser'>
                <div className="blocked-user"> 
                    <div className = "blocked-users-icon"> <FaIcons.FaUserSlash size = '0.9cm' /> </div>
                    <span className ='blocked-users-text'>Blocked Users </span> </div>
         </Link>
        
        </div>
    
    )
}

export default UserSideBar
