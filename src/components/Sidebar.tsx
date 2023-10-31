import React from 'react';
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";

const Sidebar = () => {

    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: 'Home'
        },
        {
            icon: <FaRegCompass className='text-xl' />,
            name: 'Explore'
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl' />,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
            name: 'Subscriptions'
        },
    ]

    const secondaryLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl" />,
            name: "Sport",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <IoSettingsOutline className="text-xl" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl" />,
            name: "Report history",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl" />,
            name: "Send feedback",
        },
    ];

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How YouTube works",
            "Test new features",
        ],
    ];

    return (
        <div className='w-2/12 ml-4 pr-4 overflow-auto pb-8 sidebar'>
            <ul className='flex flex-col mt-3 mb-3 border-b-[1px] border-[#cccccc]'>
                {
                    mainLinks.map(({ icon, name }) => {
                        return <li key={name} className={`pl-6 py-3 rounded-lg hover:bg-[#0000000D] ${name === "Home" ? 'bg-[#0000000D] font-bold' : ""} hover:cursor-pointer`}>
                            <a href='/' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm -tracking-wider'>
                                    {name}
                                </span>
                            </a>
                        </li>
                    })
                }
            </ul>
            <ul className="flex flex-col mt-3 mb-3 border-b-[1px] border-[#cccccc]">
                {secondaryLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className="pl-6 py-3 rounded-lg hover:bg-[#0000000D] hover:cursor-pointer">
                            <a href="/" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex flex-col mt-3 mb-3 border-b-[1px] border-[#cccccc]">
                {subscriptionLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className="pl-6 py-3 rounded-lg hover:bg-[#0000000D] hover:cursor-pointer">
                            <a href="/" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex flex-col mt-3 mb-3 border-b-[1px] border-[#cccccc]">
                {helpLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className="pl-6 py-3 rounded-lg hover:bg-[#0000000D] hover:cursor-pointer">
                            <a href="/" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm font-medium p-4 text-[#606060]">
                {textLinks[0].map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm font-medium p-4 text-[#606060]">
                {textLinks[1].map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
            <span className="px-4 text-sm font-medium text-[#606060]">&copy; 2023 Google</span>
            <br />
        </div >
    )
}

export default Sidebar