import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Header from './Header/Header';
import { Route, Routes} from 'react-router-dom';
import BillingAR from './Billing-AR/BillingAR';
import PreAuthorization from './Pre Authorization/PreAuthorization'
import Physician from './Physician/Physician'
import UserManagement from './User Management/UserManagement'
import Practise from './Practise/Practise'
import NoPage from './NoPage/NoPage';
import CoPayment from './CoPayment/CoPayment';
import ClaimNoDetail from './Billing-AR/ClaimNoDetails/ClaimNoDetail';
import Login from './User authentication/Login';
import Profile from './Billing-AR/Profile/Profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/Login' element={<Login/>}/>
        <Route path='/BillingAR' element={<BillingAR/>}/>
        <Route path='/BillingAR/Profile' element={<Profile/>}/>
        <Route path='/:claimNo' element={<ClaimNoDetail/>} />
        <Route path='FreeAuthorization' element={<PreAuthorization/>}/>
        <Route path='Physician' element={<Physician/>}/>
        <Route path='CoPayment' element={<CoPayment/>}/>
        <Route path='Practise' element={<Practise/>}/>
        <Route path='UserManagement' element={<UserManagement/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}
export default App;
