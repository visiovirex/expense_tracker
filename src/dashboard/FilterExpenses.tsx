function FilterExpenses() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="rounded-2xl border border-gray-200 bg-[#FAF9F6] p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Filter Expenses
        </h2>

        <div className="flex flex-col gap-5">
          {/* Search */}
          <div className="flex flex-col gap-2">
            <label htmlFor="search" className="font-medium text-gray-700">
              Search:
            </label>

            <input
              type="text"
              id="search"
              placeholder="Search expenses..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-medium text-gray-700">
              Category:
            </label>

            <select
              id="category"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
            >
              <option value="">All Categories</option>
              <option value="food">Food</option>
              <option value="groceries">Groceries</option>
              <option value="trip">Trip</option>
              <option value="education">Education</option>
              <option value="loan">Loan</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-2">
            <label htmlFor="sort" className="font-medium text-gray-700">
              Sort By:
            </label>

            <select
              id="sort"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Amount</option>
              <option value="lowest">Lowest Amount</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterExpenses;
