import axios from "axios";
import React, { useEffect, useState } from "react";
import SignupUserCard from "./SignupUserCard";
import logo from '../Logo/logo.png'

const SignupUsers = () => {
  const [data, setData] = useState();
  const [view, setView] = useState(false);
  const [currUser, setCurrUser] = useState({});
  const [refUser, setRefUser] = useState({});
  const getData = async () => {
    let data = await axios.get("/api/admlogin");
    const unregisteredData = data.data.filter((e) => {
      return e.registered == false;
    });
    setData(unregisteredData);
  };
  useEffect(() => {
    getData();
  }, []);
  var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  const handleView = async (e)=>{
    let data = await axios.get("/api/admlogin");
    const refer = data.data.filter(x=>x._id==e.refBy);
    refer?.map((e)=>{setRefUser(e)});
    setCurrUser(e);
    setView(true);
  }
  const handleAccept = async() =>{
    await axios.post('/api/admVerify',{"email":currUser.email}).then((e)=>{setView(false);getData()})
  }
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
        {view && currUser.role==1 && <div className="absolute h-screen w-screen bg-black/20 flex justify-center items-center"><div className="w-1/4 h-4/5 bg-white rounded-lg flex justify-center items-center">
        <div className=" w-[90%] h-[95%] flex flex-col">
          <div className="h-[10%] w-full">
            <div className="h-[70%] w-full items-center flex">
            <p className="font-bold text-xl">Cine Elite</p>
            <img className="w-8 h-8 mx-5" src={logo}></img>
            </div>
            <div className="h-[30%] w-full items-center flex">
            <p className="text-xs text-slate-500">Referred By:</p>
            <p>{refUser.fname}</p>
            </div>
          </div>
          <div className="h-[90%] w-full flex flex-col justify-between items-center">
            <div className="h-[8%] w-full flex justify-between items-center">
              <p className="text-xs">Company Name</p>
              <input className="w-[60%] h-[80%] rounded-md text-sm" type="text" value={currUser.companyName}></input>
            </div>
            <div className="h-[12.5%] w-full flex justify-between items-center">
              <div className="h-full w-1/2">
                <p className="text-xs">First Name</p>
                <input className="w-[90%] h-1/2 rounded-md text-sm" type="text" value={currUser.fname}></input>
              </div>
              <div className="h-full w-[45%]">
                <p className="text-xs">Last Name</p>
                <input className="w-full h-1/2 rounded-md text-sm" type="text" value={currUser.lname}></input>
              </div>
            </div>
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Email</p>
                <input className="w-full h-1/2 rounded-md text-sm" type="text" value={currUser.email}></input>
            </div>
            <div className="h-[12.5%] w-full flex justify-between items-center">
              <div className="h-full w-1/2">
                <p className="text-xs">Contact No</p>
                <input className="w-[90%] h-1/2 rounded-md text-sm" type="text" value={currUser.mobile}></input>
              </div>
              <div className="h-full w-[45%]">
                <p className="text-xs">VAT/TAX No</p>
                <input className="w-full h-1/2 rounded-md text-sm" type="text" value={currUser.vatTaxNumber}></input>
              </div>
            </div>
            
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Billing Address</p>
                <input className="w-full h-1/2 rounded-md text-sm" type="text" value={currUser.address}></input>
            </div>
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Company Info</p>
                <input className="w-full h-1/2 rounded-md text-sm" type="text" value={currUser.introduction}></input>
            </div>
            <div className="h-[19.5%] w-full rounded-md border border-slate-500 flex flex-col items-center">
              <div className="h-1/3 w-[95%] flex justify-between items-center text-xs">
                <p>Business Registration</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
</div>
              <div className="h-1/3 w-[95%] flex justify-between items-center text-xs"><p>Profile Photo</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg></div>
              <div className="h-1/3 w-[95%] flex justify-between items-center text-xs"><p>Company Logo</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg></div>
            </div>
            <div className="h-[10%] w-full flex justify-between items-center">
              <button className="px-10 py-1 border border-slate-500 rounded-md font-bold" onClick={()=>{setView(false)}}>Reject</button>
              <button className="px-10 py-1 border rounded-md bg-yellow-300 font-bold" onClick={()=>{handleAccept()}}>Accept</button>
            </div>
          </div>
        </div>
        </div>
        </div>}
        {view && currUser.role==2 && <div className="absolute h-screen w-screen bg-black/20 flex justify-center items-center"><div className="w-1/4 h-4/5 bg-white rounded-lg flex justify-center items-center">
        <div className=" w-[90%] h-[95%] flex flex-col">
          <div className="h-[10%] w-full">
            <div className="h-[70%] w-full items-center flex">
            <p className="font-bold text-xl">Cine Elite</p>
            <img className="w-8 h-8 mx-5" src={logo}></img>
            </div>
            <div className="h-[30%] w-full items-center flex">
            <p className="text-xs text-slate-500">Referred By:</p>
            <p>{refUser.fname}</p>
            </div>
          </div>
          <div className="h-[90%] w-full flex flex-col justify-between items-center">
            <div className="h-[8%] w-full flex justify-between items-center">
              <p className="text-xs">Company Name</p>
              <input className="w-[60%] h-[80%] rounded-md text-xs" type="text" value={currUser.companyName}></input>
            </div>
            <div className="h-[12.5%] w-full flex justify-between items-center">
              <div className="h-full w-1/2">
                <p className="text-xs">First Name</p>
                <input className="w-[90%] h-1/2 rounded-md text-xs" type="text" value={currUser.fname}></input>
              </div>
              <div className="h-full w-[45%]">
                <p className="text-xs">Last Name</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.lname}></input>
              </div>
            </div>
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Email</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.email}></input>
            </div>
            <div className="h-[12.5%] w-full flex justify-between items-center">
              <div className="h-full w-1/2">
                <p className="text-xs">Contact No</p>
                <input className="w-[90%] h-1/2 rounded-md text-xs" type="text" value={currUser.mobile}></input>
              </div>
              <div className="h-full w-[45%]">
                <p className="text-xs">VAT/TAX No</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.vatTaxNumber}></input>
              </div>
            </div>
            
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Billing Address</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.address}></input>
            </div>
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Company Info</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.introduction}></input>
            </div>
            <div className="h-[12.5%] w-full rounded-md border border-slate-500 flex flex-col items-center justify-around">
                <div className="h-1/3 w-[95%] flex justify-between items-center text-xs">
                <p>Business Registration</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
