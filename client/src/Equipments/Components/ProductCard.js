import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addToCertified, addToCompare, addToHistory, addToKit, addToWatchlist } from "../../Slices/EquipmentSlices";

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.user);
const kit = useSelector(state=>state.equipment.kit);
const watchlist = useSelector(state=>state.equipment.watchlist);
const compare = useSelector(state=>state.equipment.compare);
const history = useSelector(state=>state.equipment.history);
const certified = useSelector(state=>state.equipment.certified);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const { _id, typeOfBrand, name, image, description } = product;

  const isInKit = kit?.find((kitItem) => kitItem._id === _id);
  const isInCompare = compare?.find((compareItem) => compareItem._id === _id);
  const isInHistory = history?.find((historyItem) => historyItem._id === _id);
  const isInCertified = certified?.find(
    (certifiedItem) => certifiedItem._id === _id
  );
  const isInWatchlist = watchlist?.find(
    (watchlistItem) => watchlistItem._id === _id
  );

  const kitHandler = async (e) => {
    if (!isInKit) {
      try {
        //     const {
        //       data: { success },
        //     } = await axios.post(`${API_URL}/kit`, {
        //       product: {
        //         _id,

        //       },
        //     });
        await axios.post(`${API_URL}/kit`, {
          product: {
            _id,
            typeOfBrand,
            name,
            image,
          },
        });

        // if (success) {

        dispatch(addToKit(product))

        // }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/kit");
    }
  };
  const compareHandler = async (e) => {
    if (!isInCompare) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/compare`, {
          product: {
            _id,
          },
        });

        if (success) {
          dispatch(addToCompare(product));
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/explore");
    }
  };
  const certifiedHandler = async (e) => {
    if (!isInCertified) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/certified`, {
          product: {
            _id,
          },
        });

        if (success) {
          dispatch(addToCertified(product));
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/explore");
    }
  };
  const historyHandler = async (e) => {
    if (!isInHistory) {
      try {
        await axios.post(`${API_URL}/history`, {
          product: {
            _id,
            description,
            name,
          },
        });

        //if (success) {
          dispatch(addToHistory(product));

        // }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/explore");
    }
  };
  function KitFunction() {
    historyHandler();
    kitHandler();
  }

  const watchlistHandler = async (e) => {
    e.preventDefault();
    if (!isInWatchlist) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/watchlist`, {
          product: {
            _id,
          },
        });

        if (success) {
          dispatch(addToWatchlist(product));
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/watchlist");
    }
  };

  return (
    <>
      <div className="bg-white border border1 border-gray-200 w-56 h-56 shadow-sm rounded dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
        <button onClick={() => handleOpen(true)}>
          <div className="bg-gray-100 mt-2 mx-2">
            {" "}
            <img
              src={image}
              alt="equipment"
              className="  w-40 mx-auto  h-32 w-full p-3  "
            />
          </div>

          <h5 className=" font-semibold text-center mb-2 text-2xl  dark:text-white">
            {typeOfBrand}
          </h5>

          <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">
            {name}
          </h3>
        </button>

        {open && (
          <div className=" dialog-content-container">
            <section
              onClick={() => handleOpen(false)}
              className="dialog-content"
            >
              <div className="bg-gray-100 mt-2 mx-2">
                {" "}
                <img
                  src={image}
                  alt="equipment"
                  className="  w-40 mx-auto  h-32 w-full p-3  "
                />
              </div>

              <h5 className=" font-semibold text-center mb-2 text-2xl  dark:text-white">
                {typeOfBrand}
              </h5>

              <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">
                {name}
              </h3>
              
              <button className="mx-5 mb-2 p-2 rounded-xl mt-4 hover:bg-yellow-300 hover:text-white ">
              <Link to={`/product/${_id}`} className="link">
                <div className="">
                  
                    <span className="mb-2 text-l font-medium mr-2">
                      View details
                    </span>
                    <span className="material-icons-outlined md-light  ">
                     open_in_new</span>
                   
                 
                </div>
                </Link>
              </button>
             

              {isInKit ? (
                <button className="" onClick={(e) => KitFunction(e)}>
                  <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
                    <span className="material-icons-outlined text-white ">
                      check
                    </span>
                    <span className="mb-2 ml-2 text-white font-medium text-m">
                      In My Kit
                    </span>
                  </div>
                </button>
              ) : (
                <button
                  className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    user ? KitFunction(e) : navigate("/userlogin");
                  }}
                >
                  <div className="">
                    <span className="material-icons-outlined  ">add</span>
                    <span className="mb-2 text-m font-medium ml-2 ">
                      Add My kit
                    </span>
                  </div>
                </button>
              )}
              {isInWatchlist ? (
                <button>
                  <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
                    <span className="material-icons-outlined text-white ">
                      bookmark
                    </span>
                    <span className="mb-2 ml-2 text-white font-medium text-m">
                      In My Watchlist
                    </span>
                  </div>
                </button>
              ) : (
                <button
                  className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300"
                  onClick={(e) => {
                    e.preventDefault();
                    user ? watchlistHandler(e) : navigate("/userlogin");
                  }}
                  onSelect={(e) => historyHandler(e)}
                >
                  <div className="">
                    <span className="material-icons-outlined md-light  ">
                      bookmark_border
                    </span>
                    <span className="mb-2 text-l font-medium ml-2">
                      Add Watchlist
                    </span>
                  </div>
                </button>
              )}
              {isInCertified ? (
                <button className="" onClick={(e) => certifiedHandler(e)}>
                  <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
                    <span className="material-icons-outlined text-white ">
                      verified_user
                    </span>
                    <span className="mb-2 ml-2 text-white font-medium text-m">
                      I am Cerified
                    </span>
                  </div>
                </button>
              ) : (
                <button
                  className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    user ? certifiedHandler(e) : navigate("/userlogin");
                  }}
                >
                  <div className="">
                    <span className="material-icons-outlined  ">
                      verified_user
                    </span>
                    <span className="mb-2 text-m font-medium ml-2 ">
                      Add to Certification
                    </span>
                  </div>
                </button>
              )}

              {isInCompare ? (
                <button className="" onClick={(e) => compareHandler(e)}>
                  <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
                    <span className="material-icons-outlined text-white ">
                      compare
                    </span>
                    <span className="mb-2 ml-2 text-white font-medium text-m">
                      Compare
                    </span>
                  </div>
                </button>
              ) : (
                <button
                  className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    user ? compareHandler(e) : navigate("/login");
                  }}
                >
                  <div className="">
                    <span className="material-icons-outlined  ">compare</span>
                    <span className="mb-2 text-m font-medium ml-2 ">
                      Compare
                    </span>
                  </div>
                </button>
              )}
            </section>
          </div>
        )}
      </div>
    </>
  );
}
