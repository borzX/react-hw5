import { useDispatch, useSelector } from "react-redux";
import {TOGGLE_THEME, toggleTheme} from "../store/toggleThemeReducer"



export const ThemeSwither = () =>{
    console.log("TS")
    const {theme} = useSelector((state)=>state.switcher);
    const dispatch = useDispatch();

    return (
        <>
            
            <p>Current theme: {theme} </p>
            <button
                onClick={() => {
                     dispatch(toggleTheme());
                }}>
                Toggle Theme
            </button>
            <div className={`theme-${theme}`}>
                <p>Some Text Lorem</p>
            </div>
        </>
    )
}