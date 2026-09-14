function YourExpenses() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="mb-5 text-xl font-bold text-gray-900">
        Your Expenses
      </h2>

      <div className="flex flex-col gap-4">
        {/* Expense 1 */}
        <div className="rounded-xl border border-gray-200 bg-[#FAF9F6] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              🍔 Lunch
            </h3>

            <p className="font-bold text-gray-900">
              ৳500
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Food · Sep 9
            </p>

            <button className="text-red-500 hover:text-red-700">
              🗑️
            </button>
          </div>
        </div>

        {/* Expense 2 */}
        <div className="rounded-xl border border-gray-200 bg-[#FAF9F6] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              🚌 Bus
            </h3>

            <p className="font-bold text-gray-900">
              ৳100
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Transport · Sep 8
            </p>

            <button className="text-red-500 hover:text-red-700">
              🗑️
            </button>
          </div>
        </div>

        {/* Expense 3 */}
        <div className="rounded-xl border border-gray-200 bg-[#FAF9F6] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              🛒 Groceries
            </h3>

            <p className="font-bold text-gray-900">
              ৳850
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Shopping · Sep 7
            </p>

            <button className="text-red-500 hover:text-red-700">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourExpenses;