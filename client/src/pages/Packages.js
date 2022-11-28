import Modal from "../components/Modal";
import { useState } from "react";

import PacBox from "../components/PacBox";

export function Packages() {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);
  const [pac, setPac] = useState([]);
  const [pdiv,setPdiv] = useState([])

  var index =0;

  const createBox  =() =>{

    setPdiv(present=> [...present,pdiv])
    index++;
  }

  return (
    <div>
      <div className="grid grid-cols-4 ">
        <div className=" lg:flex flex-row xl:flex-col hidden ">
          <div className=" ml-2 mb-6 w-64 h-96 fixed shadow p-5 bg-white rounded-lg">
            <div className="text-center py-3">
              <button
                onClick={createBox}
                className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
              >
                Create New Packages
              </button>
            </div>
          </div>
        </div>
        {pdiv.map((index) => (
        <PacBox setShowMyModal={setShowMyModal} pac = {pac}/>
        ))}
      </div>
      <Modal pItem={setPac} onClose={handleOnClose} visible={showMyModal} />
      {/* {pac.length!==0 && <div></div>} */}
    </div>
  );
}
