import { CornerUpLeft } from "lucide-react";
import { CornerUpRight } from "lucide-react";
import { ChevronsLeft } from "lucide-react";

export default function Foot() {
    return (
        <div
            className="absolute bottom-1 left-0 w-full bg-background z-20"
            style={{ fontSize: 13, fontWeight: 550 }}
        >
            <hr className="text-secondary/20" />

            <Reply />
        </div>
    );
}


function Reply() {
    return (
        <div className=" w-full grid grid-cols-3 gap-3 p-2 px-4 text-end h-14">
            <div className="col-span-1 border flex flex-row justify-between border-secondary/70  rounded-md h-full w-full px-3 py-2">
                <CornerUpLeft size={18} strokeWidth={2} />
                <div>reply</div>
            </div>
            <div className="col-span-1 border flex flex-row justify-between border-secondary/70  rounded-md h-full w-full px-3 py-2">
                <ChevronsLeft size={20} strokeWidth={2} />
                <div>reply all</div>
            </div>
            <div className="col-span-1 flex flex-row justify-between border border-secondary/70  rounded-md h-full w-full px-3 py-2">
                <CornerUpRight size={18} strokeWidth={2} />
                <div>forward</div>
            </div>
        </div>
    );
}
