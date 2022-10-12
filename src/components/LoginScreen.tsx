import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BellIcon,
  BookmarkAltIcon,
  CashIcon,
  CogIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  KeyIcon,
  MenuIcon,
  PhotographIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Essential1 from "./screens/Essential1";
import Essential2 from "./screens/Essential2";
import Essential3 from "./screens/Essential3";
import { toast } from "react-hot-toast";
import { signOut, useSession } from "next-auth/react";
import Leadership1 from "./screens/Leadership1";
import Leadership2 from "./screens/Leadership2";
import { trpc } from "../utils/trpc";

const essential2 = [
  {
    first: "Board of Directors",
    second: "",
    third: "",
    fourth: "",
  },
  {
    first: "Key Managerial Personnel",
    second: "",
    third: "",
    fourth: "",
  },
  {
    first: "Employees other than BSD and KMPs",
    second: "",
    third: "",
    fourth: "",
  },
  {
    first: "Workers",
    second: "",
    third: "",
    fourth: "",
  },
];

const essential3datamonetary = [
  {
    first: "Penalty/Fine",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  },
  {
    first: "Settlement",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  },
  {
    first: "Compounding Fee",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  },
];

const essential3datanonmonetary = [
  {
    first: "Imprisonment",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  },
  {
    first: "Punishment",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  },
];

