import React from "react";

interface Essential2Props {
  data: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  }[];
  setData: (data: Essential2Props["data"]) => void;
}

const Essential2 = ({ data, setData }: Essential2Props) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="max-w-[500px] py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Segment
                    </th>
                    <th
                      scope="col"
                      className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total number of training and awareness programmes held
                    </th>
                    <th
                      scope="col"
                      className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Topics / principles covered under the training and its
                      impact
                    </th>
                    <th
                      scope="col"
                      className="max-w-[500px] py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                    >
                      %age of persons covered by the awareness programmes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((person, index) => (
                    <tr key={index} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.first}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                          value={person.second}
                          onChange={(e) => {
                            const newData = [...data];
                            newData[index]!.second = e.target.value;
                            setData(newData);
                          }}
                        />
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                          value={person.third}
                          onChange={(e) => {
                            const newData = [...data];
                            newData[index]!.third = e.target.value;
                            setData(newData);
                          }}
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        <input
                          type="text"
                          className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                          value={person.fourth}
                          onChange={(e) => {
                            const newData = [...data];
                            newData[index]!.fourth = e.target.value;
                            setData(newData);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essential2;
