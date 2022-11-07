import { AnimationNotFound } from "../components/AnimationNotFound/AnimationNotFound"
import logo from "../assets/logo.png"

export const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center gap-20 w-auto h-auto min-h-screen">
            <img src={logo} alt="Logo Shape" className="w-56 pt-2.5"/>
            <AnimationNotFound />
        </div>
    )
}