function AddExpenses() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="rounded-2xl border border-gray-200 bg-[#FAF9F6] p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Add Expense</h2>

        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium text-gray-700">
              Title
            </label>
            <input
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
              type="text"
              name="title"
              id="title"
              placeholder="Expense name"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="font-medium text-gray-700">
              Amount
            </label>
            <input
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-medium text-gray-700">
              Category
            </label>
            <select
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
              name="category"
              id="category"
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="groceries">Groceries</option>
              <option value="trip">Trip</option>
              <option value="education">Education</option>
              <option value="loan">Loan</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="font-medium text-gray-700">
              Date
            </label>
            <input
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
              type="date"
              name="date"
              id="date"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              className="w-full rounded-lg bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600 md:w-auto"
              type="submit"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenses;
