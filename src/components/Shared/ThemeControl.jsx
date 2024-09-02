import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';

const ThemeControl = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setDarkMode(true);
        }
    }, [])

    useEffect(() => {
        if (darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div onClick={() => setDarkMode(!darkMode)} className='relative w-16 h-8 flex items-center dark:bg-red-800 bg-green-950'>
            <FaMoon className='text-white size-20'/>

        </div>
    );
};



export default ThemeControl;