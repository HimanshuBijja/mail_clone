import { ChevronLeft, Trash2Icon, Mail, MoreHorizontal } from "lucide-react";


export default function Nav() {

    return (
        <div className="flex flex-row items-center justify-between my-5">
                <div>
                    <ChevronLeft size={30}/>
                </div>
                <div className="flex flex-row items-center justify-between gap-6">
                    <Trash2Icon size={22} strokeWidth={2}/>
                    <Mail size={22} strokeWidth={2}/>
                    <MoreHorizontal size={22} strokeWidth={2}/>
            </div>
        </div>
    );
}