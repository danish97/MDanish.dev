import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils.js";
export const ThemeToggle = () =>{
    const [isDarkMode,setisDarkMode] = useState(true)
    useEffect(() =>{
        const getTheme = localStorage.getItem("theme");
        if(getTheme === "light"){
            setisDarkMode(false);
            localStorage.setItem("theme", "light")
            document.documentElement.classList.add("light")
        }
        else{
            setisDarkMode(true);
            document.documentElement.classList.remove("light")
        }
    }, [])
    const toggleTheme = () =>{
        if(!isDarkMode){
            setisDarkMode(true);
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.remove("light")
        }
        else{
            setisDarkMode(false);
            localStorage.setItem("theme", "light")
            document.documentElement.classList.add("light")
        }
    }
    return (
    <button onClick={toggleTheme} className={cn(
        "fixed top-15 md:top-5 right-8 z-50 rounded-full gradient-border p-2 transition-colors duration-300",
        "focus:outline-hidden"

    )}>
        
        {isDarkMode? (
            <Sun className="h-6 w-6 text-yellow-200"/> 
        ) : (
            <Moon className="h-6 w-6 text-blue-200"/>
        )}
    </button>
        );
};

