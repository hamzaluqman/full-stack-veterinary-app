import './App.css';

import UserManagment from './View/UserManagement';
import LoginRegistration from './Components/LoginRegistration';
import {BrowserRouter,Route,Routes,Navigate,Link} from 'react-router-dom';
import CommentsView from './View/CommentsView'
// import Reminders from './Components/Reminders'
import ConsultationView from './View/ConsultationView'
import AnimalBookingView from './View/AnimalBookingView'
import Alerts  from './View/AlertView'
import AnimalProfile from './Components/AnimalProfile';
//import UserSideBar from './Components/UserSideBar';
import AnimalMainPage from './View/AnimalMainPage';
import UserManagement from './View/UserManagement';
import ReminderView from './View/ReminderView';
import AddReminder from './Components/AddReminder';
import AddAnimalBooking from './Components/AddAnimalBooking';
import AddComments from './Components/AddComments';
import AddConsultation from './Components/AddConsultation';
import AddAnimalView from './View/AddAnimalView';
import PendingUsers from './View/PendingUsers';
import BlockedUsers from './View/BlockedUsers';
import Search from './Components/Search';
import TestReminder from './Components/TestReminder';
import New from './Components/New'
import AnimalTable from './Components/AnimalTable'
import AddNewAnimal from './Components/AddNewAnimal'
import AddAnimal from './Components/AddAnimal';

function App() {
  return (
        <BrowserRouter>
         {/* <UserSideBar></UserSideBar> */}
            <Routes>                            
                <Route exact path = "/" element = {<LoginRegistration/>} /> 
                <Route exact path = "/login" element = {<LoginRegistration/>} />                
                <Route exact path = "/users" element = {<UserManagment/>} />
                <Route exact path = "/comments" element = {<CommentsView/>} />
                <Route exact path = "/reminders" element = {<ReminderView/>} />
                <Route exact path = "/consultation" element = {<ConsultationView/>} />
                <Route exact path = "/booking" element = {<AnimalBookingView/>} />
                <Route exact path = "/alert" element = {<Alerts/>} />
                <Route exact path = "/test" element = {<AddNewAnimal/>} />
                <Route exact path = "/animals" element = {<AnimalMainPage/>} />
                <Route exact path = "/users" element = {<UserManagement/>} />
                <Route exact path = "/addanimal" element = {<AddAnimalView/>} />
                <Route exact path = "/pendinguser" element = {<PendingUsers/>} />
                <Route exact path = "/blockuser" element = {<BlockedUsers/>} />
                <Route exact path = "/addreminder" element = {<AddReminder/>} /> 
                <Route exact path = "/addanimalbooking" element = {<AddAnimalBooking/>} /> 
                <Route exact path = "/addcomments" element = {<AddComments/>} /> 
                <Route exact path = "/addconsultation" element = {<AddConsultation/>} /> 
                <Route exact path = "/addnewanimal" element = {<AddAnimal/>} /> 
                <Route exact path = "/editanimal" element = {<AnimalProfile/>} /> 
                
            </Routes>
        </BrowserRouter>    
  );
}

export default App;
