import { MusicLogo } from "@/assets/icons";
import {
    Bars3Icon,
    GlobeAsiaAustraliaIcon,
    HeartIcon,
    ListBulletIcon,
    ViewColumnsIcon,
    ViewfinderCircleIcon,
} from "@heroicons/react/16/solid";

function Sidebar() {
    return (
        <div className="h-screen flex flex-col justify-between w-[300px] bg-gray700 px-[20px]">
            <div className="">
                <div className="flex gap-1 justify-between items-center max-h-16 mt-5">
                    <div className="flex gap-1 items-center">
                        <div className="h-[40px] w-[40px] ">
                            <MusicLogo />
                        </div>
                        <div>Musik</div>
                    </div>
                    <div className="p-3">
                        <Bars3Icon className="w-[23px] h-[24px] ml-[27px] " />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center px-2">
                            <div className="">
                                <ViewColumnsIcon className="w-[23px] h-[24px]" />
                            </div>
                            <div className="text-sm font-semibold">Discover</div>
                        </div>
                        <div className="flex gap-2 items-center px-2">
                            <div className="">
                                <GlobeAsiaAustraliaIcon className="w-[23px] h-[24px]" />
                            </div>
                            <div className="text-sm font-semibold">Browser</div>
                        </div>
                    </div>
                    <div>
                        <div className="my-5 text-sm text-grayA">My Collection</div>
                        <div className="my-5 flex gap-3 flex-col">
                            <div className="flex gap-2 items-center px-2">
                                <div>
                                    <HeartIcon className="w-[23px] h-[24px]" />
                                </div>
                                <div className="text-sm font-semibold">Likes</div>
                            </div>
                            <div className="flex gap-2 items-center px-2">
                                <div>
                                    <ListBulletIcon className="w-[23px] h-[24px]" />
                                </div>
                                <div className="text-sm font-semibold">Likes</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="my-5 text-sm text-grayA">Setting</div>
                        <div className="my-5 flex gap-3 flex-col">
                            <div className="flex gap-2 items-center px-2">
                                <div>
                                    <ViewfinderCircleIcon className="w-[23px] h-[24px]" />
                                </div>
                                <div className="text-sm font-semibold">Fullscreen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-grayA text-xs my-5 justify-center flex gap-3 flex-wrap">
                <span>Blog</span>
                <span>Pricing Plans</span>
                <span>Privacy Terms</span>
            </div>
        </div>
    );
}

export default Sidebar;
