import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen flex flex-col sticky top-0 z-10">
            <Logo />
            <Menu />
            <Account />
        </aside>
    )
}