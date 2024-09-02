import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeControl = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setDarkMode(true);
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div onClick={() => setDarkMode(!darkMode)} className='relative w-16 h-8 flex items-center dark:bg-red-800 bg-green-950 rounded-full p-1 cursor-pointer'>
            <FaMoon className='text-white size-20' />
            <div className='absolute bg-white dark:bg-medium w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ' style={darkMode ? { left: '2px' } : { right: '2px' }}>
                <FaSun className='ml-auto size-20 text-yellow-400' />
            </div>

        </div>
    );
};



export default ThemeControl;