</div>
              <div className="h-1/3 w-[95%] flex justify-between items-center text-xs">
                <p>Company Logo</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
</div>
            </div>
            <div className="h-[10%] w-full flex justify-between items-center">
              <button className="px-10 py-1 border border-slate-500 rounded-md font-bold" onClick={()=>{setView(false)}}>Reject</button>
              <button className="px-10 py-1 border rounded-md bg-yellow-300 font-bold" onClick={()=>{handleAccept()}}>Accept</button>
            </div>
          </div>
        </div>
        </div>
        </div>}
      {view && currUser.role==0&& <div className="absolute h-screen w-screen bg-black/20 flex justify-center items-center"><div className="w-1/4 h-4/5 bg-white rounded-lg flex justify-center items-center">
        <div className=" w-[90%] h-[95%] flex flex-col">
          <div className="h-[10%] w-full">
            <div className="h-[70%] w-full items-center flex">
            <p className="font-bold text-xl">Cine Elite</p>
            <img className="w-8 h-8 mx-5" src={logo}></img>
            </div>
            <div className="h-[30%] w-full items-center flex">
            <p className="text-xs text-slate-500">Referred By:</p>
            <p>{refUser.fname}</p>
            </div>
          </div>
          <div className="h-[90%] w-full flex flex-col justify-between items-center">
            <div className="h-[12.5%] w-full flex justify-between items-center">
              <div className="h-full w-1/2">
                <p className="text-xs">First Name</p>
                <input className="w-[90%] h-1/2 rounded-md text-xs" type="text" value={currUser.fname}></input>
              </div>
              <div className="h-full w-[45%]">
                <p className="text-xs">Last Name</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.lname}></input>
              </div>
            </div>
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Email</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.email}></input>
            </div>
            <div className="h-[12.5%] w-full flex justify-between items-center">
              <div className="h-full w-1/2">
                <p className="text-xs">Contact No</p>
                <input className="w-[90%] h-1/2 rounded-md text-xs" type="text" value={currUser.mobile}></input>
              </div>
              <div className="h-full w-[45%]">
                <p className="text-xs">VAT/TAX No</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.vatTaxNumber}></input>
              </div>
            </div>
            
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Billing Address</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.address}></input>
            </div>
            <div className="h-[12.5%] w-full">
                <p className="text-xs">Your Intro</p>
                <input className="w-full h-1/2 rounded-md text-xs" type="text" value={currUser.introduction}></input>
            </div>
            <div className="h-[9.5%] w-full rounded-md border border-slate-500 flex flex-col items-center justify-between">
              <div className="h-1/2 w-[95%] flex justify-between items-center text-xs">
                <p>Business Registration</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
</div>
              <div className="h-1/2 w-[95%] flex justify-between items-center text-xs">
                <p>Profile Photo</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
</div></div>
            <div className="h-[10%] w-full flex justify-between items-center">
              <button className="px-10 py-1 border border-slate-500 rounded-md font-bold"onClick={()=>{setView(false)}}>Reject</button>
              <button className="px-10 py-1 border rounded-md bg-yellow-300 font-bold"onClick={()=>{handleAccept()}}>Accept</button>
            </div>
          </div>
          </div>
          </div>
        </div> }
        {/* </div> */}
      <div className="w-[95%] h-[90%]">
        <div className="w-full h-[10%]">
          <p className="font-bold text-2xl">Pending Verification</p>
        </div>
        <div className="w-full h-[90%] flex">
          <div className="w-1/4 h-full"></div>
          <div className="w-3/4 h-full flex justify-center items-center">
            <div className="w-[95%] h-[90%] bg-white rounded-xl overflow-hidden">
            <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Type
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Phone Number
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Country
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e)=>{
              var words = e.address.split(" ");
              const country = country_list.filter(x=>words.includes(x));
              return(
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{e.fname} {e.lname}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.role==0?"Freelancer":e.role==1?"Company":"Manufacturer"}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.mobile}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.email}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {country?country:undefined}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button className="px-6 py-1 rounded-lg bg-slate-400 text-white" onClick={()=>handleView(e)}>View</button>
              </td>
            </tr>
              )})}
          </tbody>
        </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUsers;
