import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSession } from "next-auth/react";

export default function Example() {
  const { data: session } = useSession();

  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full object-cover shadow-inner">
            <img
              src={session?.user.image || "/default-user-image.jpg"}
              alt="user profile"
            />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  className="group relative inline-block overflow-hidden rounded-md border border-violet-200 px-8 py-2 focus:outline-none focus:ring"
                  // onClick={() => void signIn()}
                >
                  <span className="absolute inset-y-0 right-0 w-[2px] bg-violet-200 transition-all group-hover:w-full group-active:bg-violet-200"></span>

                  <span className="relative text-sm font-medium text-violet-200 transition-colors group-hover:text-slate-950">
                    Logout
                  </span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
