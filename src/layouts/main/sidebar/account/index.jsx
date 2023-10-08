import { Popover, Transition } from "@headlessui/react"
import { useCurrentAccount } from "~/store/auth/hooks"
import More from "./more";

export default function Account() {
    const account = useCurrentAccount();

    return (
        <div className="mt-auto mr-3">
            <Popover className="relative">
                <Popover.Button className="my-3 p-2 rounded-full w-full flex items-center text-left outline-none hover:bg-[#eff3f41a] transition-colors">
                    <img src={account?.avatar} alt="account" className="w-10 h-10 rounded-full" />

                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold">{account?.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account?.username}
                        </div>
                    </div>

                    <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
                        <path 
                            fill="#e7e9ea"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                        />
                    </svg>
                </Popover.Button>

                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <Popover.Panel className="absolute bottom-[80px] w-[300px] rounded-2xl overflow-hidden bg-black shadow-box">
                        {({ close }) => (
                            <More close={close} />
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}
