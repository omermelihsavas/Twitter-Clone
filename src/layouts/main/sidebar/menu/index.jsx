import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { sidebarMenu } from "~/utils/consts";
import More from "./more";
import Send from "./send";

export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            {sidebarMenu.map((menu, index) => (
                <NavLink to={menu.path} className="block group">
                    {({ isActive }) => (
                        <div className={classNames("p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                            "font-bold": isActive
                        })}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                {menu?.notification && (
                                    <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu?.notification}</span>
                                )}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className="pr-4 text-xl text-[#e7e9ea]">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}

            <More />

            <Send />
        </nav>
    )
}
