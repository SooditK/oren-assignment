import React from "react";

interface Essential3Props {
  data: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
  }[];
  setData: (data: Essential3Props["data"]) => void;
  nonMonetary: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
  }[];
  setNonMonetary: (data: Essential3Props["nonMonetary"]) => void;
}

const Essential3 = ({
  data,
  setData,
  nonMonetary,
  setNonMonetary,
}: Essential3Props) => {
  return (
    <>
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
                        {""}
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        NGRBC Principle
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Name of the regulatory/enforcement agencies/judicial
                        institutions
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        {"Amount (In INR)"}
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Brief of Case
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Has an Appeal been preferred? (Yes/No)
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
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          <input
                            type="text"
                            className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                            value={person.fifth}
                            onChange={(e) => {
                              const newData = [...data];
                              newData[index]!.fifth = e.target.value;
                              setData(newData);
                            }}
                          />
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          <input
                            type="text"
                            className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                            value={person.sixth}
                            onChange={(e) => {
                              const newData = [...data];
                              newData[index]!.sixth = e.target.value;
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
                        {""}
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        NGRBC Principle
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Name of the regulatory/enforcement agencies/judicial
                        institutions
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Brief of Case
                      </th>
                      <th
                        scope="col"
                        className="max-w-[500px] px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Has an Appeal been preferred? (Yes/No)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {nonMonetary.map((person, index) => (
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
                              const newData = [...nonMonetary];
                              newData[index]!.second = e.target.value;
                              setNonMonetary(newData);
                            }}
                          />
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          <input
                            type="text"
                            className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                            value={person.third}
                            onChange={(e) => {
                              const newData = [...nonMonetary];
                              newData[index]!.third = e.target.value;
                              setNonMonetary(newData);
                            }}
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                          <input
                            type="text"
                            className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                            value={person.fourth}
                            onChange={(e) => {
                              const newData = [...nonMonetary];
                              newData[index]!.fourth = e.target.value;
                              setNonMonetary(newData);
                            }}
                          />
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          <input
                            type="text"
                            className="w-full border-0 border-b-[1px] focus:border-0 focus:border-b-[1px] focus:border-[#0F62FE] focus:ring-0 sm:text-sm"
                            value={person.fifth}
                            onChange={(e) => {
                              const newData = [...nonMonetary];
                              newData[index]!.fifth = e.target.value;
                              setNonMonetary(newData);
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
    </>
  );
};

export default Essential3;
