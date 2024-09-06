import React, { useEffect, useState } from 'react';
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

const ThemeControl = () => {
    // Set initial theme to light mode (darkMode = false)
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? true : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center ml-10">
            {/* Sun Icon for Light Mode (Visible when darkMode is false) */}
            {!darkMode && (

                <FiSun onClick={() => setDarkMode(true)} className='text-black dark:text-white text-2xl' />
            )}

            {/* Moon Icon for Dark Mode (Visible when darkMode is true) */}
            {darkMode && (
                <LuMoon onClick={() => setDarkMode(false)} className='text-black dark:text-white text-2xl' />
            )}
        </div>
    );
};

export default ThemeControl;