const leadership1dataemployee = [
  {
    first: "1",
    second: "Permanent",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "2",
    second: "Other than Permanent",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "3",
    second: "Total Employee",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "4",
    second: "Permanant (F)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "5",
    second: "Other than Permanent (G)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "6",
    second: "Total Workers (F+G)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
];

const leadership1diffrentlyabled = [
  {
    first: "1",
    second: "Permanant",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "2",
    second: "Other than Permanant",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "3",
    second: "Total diffrently abled(D+E)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "4",
    second: "Permanant (F)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "5",
    second: "Other than Permanant (G)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
  {
    first: "6",
    second: "Total Diffrently Abled Workers (F+G)",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  },
];

const leadership2data = [
  {
    first: "1",
    second: "",
    third: "",
    fourth: "",
  },
  {
    first: "2",
    second: "",
    third: "",
    fourth: "",
  },
  {
    first: "3",
    second: "",
    third: "",
    fourth: "",
  },
  {
    first: "4",
    second: "",
    third: "",
    fourth: "",
  },
];

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon },
  { name: "Trending", href: "#", icon: FireIcon },
  { name: "Bookmarks", href: "#", icon: BookmarkAltIcon },
  { name: "Messages", href: "#", icon: InboxIcon },
  { name: "Profile", href: "#", icon: UserIcon },
];
const subNavigation = [
  {
    name: "Essential Questions",
    description:
      "Does the entity have an anti-corruption or anti-bribery policy?",
    index: 1,
    icon: CogIcon,
    current: true,
  },
  {
    name: "Essential Questions",
    description:
      "Coverage by training and awareness programmes on any of the Principles during the financial year",
    index: 2,
    icon: BellIcon,
    current: false,
  },
  {
    name: "Essential Questions",
    description:
      "Details of fines / penalties /punishment/ award/ compounding fees/ settlement amount paid in proceedings (by the entity or by directors / KMPs) with regulators/ law enforcement agencies/judicial institutions, in the financial year, in the following format",
    index: 3,
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Leadership Questions",
    description: "Details as at the end of Financial Year:",
    index: 4,
    icon: PhotographIcon,
    current: false,
  },
  {
    name: "Leadership Questions",
    description:
      "Products/Services sold by the entity (accounting for 90% of the entity’s Turnover):",
    index: 5,
    icon: CashIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LoginDashboard() {
  const mutation = trpc.useMutation("example.save");
  const { data: session, status } = useSession();
  console.log(session);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [essential1data, setEssential1data] = useState({
    yesorno: "yes",
    policy: "",
  });
  const [essential2data, setEssential2data] = useState(essential2);
  const [essential3monetary, setEssential3monetary] = useState(
    essential3datamonetary
  );
  const [essential3nonmonetary, setEssential3nonmonetary] = useState(
    essential3datanonmonetary
  );
  const [leadership1employee, setLeadership1employee] = useState(
    leadership1dataemployee
  );
  const [leadership1diffabled, setLeadership1diffabled] = useState(
    leadership1diffrentlyabled
  );
  const [leadership2, setLeadership2] = useState(leadership2data);
  const [subNavIndex, setSubNavIndex] = useState(1);

  async function handleSave(e: React.SyntheticEvent) {
    e.preventDefault();
    const data = {
      essential1data,
      essential2data,
      essential3monetary,
      essential3nonmonetary,
      leadership1employee,
      leadership1diffabled,
      leadership2,
    };
    toast.loading("Saving...");
    mutation.mutate(
      {
        text: JSON.stringify(data),
        id: session!.user!.email!,
      },
      {
        onSuccess({ message, success }) {
          toast.dismiss();
          if (success) {
            toast.success(message);
          } else {
            toast.error(message);
          }
        },
        onError() {
          toast.dismiss();
          toast.error("Error saving");
        },
      }
    );
  }

  return (
    <>
      <div>
        <div className="flex max-h-screen">
          <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex lg:hidden"
              onClose={setMobileMenuOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="bg-blue-gray-600 fixed inset-0 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&shade=600"
                        alt="Workflow"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            onClick={() => signOut()}
                            className="text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900 group flex items-center rounded-md p-2 text-base font-medium hover:cursor-pointer"
                          >
                            <item.icon
                              className="text-blue-gray-400 group-hover:text-blue-gray-500 mr-4 h-6 w-6"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="border-blue-gray-200 flex flex-shrink-0 border-t p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div onClick={() => signOut()}>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-blue-gray-700 group-hover:text-blue-gray-900 text-base font-medium">
                            Lisa Marie
                          </p>
                          <p className="text-blue-gray-500 group-hover:text-blue-gray-700 text-sm font-medium">
                            Account Settings
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex w-20 flex-col">
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-blue-600">
                <div className="flex-1">
                  <div className="flex items-center justify-center bg-blue-700 py-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                      alt="Workflow"
                    />
                  </div>
                  <nav
                    aria-label="Sidebar"
                    className="flex flex-col items-center space-y-3 py-6"
                  >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => signOut()}
                        className="flex items-center rounded-lg p-4 text-blue-200 hover:cursor-pointer hover:bg-blue-700"
                      >
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                        <span className="sr-only">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 pb-5">
                  <a onClick={() => signOut()} className="w-full flex-shrink-0">
                    <img
                      className="mx-auto block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="sr-only">
                      <p>Lisa Marie</p>
                      <p>Account settings</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            {/* Mobile top navigation */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between bg-blue-600 py-2 px-4 sm:px-6">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <main className="flex flex-1 overflow-hidden">
              <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
                {/* Breadcrumb */}
                <nav
                  aria-label="Breadcrumb"
                  className="border-blue-gray-200 border-b bg-white xl:hidden"
                >
                  <div className="mx-auto flex max-w-3xl items-start py-3 px-4 sm:px-6 lg:px-8">
                    <a
                      href="#"
                      className="text-blue-gray-900 -ml-1 inline-flex items-center space-x-3 text-sm font-medium"
                    >
                      <ChevronLeftIcon
                        className="text-blue-gray-400 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Settings</span>
                    </a>
                  </div>
                </nav>

                <div className="flex flex-1 xl:overflow-hidden">
                  {/* Secondary sidebar */}
                  <nav
                    aria-label="Sections"
                    className="border-blue-gray-200 hidden w-96 flex-shrink-0 border-r bg-white xl:flex xl:flex-col"
                  >
                    <div className="border-blue-gray-200 flex h-16 flex-shrink-0 items-center border-b px-6">
                      <p className="text-blue-gray-900 text-lg font-medium">
                        Settings
                      </p>
                    </div>
                    <div className="min-h-0 flex-1 overflow-y-auto">
                      {subNavigation.map((item) => (
                        <a
                          key={item.name}
                          onClick={() => setSubNavIndex(item.index)}
                          className={classNames(
                            item.current
                              ? "bg-blue-50 bg-opacity-50"
                              : "hover:bg-blue-50 hover:bg-opacity-50",
                            "border-blue-gray-200 flex border-b p-6 hover:cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <div className="ml-3 text-sm">
                            <p className="text-blue-gray-900 font-medium">
                              {item.name}
                            </p>
                            <p className="text-blue-gray-500 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </nav>

                  {/* Main content */}
                  <div className="min-h-screen flex-1 overflow-auto">
                    <div className="mx-auto max-w-5xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                      <h1 className="text-blue-gray-900 text-3xl font-extrabold">
                        Account
                      </h1>

                      <div className="max-h-[100vh]">
                        <form className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
                          {subNavIndex === 1 && (
                            <Essential1
                              data={essential1data}
                              setData={setEssential1data}
                            />
                          )}
                          {subNavIndex === 2 && (
                            <Essential2
                              data={essential2data}
                              setData={setEssential2data}
                            />
                          )}
                          {subNavIndex === 3 && (
                            <Essential3
                              data={essential3monetary}
                              setData={setEssential3monetary}
                              nonMonetary={essential3nonmonetary}
                              setNonMonetary={setEssential3nonmonetary}
                            />
                          )}
                          {subNavIndex === 4 && (
                            <Leadership1
                              data={leadership1employee}
                              setData={setLeadership1employee}
                              nonMonetary={leadership1diffabled}
                              setNonMonetary={setLeadership1diffabled}
                            />
                          )}
                          {subNavIndex === 5 && (
                            <Leadership2
                              data={leadership2}
                              setData={setLeadership2}
                            />
                          )}
                          <div className="mt-0 mb-auto flex justify-end pt-8">
                            <button
                              type="button"
                              className="text-blue-gray-900 hover:bg-blue-gray-50 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={(e) => handleSave(e)}
                              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
