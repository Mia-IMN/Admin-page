import "./App.css";
import { useState } from "react";
import DashboardOverview from "./Components/Views/DashboardOverview/DashboardOverview";
import Navbar from "./Components/Views/Navigation/Navbar";
import Sidemenu from "./Components/Views/SideMenu/Sidemenu";

function App() {
  const [DashOpen, setDashOpen] = useState(true);
  const [AddProperty, setAddProperty] = useState(false);
  const [ManageProp, setManageProp] = useState(false);
  const [ManageAgents, setManageAgents] = useState(false);
  const [ManageAcct, setManageAcct] = useState(false);
  const [ManageStaff, setManageStaff] = useState(false);
  const [ManagePropReq, setManagePropReq] = useState(false);
  const [ManageSubscriber, setManageSubscriber] = useState(false);
  const [ManageInsp, setManageInsp] = useState(false);
  const [Message, setMessage] = useState(false);
  const [ManagePayment, setManagePayment] = useState(false);
  const [Notification, setNotification] = useState(false);
  const [Profile, setProfile] = useState(false);

  const OpenDash = () => {
    setDashOpen(true);
    setAddProperty(false);
    setManageProp(false);
    setManageAgents(false);
    setManageAcct(false);
    setManageStaff(false);
    setManagePropReq(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };

  const Property = () => {
    setAddProperty(true);
    setDashOpen(false);
    setManageProp(false);
    setManageAgents(false);
    setManageAcct(false);
    setManageStaff(false);
    setManagePropReq(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };

  const PropManager = () => {
    setManageProp(true);
    setDashOpen(false);
    setAddProperty(false);
    setManageAgents(false);
    setManageAcct(false);
    setManageStaff(false);
    setManagePropReq(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };
  const AgentManager = () => {
    setManageAgents(true);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
    setManageAcct(false);
    setManageStaff(false);
    setManagePropReq(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };
  const AcctManager = () => {
    setManageAcct(true);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
    setManageStaff(false);
    setManagePropReq(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };
  const StaffManager = () => {
    setManageStaff(true);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
    setManagePropReq(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };
  const PropReqManager = () => {
    setManagePropReq(true);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
  };
  const SubscriberManager = () => {
    setManageSubscriber(true);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
    setManagePropReq(false);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
  };
  const InspManager = () => {
    setManageInsp(true);
    setManageSubscriber(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
    setManagePropReq(false);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
  };
  const Messenger = () => {
    setMessage(true);
    setManageSubscriber(false);
    setManageInsp(false);
    setManagePayment(false);
    setNotification(false);
    setProfile(false);
    setManagePropReq(false);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
  };
  const PaymentManager = () => {
    setManagePayment(true);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setNotification(false);
    setProfile(false);
    setManagePropReq(false);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
  };
  const Notifier = () => {
    setNotification(true);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setProfile(false);
    setManagePropReq(false);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
  };
  const Profiler = () => {
    setProfile(true);
    setManageSubscriber(false);
    setManageInsp(false);
    setMessage(false);
    setManagePayment(false);
    setNotification(false);
    setManagePropReq(false);
    setManageStaff(false);
    setManageAcct(false);
    setManageAgents(false);
    setManageProp(false);
    setDashOpen(false);
    setAddProperty(false);
  };
  const username = ["Ayodele", " ", "Potatohead"];
  const firstname = username[0];
  const lastname = username[2];
  const email = username[0] + username[2] + "@gmail.com";

  const ManInspReqData = [
    {
      S: "S/N",
      N: "Name",
      P: "Phone Number",
      E: "Email Address",
      A: "Title of Property",
      D: "Date",
      T: "Time"
    },
    {
      serial: "1",
      Names: "Ayoleyi Lurogho",
      PhoneNumber: "08102914133",
      emailAddress: "johndoe@gmail.com",
      Address: "104 Fisherman Estate Marine Base PH",
      date: "11/12/2020",
      time: "10:10am",
    },
    {
      serial: "2",
      Names: "David Sampson",
      PhoneNumber: "08102914133",
      emailAddress: "davidsam@gmail.com",
      Address: "Choba, Rivers State",
      date: "11/12/2020",
      time: "12:11pm",
    },
    {
      serial: "3",
      Names: "Owutamunokiri Chiepaka",
      PhoneNumber: "08102914133",
      emailAddress: "owus267@gmail.com",
      Address: "D/Line, Rumuola, Airport Road, Rivers State",
      date: "12/12/2020",
      time: "8:00am",
    },
    {
      serial: "4",
      Names: "Miracle Ikechukwu",
      PhoneNumber: "08102914133",
      emailAddress: "miraike@gmail.com",
      Address: "Pleasure Park, Aba Road, Rivers State",
      date: "13/12/2020",
      time: "3:30pm",
    }
  ];
  const ManPropReqData = [
    {
      S: "S/N",
      N: "Name",
      P: "Phone Number",
      E: "Email Address",
      A: "Property Type",
      D: "Date",
    },
    {
      serial: "1",
      Names: "Ayoleyi Lurogho",
      PhoneNumber: "08102914133",
      emailAddress: "johndoe@gmail.com",
      Address: "Residential",
      date: "11/12/2020",
    },
    {
      serial: "2",
      Names: "David Sampson",
      PhoneNumber: "08102914133",
      emailAddress: "davidsam@gmail.com",
      Address: "Commercial",
      date: "11/12/2020",
    },
    {
      serial: "3",
      Names: "Owutamunokiri Chiepaka",
      PhoneNumber: "08102914133",
      emailAddress: "owus267@gmail.com",
      Address: "Land",
      date: "12/12/2020",
    },
    {
      serial: "4",
      Names: "Miracle Ikechukwu",
      PhoneNumber: "08102914133",
      emailAddress: "miraike@gmail.com",
      Address: "Commercial",
      date: "13/12/2020",
    }
  ];

  return (
    <div className="App">
      <Navbar firstname={firstname} Messenger={Messenger} Notifier={Notifier} Profiler={Profiler}/>
      <div className="username">Welcome {username}!</div>
      <div className="layout">
        <Sidemenu
          name={username}
          // Dashboard
          OpenDash={OpenDash}
          DashOpen={DashOpen}
          // Add Property
          Property={Property}
          AddProperty={AddProperty}
          // ManageProperty
          PropManager={PropManager}
          ManageProp={ManageProp}
          // Manage Agent
          AgentManager={AgentManager}
          ManageAgents={ManageAgents}
          // Manage Account
          AcctManager={AcctManager}
          ManageAcct={ManageAcct}
          // Manage Staff
          StaffManager={StaffManager}
          ManageStaff={ManageStaff}
          // Manage Property Request
          PropReqManager={PropReqManager}
          ManagePropReq={ManagePropReq}
          // Manage Subscriber
          SubscriberManager={SubscriberManager}
          ManageSubscriber={ManageSubscriber}
          // Manage Inspection Request
          InspManager={InspManager}
          ManageInsp={ManageInsp}
          // Message
          Messenger={Messenger}
          Message={Message}
          // Manage Payment
          PaymentManager={PaymentManager}
          ManagePayment={ManagePayment}
          // Notification
          Notifier={Notifier}
          Notification={Notification}
          // Profile
          Profiler={Profiler}
          Profile={Profile}
        />
        <DashboardOverview
          // Dashboard
          DashOpen={DashOpen}
          // Add Property
          AddProperty={AddProperty}
          // ManageProperty
          ManageProp={ManageProp}
          // Manage Agent
          ManageAgents={ManageAgents}
          // Manage Account
          ManageAcct={ManageAcct}
          // Manage Staff
          ManageStaff={ManageStaff}
          // Manage Property Request
          ManagePropReq={ManagePropReq}
          ManPropReqData={ManPropReqData}
          // Manage Subscriber
          ManageSubscriber={ManageSubscriber}
          // Manage Inspection Request
          ManageInsp={ManageInsp}
          ManInspReqData={ManInspReqData}
          // Message
          Message={Message}
          // Manage Payment
          ManagePayment={ManagePayment}
          // Notification
          Notification={Notification}
          // Profile
          Profile={Profile}
          firstname={firstname}
          lastname={lastname}
          email={email}
        />
      </div>
    </div>
  );
}

export default App;
