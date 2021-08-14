import useAppData from "../../data/hook/useAppData";
import AvatarUser from "./AvatarUser";
import ButtonToggleTheme from "./ButtonToggleTheme";
import Title from "./Title";


interface TopBarProps{
    title: string
    subtitle: string
    
}

export default function TopBar(props: TopBarProps) {

    const {theme, toggleTheme} = useAppData()

    return (
        <div className={`flex border`}>
          <Title title={props.title} subtitle={props.subtitle} />
          <div className={`flex flex-grow justify-end items-center`}>
            <ButtonToggleTheme theme={theme} toggleTheme={toggleTheme}/>
            <AvatarUser className="ml-3"/>
          </div>
        </div>
    )
}