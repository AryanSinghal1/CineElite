import { useState } from "react";
import { Carousel } from "flowbite-react";
export function SellCard({ product }) {
  const {
    Build,
    Company,
    Model,
    SPrice,
    Description,
    Serial,
    Condition,
    Images,
  } = product;
  const [contact, setContact] = useState(false);
  const handleContact = () => {
    setContact(!contact);
  };
  const [trade, setTrade] = useState(false);
  const handleTrade = () => {
    setTrade(!trade);
  };
  return (
    <div>
      <li
        onClick={() => handleTrade(true)}
        className="text-base font-bold"
      >
        Shahid has a {Build} model in City ,Country for {SPrice}.
      </li>

      {trade && (
        <div
          onClick={() => handleTrade(false)}
          className=" dialog-content-container z-10"
        >
          <section className="dialog-content h-fit w-1/3  ">
            <div class="flex flex-row space-x-4  bg-white  ">
              <div class="">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div class="flex flex-col">
                <p class="text-xl font-bold text-gray-900  dark:text-white">
                  Neil Sims
                </p>
                <p class="text-base font-bold text-gray-900 dark:text-gray-400">
                  Photographer
                </p>
                <p class="text-base font-bold text-gray-900  dark:text-gray-400">
                  Member Since 2003
                </p>
              </div>

              <p className="text-base absolute top-2 right-2 font-small text-gray-400 truncate dark:text-gray-400">
                Listing # {Serial}
              </p>
            </div>
            <div class="flex flex-col mx-auto ">
              <p class="text-lg pt-4 font-medium text-gray-900  dark:text-gray-400">
                {Company}
              </p>
              <p class="text-base font-small mb-4   dark:text-gray-400">
                {Model}
              </p>
              <div className="  h-44 w-80 px-2 rounded-lg bg-gray-300 mx-0">
                <Carousel>
                  <img src={Images[0]} alt="" />
                  <img src={Images[1]} alt="" />
                  <img src={Images[2]} alt="" />
                  <img src={Images[3]} alt="" />
                  <img src={Images[4]} alt="" />
                  <img src={Images[5]} alt="" />
                </Carousel>
              </div>
              <p class="text-base pt-4 pb-2 font-small   dark:text-gray-400">
                {Condition}
              </p>
              <p class="text-base font-small pb-8   dark:text-gray-400">
                Description- {Description}
              </p>

              <button
                type="button"
                onClick={() => handleContact(true)}
                className="flex   w-44 p-1 mx-auto   bg-yellow-300 rounded-lg  items-center justify-between bg-white  text-gray-400 hover:text-gray-500"
              >
                <span className="font-medium text-lg  mx-auto text-gray-900">
                  Contact
                </span>
              </button>
            </div>
          </section>
        </div>
      )}
      {contact && (
        <div
          className="dialog-content-container "
          onClick={() => handleContact(false)}
        >
          <section className="dialog-content text-xl  font-medium text-black text-center">
            <div className="flex flex-col  ">
              <ul className=" list-outside text-base font-medium ml-2  pt-12 ">
                <form className=" list-outside text-base font-medium  ">
                  <li className=" mb-2 text-left whitespace-nowrap ">Message Subject</li>
                  <input
                    type="text"
                    id="simple-search"
                    class="   border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <li className=" mb-2 text-left">Message content</li>
                  <input
                    type="text"
                    id="simple-search"
                    class="  border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 h-72  mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </form>
              </ul>
            </div>

            <button
              type="button"
              className="flex   w-20 p-1   bg-yellow-300 rounded-lg mx-auto  mt-12  items-center justify-between bg-white  text-gray-400 hover:text-gray-500"
            >
              <span  onClick={() => handleContact(false)} className="font-medium  mx-auto text-gray-900 ">Send</span>
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
