import { ChevronsLeft, CornerUpLeft, CornerUpRight } from "lucide-react";

export default function Reply() {
    return (
        <div className=" w-full grid grid-cols-3 gap-3 p-2 px-4 text-end h-15">
            <div className="col-span-1 border flex flex-row justify-between border-secondary/70  rounded-md h-full w-full p-3">
                <CornerUpLeft size={18} strokeWidth={2} />
                <div>reply</div>
            </div>
            <div className="col-span-1 border flex flex-row justify-between border-secondary/70  rounded-md h-full w-full p-3">
                <ChevronsLeft size={20} strokeWidth={2} />
                <div>reply all</div>
            </div>
            <div className="col-span-1 flex flex-row justify-between border border-secondary/70  rounded-md h-full w-full p-3">
                <CornerUpRight size={18} strokeWidth={2} />
                <div>forward</div>
            </div>
        </div>
    );
}
