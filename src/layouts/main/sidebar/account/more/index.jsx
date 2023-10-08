import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/actions";
import { useAccounts, useCurrentAccount } from "~/store/auth/hooks"

export default function More({ close }) {
    const currentAccount = useCurrentAccount();
    const accounts = useAccounts();

    return (
        <div className="py-3">
            {accounts.length !== 1  && accounts.map(account => (
                <button 
                    type="button"
                    disabled={currentAccount.id === account.id}
                    onClick={() => {
                        setCurrentAccount(account);
                        close();
                    }}
                    className={classNames("py-3 px-4 flex items-center text-left w-full", {
                        "hover:bg-[#eff3f41a] transition-colors": currentAccount.id !== account.id
                })}>
                    <img src={account?.avatar} alt="account" className="w-10 h-10 rounded-full" />

                    <div className="mx-3 flex-1 text-[15px]">
                        <h6 className="font-bold">{account?.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account?.username}
                        </div>
                    </div>

                    {currentAccount.id === account.id && (
                        <svg viewBox="0 0 24 24" className="mr-2 ml-3" width={18.75} height={18.75} fill="#00ba7c">
                            <path
                                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                            />
                        </svg>
                    )}
                </button>
            
            ))}
            
            {accounts.length !==1 && <div className="h-px my-3 bg-[#2f3336]" />}


            <button className="py-3 px-4 text-left w-full text-[15px] text-[#e7e9ea] font-bold hover:bg-[#eff3f41a] transition-colors">
                Var olan bir hesap ekle
            </button>

            <button className="py-3 px-4 text-left w-full text-[15px] text-[#e7e9ea] font-bold hover:bg-[#eff3f41a] transition-colors">
                Hesapları yönet
            </button>

            <button className="py-3 px-4 text-left w-full text-[15px] text-[#e7e9ea] font-bold hover:bg-[#eff3f41a] transition-colors">
                <div className="max-w-[228px]">
                    @{currentAccount.fullName} hesabından çıkış yap
                </div>
            </button>
        </div>
    )
}
