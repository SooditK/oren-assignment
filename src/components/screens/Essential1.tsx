import React, { useState } from "react";

interface Props {
  data: {
    yesorno: string;
    policy: string;
  };
  setData: (data: { yesorno: string; policy: string }) => void;
}

const Essential1 = ({ data, setData }: Props) => {
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
            defaultValue={data.yesorno}
            onChange={(e) => setData({ ...data, yesorno: e.target.value })}
            className="border-blue-gray-300 block w-full rounded-md shadow-sm sm:text-sm"
          >
            <option
              value="yes"
              className="text-blue-gray-900 block text-sm font-medium"
            >
              Yes
            </option>
            <option
              value="no"
              className="text-blue-gray-900 block text-sm font-medium"
            >
              No
            </option>
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
          value={data.policy}
          onChange={(e) => setData({ ...data, policy: e.target.value })}
          className="border-blue-gray-300 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default Essential1;
