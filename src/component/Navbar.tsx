import { FaMoneyCheckDollar } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="container mx-auto px-4 py-2 sm:px-4 lg:px-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
        
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            <FaMoneyCheckDollar className="text-green-500" />
            Expense Tracker
          </h1>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Track and manage your daily expenses
          </p>
        </div>

        <h2 className="w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600 sm:text-base">
          Personal Finance
        </h2>

      </div>
    </div>
  );
}

export default Navbar;