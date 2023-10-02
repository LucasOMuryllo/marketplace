import React from "react";
import { Typography } from "@material-tailwind/react";

const LINKS = [
    {
        title: "Product",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

const currentYear = new Date().getFullYear();

type LinkListProps = {
    title: string;
    items: string[];
};

const LinkList: React.FC<LinkListProps> = ({ title, items }) => (
    <ul>
        <Typography
            variant="small"
            color="blue-gray"
            className="mb-3 font-medium opacity-40"
        >
            {title}
        </Typography>
        {items.map((link) => (
            <li key={link}>
                <Typography
                    as="a"
                    href="#"
                    color="gray"
                    className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                >
                    {link}
                </Typography>
            </li>
        ))}
    </ul>
);

export const FooterWithSocialLinks: React.FC = () => (
    <footer className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 mt-6">
                <Typography variant="h5" className="mb-6 flex items-center">
                    <img src="/nike.png" alt="Naike logo" className="h-6 w-6 mr-2" />
                    Naike
                </Typography>
                <div className="grid grid-cols-3 justify-between gap-4">
                    {LINKS.map((linkGroup) => (
                        <LinkList key={linkGroup.title} {...linkGroup} />
                    ))}
                </div>
            </div>
            <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                <Typography
                    variant="small"
                    className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                >
                    &copy; {currentYear} <a href="https://cargon.com.br/">CargOn Teste</a>.
                    All Rights Reserved.
                </Typography>
                <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                    {/* ... Social icons here */}
                </div>
            </div>
        </div>
    </footer>
);
