import { Star } from "lucide-react";

export default function Header() {
    return (
        <div className="relative flex flex-row items-center justify-between mx-4 my-5 z-0 ">
            <h1
                className=" font-semibold text-foreground"
                style={{ fontSize: 23 }}
            >
                Permission to leave
            </h1>
            <Star size={22} strokeWidth={2} />
        </div>
    );
}
