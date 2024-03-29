import React, { useEffect, useState } from "react";
import CineLogo from "../Logo/logo.png";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Data } from "../Data";
import { DateRangePicker } from "flowbite-datepicker";
import { Button } from "antd";
function Billing() {
  useEffect(() => {
    var ctx = document.getElementById("dateChose");
    console.log(ctx);
    //     var ctx = document.getElementById('canvas').getContext("2d");
    //   var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    // gradient.addColorStop(0, 'rgba(250,174,50,1)');
    // gradient.addColorStop(1, 'rgba(250,174,50,0)');
    //     const dateRangePickerEl = document.getElementById('dateChose');
    // new DateRangePicker(dateRangePickerEl, {
    //     // options
    // });
  }, []);
  const [pieChartData, setPieChartData] = useState({
    labels: Data.map((e) => e.month),
    datasets: [
      {
        label: "My First Dataset",
        data: Data.map((e) => e.plvalue),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        height: "50px",
        hoverOffset: 4,
      },
    ],
  });
  const [chartData, setChartData] = useState({
    labels: Data.map((e) => e.month),
    datasets: [
      {
        type: "line",
        label: "Line Dataset",
        data: Data.map((e) => e.plvalue),
        backgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value < 0 ? "#FF8B8B" : "#E3FFF3";
        },
        backgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value < 0 ? "#FF8B8B" : "#E3FFF3";
        },
      },
      {
        type: "bar",
        label: "Bar Dataset",
        data: Data.map((e) => e.plvalue),
        backgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          console.log(index, value);
          return value < 0 ? "#FF8B8B" : "#E3FFF3";
        },
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      x: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
      },
    },
  });
  const [pieChartOptions, setPieChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // labels:{
      // },
      legend: {
        display: false,
        labels: {
          render: "percentage",
          fontStyle: "bolder",
          position: "outside",
          textMargin: 6,
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
      },
    },
  });
  return (
    <div className="flex-col min-h-screen h-[130vh] w-full">
      <div className="flex bg-billingBlue flex justify-center items-center h-[10%] w-full">
        <div className="flex items-center h-[90%] w-[95%]">
          <div className="flex items-center h-full w-1/5">
            <h1 className="text-white text-2xl font-bold">Billing</h1>
          </div>
          <div className="flex h-1/2 items-center w-3/5">
            <div className="flex h-full w-1/6 justify-center items-center text-white text-md">
              <p>Overview</p>
            </div>
            <div className="flex h-full w-1/6 justify-center items-center text-white text-md">
              <p>Documents</p>
            </div>
            <div className="flex h-full w-1/6 justify-center items-center text-white text-md">
              <p>Customers</p>
            </div>
            <div className="flex h-full w-1/6 justify-center items-center text-white text-md">
              <p>Suppliers</p>
            </div>
            <div className="flex h-full w-1/6 justify-center items-center text-white text-md">
              <p>Config</p>
            </div>
            <div className="flex h-full w-1/6 justify-center items-center text-white text-md">
              <p>History</p>
            </div>
          </div>
          <div className="flex items-center justify-end h-full w-1/5">
            <img className="w-12 h-12" src={CineLogo}></img>
          </div>
        </div>
      </div>
      <div className="flex h-[96%] w-full bg-background justify-center items-center">
        <div className="flex justify-between items-center h-[95%] w-[95%]">
          <div className="h-full w-1/4">
            <div className="flex items-center h-1/4 w-full">
              <div className="flex items-center h-[80%] w-full">
                <div className="flex flex-col justify-between items-start h-full w-full">
                  <div className="h-1/4 w-full">
                    <h1 className="text-2xl font-bold">Current Status</h1>
                  </div>
                  <div className="h-[30%] w-2/3 rounded-xl flex justify-center border border-slate-600 items-center">
                    <div className="h-[90%] w-[90%] flex justify-between items-center">
                      <div className="h-full w-[40%] flex border justify-between items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                          />
                        </svg>
                        <p className="font-bold text-xl">Alerts</p>
                      </div>
                      <div className="h-6 w-6 rounded-full bg-yellow-300 flex justify-center items-center">
                        <p className="font-bold text-xl">1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start h-3/4 w-full ">
              <div className="flex flex-col justify-center items-start rounded-xl w-[80%] h-[23%] bg-white">
                <div className="w-full h-1/3 flex items-center">
                  <p className="text-xl font-bold px-4">This Year</p>
                </div>
                <div className=" w-full h-2/3 flex flex-col justify-start items-center">
                  <div className=" w-full h-2/3 flex flex-col justify-center items-center">
                    <p className="text-xl font-bold">&euro; 1,000.62</p>
                  </div>
                  <div className=" w-full h-1/3 flex justify-center items-center">
                    <div className=" w-1/2 h-full flex justify-center items-center">
                      <p className="text-sm text-green-600">&euro; 1,000.62</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="green"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                        />
                      </svg>
                    </div>
                    <div className=" w-1/2 h-full flex justify-center items-center">
                      <p className="text-sm text-red-600">&euro; 1,000.62</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="red"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start rounded-xl w-[80%] h-[23%] bg-white">
                <div className="w-full h-1/3 flex items-center">
                  <p className="text-xl font-bold px-4">Receivable</p>
                </div>
                <div className=" w-full h-2/3 flex flex-col justify-start items-center">
                  <div className=" w-full h-2/3 flex flex-col justify-center items-center">
                    <p className="text-xl font-bold">&euro; 1,000.62</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start rounded-xl w-[80%] h-[23%] bg-white">
                <div className="w-full h-1/3 flex items-center">
                  <p className="text-xl font-bold px-4">Payable</p>
                </div>
                <div className=" w-full h-2/3 flex flex-col justify-start items-center">
                  <div className=" w-full h-2/3 flex flex-col justify-center items-center">
                    <p className="text-xl font-bold">&euro; 1,000.62</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start rounded-xl w-[80%] h-[23%] bg-white">
                <div className="w-full h-1/3 flex items-center">
                  <p className="text-xl font-bold px-4">Scheduled</p>
                </div>
                <div className=" w-full h-2/3 flex flex-col justify-start items-center">
                  <div className=" w-full h-2/3 flex flex-col justify-center items-center">
                    <p className="text-xl font-bold">&euro; 1,000.62</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center h-full w-3/4">
            <div className="flex items-center h-1/4 w-full">
              <div className="flex items-center h-[80%] w-full">
                <div className="flex flex-col justify-between items-start h-full w-full">
                  <div className="h-1/4 w-full">
                    <h1 className="text-2xl font-bold">Review</h1>
                  </div>
                  <div className="h-2/3 w-1/2 flex flex-col justify-start items-center">
                    <div className="h-1/3 w-full flex items-center">
                      <p className="font-bold text-md">Period</p>
                    </div>
                    <div className="h-2/3 w-full flex justify-start items-center">
                      <div className="h-full w-2/3 flex justify-between items-center">
                        <div
                          datepicker="true"
                          id="dateChose"
                          className="w-[48%] h-2/3 bg-white rounded-lg flex justify-between items-center relative"
                        >
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            datepicker="true"
                            name="start"
                            type="text"
                            className="sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark: dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="From"
                            onFocus={(e) => (e.target.type = "date")}
                          />
                        </div>
                        <div className="w-[48%] h-2/3 bg-white rounded-lg flex justify-between items-center relative">
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            datepicker="true"
                            name="start"
                            type="text"
                            className="cursor-pointer sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark: dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="To"
                            onFocus={(e) => (e.target.type = "date")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-3/4 w-full flex flex-col items-center justify-start ">
              <div className="h-1/2 w-full flex justify-center items-center rounded-xl bg-white">
                <div className="h-[95%] w-[98%] rounded-xl bg-white">
                  <div className="flex items-center h-[10%] w-full ">
                    <h3 className="text-2xl font-bold">Profit and Loss</h3>
                  </div>
                  <div className="flex items-center justify-center h-[90%] w-full">
                    <div className="flex items-center justify-center h-full w-3/4">
                      <Bar
                        data={chartData}
                        style={{ height: "85%", width: "80%" }}
                        options={chartOptions}
                      />
                    </div>
                    <div className="flex flex-col justify-end items-end h-full w-1/4">
                      <p className="font-bold text-xl">Total: &euro;1000.62</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-1/2 w-full flex justify-center items-center">
                <div className="h-full w-1/2 flex flex-col justify-center items-center">
                  <div className="h-[90%] w-[90%] flex flex-col justify-center items-center">
                    <div className="flex items-center h-[10%] w-full ">
                      <p className="text-md font-bold">Income</p>
                    </div>
                    <div className="h-[90%] w-full ">
                      <Doughnut
                        data={pieChartData}
                        style={{ height: "85%", width: "80%" }}
                        options={pieChartOptions}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-full flex flex-col justify-center items-center w-1/2">
                  <div className="h-[90%] w-[90%] flex flex-col justify-center items-center">
                    <div className="h-[10%] w-full">
                      <p className="text-md font-bold">Expenses</p>
                    </div>
                    <div className="h-[90%] w-full">
                      <Doughnut
                        data={pieChartData}
                        style={{ height: "85%", width: "80%" }}
                        options={pieChartOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
