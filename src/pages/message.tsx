import {
    ChevronLeft,
    Mail,
    MoreHorizontal,
    Star,
    Trash2Icon,
} from "lucide-react";
import Head from "./head";
import Nav from "./Nav";

export default function Message() {
    return (
        <section className="h-screen w-screen p-4">
            <Nav />
  

            <div className="flex flex-row items-center justify-between my-5 ">
                <h1 className="text-2xl font-medium text-foreground">Message</h1>
                <Star />
            </div>



            <Head />
        </section>
    );
}
