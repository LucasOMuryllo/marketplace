import React, { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    const menuItems = [
        { text: "Pages", href: "#" },
        { text: "Account", href: "#" },
        { text: "Products", href: "#" },
        { text: "Contact", href: "#" },
    ];

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {menuItems.map((item, index) => (
                <Typography
                    key={index}
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <a
                        href={item.href}
                        className="flex items-center hover:text-blue-500 transition-colors"
                    >
                        {item.text}
                    </a>
                </Typography>
            ))}
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 mt-2 mb-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 flex items-center"
                >
                    <img src="/nike.png" alt="Nike logo" className="h-6 w-6 mr-2" />
                    Naike
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
