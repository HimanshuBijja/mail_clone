import { ChevronDown, CornerUpLeft, MoreHorizontal } from "lucide-react";

export default function Head() {
    return (
        <div className="my-5">
            <div className="grid grid-cols-8 items-center">
                <div className="col-span-1 justify-self-start">
                    <div className=" w-14 h-14 rounded-full bg-pink-400">

                    </div>
                </div>
                <div className="col-span-6 px-8">
                    <div className=" flex flex-row items-center gap-3">
                        <div className="text-foreground font-medium">
                            me
                        </div>
                        <div>
                            Date
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        to CSE
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
                <div className="col-span-1 justify-self-end">
                    <div className="flex flex-row items-center gap-5">
                        <CornerUpLeft  />
                        <MoreHorizontal  />
                    </div>
                </div>

            </div>
        </div>
    );
}
