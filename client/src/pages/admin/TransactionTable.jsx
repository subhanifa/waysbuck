import { useState, useEffect, useContext } from "react";
// import { globalTitle } from "../../components/App";

import thousandSeparator from "../../utilities/thousandSeparator";
import TransactionModal from "../../components/modal/TransactionModal";
import { TransactionModalContext } from "../../contexts/ModalContext";
import { Cancel, Confirm } from "../../exports/exportImage";
import CustomerOrder from "../../tempData/CustomerOrder"
export default function TransactionsTable() {
  const [open, setOpen] = useContext(TransactionModalContext);
//   useEffect(() => {
//     document.title = globalTitle + "Transactions";
//   }, []);

  function checkStatus(status) {
    if (status === "Waiting Approve") {
      return "text-yellow-500";
    } else if (status === "Success") {
      return "text-green-500";
    } else if (status === "Cancel") {
      return "text-red-500";
    } else if (status === "On The Way") {
      return "text-cyan-500";
    }
  }

  function checkAction(status) {
    if (status === "Waiting Approve") {
      return (
        <>
          <button className="px-4 inline-flex text-xs leading-5 font-semibold rounded-md bg-button-cancel text-white">
            Cancel
          </button>
          <button className="px-4 inline-flex text-xs leading-5 font-semibold rounded-md bg-button-confirm text-white">
            Approve
          </button>
        </>
      );
    } else if (status === "Success") {
      return (
        <>
          <img src={Confirm} alt="" />
        </>
      );
    } else if (status === "Cancel") {
      return (
        <>
          <img src={Cancel} alt="" />
        </>
      );
    } else if (status === "On The Way") {
      return (
        <>
          <img src={Confirm} alt="" />
        </>
      );
    }
  }

  return (
    <>
      <div className="my-10 font-['Avenir-Book']">
        <h3 className="mx-4 lg:mx-32 text-brand-red text-3xl font-['Avenir-Black'] mb-10">
          Income Transaction
        </h3>
        <div className="lg:mx-40 mx-4 flex justify-start overflow-x-auto">
          <table className="lg:w-full divide-y divide-x divide-gray-300 border-2">
            <thead className="bg-gray-200">
              <tr className="divide-x divide-gray-300">
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text- tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Postcode
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Income
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-center text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {CustomerOrder.map((customer, i) => (
                <tr className="divide-x divide-gray-300" key={i}>
                  <td className="px-4 py-2 whitespace-nowrap">{i + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.address}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.postcode}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <button onClick={() => setOpen(!open)}>
                      Rp {thousandSeparator(customer.income)},-
                    </button>
                  </td>
                  <td
                    className={
                      checkStatus(customer.status) +
                      " px-4 py-2 whitespace-nowrap"
                    }
                  >
                    {customer.status}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap space-x-2 flex justify-center">
                    {checkAction(customer.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <TransactionModal />
    </>
  );
}