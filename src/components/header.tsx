import { Star } from "lucide-react";
import { useRecoilValue } from "recoil";
import { messageAtom } from "../store/atoms/atoms";

export default function Header() {
    const heading = useRecoilValue(messageAtom);
    return (
        <div className="relative flex flex-row items-center justify-between mx-4 my-5 z-0 ">
            <h1
                className=" font-semibold text-foreground"
                style={{ fontSize: 23 }}
            >
                {heading}
            </h1>
            <Star size={22} strokeWidth={2} />
        </div>
    );
}
