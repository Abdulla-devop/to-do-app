import topbar from "./TopBar"



/* eslint-disable react/prop-types */
export default function WorkSpace(){
    return(
        <div className="flex flex-col w-full border-opacity-50 h-screen">
            <div className="grid h-20 card rounded-box place-items-center m-1">
                <topbar/>
            </div>
            </div>
    )
}