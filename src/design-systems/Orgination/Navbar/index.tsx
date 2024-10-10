import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";

function Navbar() {
    return (
        <div className="border-b-[1px] border-b-gray700 w-full px-9 py-4 flex justify-between ">
            <div className="flex bg-gray700 rounded-lg items-center p-3 max-w-md w-full gap-3">
                <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
                <input className="bg-gray700 w-full" placeholder="Search...." />
            </div>
            <div className="flex gap-3 items-center">
                <div>
                    <ShoppingCartIcon className="w-[23px] h-[24px]" />
                </div>
                <div>
                    Login
                </div>
                <button className="rounded-md bg-colorPrimary py-0.5 px-4">
                    Sign Up
                </button>
            </div>
        </div>
    )
}
export default Navbar;
