import React from "react";

const Essential1 = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
      <div className="sm:col-span-6">
        <label
          htmlFor="yesorno"
          className="text-blue-gray-900 block text-sm font-medium"
        >
          Does the entity have an anti-corruption or anti-bribery policy?
        </label>
        <div className="mt-1">
          <select
            id="yesorno"
            name="yesorno"
            className="border-blue-gray-300 block w-full rounded-md shadow-sm sm:text-sm"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <div className="sm:col-span-6">
        <label
          htmlFor="policy"
          className="text-blue-gray-900 block text-sm font-medium"
        >
          If yes, please provide details in breif
        </label>
        <textarea
          id="policy"
          name="policy"
          rows={1}
          className="border-blue-gray-300 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default Essential1;
