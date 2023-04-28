import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        className="group relative inline-block overflow-hidden rounded-md border border-violet-200 px-8 py-2 focus:outline-none focus:ring"
        onClick={() => void signIn("discord")}
      >
        <span className="absolute inset-y-0 right-0 w-[2px] bg-violet-200 transition-all group-hover:w-full group-active:bg-violet-200"></span>

        <span className="relative text-sm font-medium text-violet-200 transition-colors group-hover:text-slate-950">
          Login
        </span>
      </button>
    );
  }

  return <AvatarWithMenu />;
}

function AvatarWithMenu() {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="flex">
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
        <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right rounded-md bg-slate-950 px-4 py-2 shadow-lg">
        <Link href="/profile" className="px-1 py-1 ">
          <Menu.Item>
            <button
              className="group relative inline-block overflow-hidden rounded-md border border-violet-200 px-8 py-2 focus:outline-none focus:ring"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-violet-200 transition-all group-hover:w-full group-active:bg-violet-200"></span>

              <span className="relative text-sm font-medium text-violet-200 transition-colors group-hover:text-slate-950">
                Profile
              </span>
            </button>
          </Menu.Item>
        </Link>
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                className="group relative inline-block overflow-hidden rounded-md border border-violet-200 px-8 py-2 focus:outline-none focus:ring"
                onClick={() => void signOut()}
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-violet-200 transition-all group-hover:w-full group-active:bg-violet-200"></span>

                <span className="relative text-sm font-medium text-violet-200 transition-colors group-hover:text-slate-950">
                  Logout
                </span>
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
