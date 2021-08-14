import useAuth from "../../data/hook/useAuth";
import { IconAdjustments, IconBell, IconHome, IconLogout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideBar (props) {

    const { logout } = useAuth()
    return (
        <aside className={`
            sm:flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 hidden
            `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20 
            `}>

                <Logo />

            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Home" icon={IconHome} />
                <MenuItem url="/ajustes" text="Ajustes" icon={IconAdjustments} />
                <MenuItem url="/notificacoes" text="Novidades" icon={IconBell} />
                <MenuItem url="/calendario" text="Calendário" icon={IconBell} />
            </ul>
            <ul>
                <MenuItem text="Sair" icon={IconLogout} 
                onClick={logout}
                className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white
                    
                `}
                />
            </ul>
        </aside>
    )
}