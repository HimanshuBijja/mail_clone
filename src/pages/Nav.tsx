import { ChevronLeft, Trash2Icon, Mail, MoreHorizontal } from "lucide-react";


export default function Nav() {

    return (
        <div className="flex flex-row items-center justify-between my-5">
                <div>
                    <ChevronLeft size={30}/>
                </div>
                <div className="flex flex-row items-center justify-between gap-5">
                    <Trash2Icon />
                    <Mail />
                <MoreHorizontal />
            </div>
        </div>
    );
}