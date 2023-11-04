import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    // MdOutlineVideoLibrary,
    // MdHistory,
    // MdOutlineSmartDisplay,
    // MdOutlineWatchLater,
    // MdThumbUpOffAlt,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
// import { FaRegCompass } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { GiEclipse } from "react-icons/gi";
import { RiLightbulbLine } from "react-icons/ri";

import SidebarMenuItem from "./SidebarMenuItem";
import { useApiData } from "../context/contextApi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    const { selectedCategory, setSelectedCategory, mobileMenu } = useApiData();

    const navigate = useNavigate();

    const selectCategoryHandler = (name: string, type: string) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    }

    console.log(selectedCategory)

    const mainLinks = [
        {
            icon: <MdHomeFilled />,
            name: "Home",
            type: 'home'
        },
        // {
        //     icon: <FaRegCompass />,
        //     name: "Explore",
        //     type: 'home'
        // },
        {
            icon: <MdOutlineSlowMotionVideo />,
            name: "Shorts",
            type: 'category'
        },
        {
            icon: <MdSubscriptions />,
            name: "Subscriptions",
            type: 'category'
        },
    ];

    // const secondaryLinks = [
    //     {
    //         icon: <MdOutlineVideoLibrary />,
    //         name: "Library",
    //     },
    //     {
    //         icon: <MdHistory />,
    //         name: "History",
    //     },
    //     {
    //         icon: <MdOutlineSmartDisplay />,
    //         name: "Your Videos",
    //     },
    //     {
    //         icon: <MdOutlineWatchLater />,
    //         name: "Watch Later",
    //     },
    //     {
    //         icon: <MdThumbUpOffAlt />,
    //         name: "Liked Videos",
    //     },
    // ];

    const subscriptionLinks = [
        { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
        {
            icon: <TbMusic />,
            name: "Music",
            type: 'category'
        },
        {
            icon: <MdOutlineSportsVolleyball />,
            name: "Sport",
            type: 'category'
        },
        {
            icon: <TbDeviceGamepad2 />,
            name: "Gaming",
            type: 'category'
        },
        {
            icon: <GiFilmStrip />,
            name: "Films",
            type: 'category'
        },
        { name: "Live", icon: <MdLiveTv />, type: "category" },
        { name: "News", icon: <ImNewspaper />, type: "category" },
        { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
        {
            name: "Fashion & beauty",
            icon: <GiEclipse />,
            type: "category",
            divider: true,
        },
    ];

    const helpLinks = [
        {
            icon: <IoSettingsOutline />,
            name: "Settings",
            type: 'menu'
        },
        {
            icon: <MdOutlinedFlag />,
            name: "Report history",
            type: 'menu'
        },
        {
            icon: <MdOutlineHelpOutline />,
            name: "Help",
            type: 'menu'
        },
        {
            icon: <MdOutlineFeedback />,
            name: "Send feedback",
            type: 'menu'
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
        <div className='hidden md:block w-[240px] h-full absolute md:relative z-10 ml-4 pr-4 overflow-y-auto translate-x-[240] md:translate-x-0 transition-all pb-8 sidebar'>
            <ul className='flex flex-col mt-3 mb-3'>
                {
                    mainLinks.map(({ icon, name, type }) => {
                        return <SidebarMenuItem key={name} name={name} icon={icon} action={() => { selectCategoryHandler(name, type) }} className={`${selectedCategory === name
                            ? "bg-[#0000000D]"
                            : ""
                            }`} />
                    })
                }
            </ul>
            {/* <ul className="flex flex-col mt-3 mb-3 border-t-[1px] border-[#cccccc]">
                {secondaryLinks.map(({ icon, name }, index) => {
                    return (
                        <SidebarMenuItem index={index} key={name} name={name} icon={icon} action={() => { }} className={`${index === 0 ? 'mt-3' : ''}`} />
                    );
                })}
            </ul> */}
            <ul className="flex flex-col mt-3 mb-3 border-t-[1px] border-[#cccccc]">
                <h3 className="mt-3 font-semibold pl-6">
                    Explore
                </h3>
                {subscriptionLinks.map(({ icon, name }, index) => {
                    return (
                        <SidebarMenuItem key={name} name={name} icon={icon} action={() => { }} className={`${index === 0 ? 'mt-1' : ''}`} />
                    );
                })}
            </ul>
            <ul className="flex flex-col mt-3 mb-3 border-t-[1px] border-[#cccccc]">
                {helpLinks.map(({ icon, name }, index) => {
                    return (
                        <SidebarMenuItem key={name} name={name} icon={icon} action={() => { }} className={`${index === 0 ? 'mt-3' : ''}`} />
                    );
                })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm font-medium p-4 text-[#606060] border-t-[1px] border-[#cccccc]">
                {textLinks[0].map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm font-medium p-4 text-[#606060]">
                {textLinks[1].map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
            <span className="px-4 text-sm font-normal text-[#606060]">&copy; 2023 Google</span>
            <br />
        </div >
    )
}

export default Sidebar;