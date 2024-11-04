'use client'
import { useEffect } from "react";
import {
Menubar,
MenubarContent,
MenubarItem,
MenubarMenu,
MenubarSub,
MenubarSubContent,
MenubarSubTrigger,
MenubarTrigger,
} from "@/components/ui/menubar"

export default function NavMenu() {

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system";
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme("system");
        }
    }, []);

    const applyTheme = (theme: "light" | "dark" | "system") => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            // Use system preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    };

    const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <Menubar className="shadow-xl">
            <MenubarMenu>
                <MenubarTrigger>Explore</MenubarTrigger>
                <MenubarContent>
                <MenubarItem>Home</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                <MenubarSub>
                    <MenubarSubTrigger>Appearance</MenubarSubTrigger>
                    <MenubarSubContent>
                    <MenubarItem onClick={() => handleThemeChange("light")}>
                      Light Mode
                    </MenubarItem>
                    <MenubarItem onClick={() => handleThemeChange("dark")}>
                      Dark Mode
                    </MenubarItem>
                    <MenubarItem onClick={() => handleThemeChange("system")}>
                      System Default
                    </MenubarItem>
                    </MenubarSubContent>
                </MenubarSub>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}