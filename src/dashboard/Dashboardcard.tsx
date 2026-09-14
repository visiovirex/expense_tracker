function Dashboardcard() {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="card rounded-2xl border border-gray-200 bg-[#FAF9F6] px-5 py-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Total
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            $0.00
          </h2>
        </div>

        <div className="card rounded-2xl border border-gray-200 bg-[#FAF9F6] px-5 py-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            No. of Expenses
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            0
          </h2>
        </div>

        <div className="card rounded-2xl border border-gray-200 bg-[#FAF9F6] px-5 py-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Highest Expense
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            $0.00
          </h2>
        </div>

      </div>
    </div>
  );
}

export default Dashboardcard;