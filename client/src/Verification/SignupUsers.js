import axios from "axios";
import React, { useEffect, useState } from "react";
import SignupUserCard from "./SignupUserCard";
import logo from '../Logo/logo.png'

const SignupUsers = () => {
  const [data, setData] = useState();
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

  const handleView =(e)=>{
    console.log(e);
  }
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="absolute h-screen w-screen bg-black/20 flex justify-center items-center">
        <div className="w-1/4 h-4/5 bg-white rounded-lg flex justify-center items-center">
        <div className=" w-[90%] h-[95%] flex flex-col">
          <div className="h-[10%] w-full items-center flex">
            <p className="font-bold text-xl">Cine Elite</p>
            <img className="w-8 h-8 mx-5" src={logo}></img>
          </div>
            <p className="text-xs text-slate-500">Referred By:</p>
        </div>
        </div>
      </div>
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
      {/* {data
        ? data.map((e) => (
            <SignupUserCard
              fname={e.fname}
              lname={e.lname}
              photo={e.profImage}
              email={e.email}
              mobile={e.mobile}
              address={e.address}
              VAT={e.vatTaxNumber}
              intro={e.introduction}
              vatDoc = {e.vatDocument}
            />
          ))
        : ""} */}
    </div>
  );
};

export default SignupUsers;
