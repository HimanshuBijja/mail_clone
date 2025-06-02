import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom, gatepassAtom, messageAtom } from "../store/atoms/atoms";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Info() {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    return (
        <div className="flex flex-col gap-2 text-foreground mt-10 justify-center px-4">
            <input
                onChange={(e) => setPassword(String(e.target.value))}
                placeholder="Enter 8 digit password"
            />
            <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={() => {
                    if (password == "?@#") {
                        setShow(true);
                    } else {
                        setShow(false);
                        alert("wrong password");
                    }
                }}
            >
                Enter
            </button>
            {show && <Details />}
        </div>
    );
}

function Details() {
    const userDetails = {
        name: "",
        from_name: "",
        from_email: "",
        week: "Sun",
        date: "1 June",
        year: "2025",
        time: "12:47",
        time2: "PM",
        to: "CSE Gate pass",
        to_email: "cse-gatepass@sreenidhi.edu.in",
        message: "",
        message2: "",
        message3: "",
        message4: "",
        slug: {
            from: "me",
            to: "CSE",
        },
    };
    const gatepassDetails = {
        name: "CSE Gate pass",
        from_name: "CSE Gate pass",
        from_email: "cse-gatepass@sreenidhi.edu.in",
        week: "Sun",
        date: "1 June",
        year: "2025",
        time: "12:47",
        time2: "PM",
        to: "",
        to_email: "",
        cc_to_email: "gatepass@sreenidhi.edu.in",
        message: "",
        slug: {
            from: "CSE Gate pass",
            to: "me",
            to2: ", gatepass",
        },
    };

    const [user, setUser] = useRecoilState(userAtom);
    const [gatepass, setGatepass] = useRecoilState(gatepassAtom);
    const [heading, setHeading] = useRecoilState(messageAtom);
    const navigate = useNavigate();
    return (
        <section className="flex flex-col gap-2 text-foreground mt-10 justify-center px-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center mb-4">Enter Heading</h1>
                <input
                    onChange={(e) => {
                        setHeading(e.target.value);
                        localStorage.setItem("heading", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Heading"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Enter User Details
                </h1>
                {/* <input
                    onChange={(e) => {
                        userDetails.name = e.target.value;
                        localStorage.setItem("userDetails.name", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Your Name"
                /> */}

                <input
                    onChange={(e) => {
                        userDetails.from_name = e.target.value;
                        gatepassDetails.to = e.target.value;
                        localStorage.setItem("userDetails.from_name", String(e.target.value));
                        localStorage.setItem("gatepassDetails.to", String(e.target.value));
                        const firstword = e.target.value.split(" ")[0].toLowerCase();
                        localStorage.setItem("userDetails.from_email", String(firstword) + "@cse.sreenidhi.edu.in");
                        localStorage.setItem("gatepassDetails.to_email", String(firstword) + "@cse.sreenidhi.edu.in");
                        
                        const thirdword = e.target.value.split(" ")[2];
                        localStorage.setItem("userDetails.name", String(thirdword));

                    }}
                    className="w-full"
                    placeholder="RollNo (Section) Name"
                />
                {/* <input
                    onChange={(e) => {
                        userDetails.from_email = e.target.value;
                        gatepassDetails.to_email = e.target.value;
                        localStorage.setItem("userDetails.from_email", String(e.target.value));
                        localStorage.setItem("gatepassDetails.to_email", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="your colleage email"
                /> */}
                <input
                    onChange={(e) => {
                        userDetails.week = e.target.value;
                        gatepassDetails.week = e.target.value;
                        localStorage.setItem("week", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Week (Mon, Tue, Wed, Thu, Fri, Sat, Sun)"
                />
                <input
                    onChange={(e) => {
                        userDetails.date = e.target.value;
                        gatepassDetails.date = e.target.value;
                        localStorage.setItem("date", String(e.target.value));
                        }}
                    className="w-full"
                    placeholder="date 01 Jan "
                />
                {/* <input
                    onChange={(e) => {
                        userDetails.year = e.target.value;
                        gatepassDetails.year = e.target.value;
                        localStorage.setItem("year", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="year 2025 "
                /> */}
                <input
                    onChange={(e) => {
                        userDetails.time = e.target.value;
                        gatepassDetails.time = e.target.value;
                        localStorage.setItem("time", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="time 12:00 "
                />
                <input
                    onChange={(e) => {
                        userDetails.time2 = e.target.value;
                        gatepassDetails.time2 = e.target.value;
                        localStorage.setItem("time2", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="AM/PM"
                />
                {/* <input onChange={(e) => userDetails.to = e.target.value } className="w-full" placeholder="to CSE Gate pass" />
            <input onChange={(e) => userDetails.to_email = e.target.value } className="w-full" placeholder="to_email cse-gatepass@sreenidhi.edu.in" /> */}
                <input
                    onChange={(e) => {
                        userDetails.message = e.target.value;
                        localStorage.setItem("userDetails.message", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Reason"
                />
                <input
                    onChange={(e) => {
                        userDetails.message2 = e.target.value;
                        localStorage.setItem("userDetails.message2", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Reason2"
                />
                <input
                    onChange={(e) => {
                        userDetails.message3 = e.target.value;
                        localStorage.setItem("userDetails.message3", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Reason3"
                />
                <input
                        onChange={(e) => {
                        userDetails.message4 = e.target.value;
                        localStorage.setItem("userDetails.message4", String(e.target.value));
                    }}
                    className="w-full"
                    placeholder="Reason4"
                />
                {/* <input onChange={(e) => userDetails.slug.from = e.target.value } className="w-full" placeholder="from (me)" />
            <input onChange={(e) => userDetails.slug.to = e.target.value } className="w-full" placeholder="to (CSE)" /> */}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Enter Gatepass Details
                </h1>
                {/* <input onChange={(e) => gatepassDetails.name = e.target.value } className="w-full" placeholder="Department Name (CSE Gate pass)" />
                    <input onChange={(e) => gatepassDetails.from_name = e.target.value } className="w-full" placeholder="Department Name (CSE Gate pass)" />
                    <input onChange={(e) => gatepassDetails.from_email = e.target.value } className="w-full" placeholder="Department Email (cse-gatepass@sreenidhi.edu.in)" /> */}
                {/* <input onChange={(e) => gatepassDetails.week = e.target.value } className="w-full" placeholder="Week (Mon, Tue, Wed, Thu, Fri, Sat, Sun)" />
                    <input onChange={(e) => gatepassDetails.date = e.target.value } className="w-full" placeholder="date 01 Jan" />
                    <input onChange={(e) => gatepassDetails.year = e.target.value } className="w-full" placeholder="year 2025 " />  
                    <input onChange={(e) => gatepassDetails.time = e.target.value } className="w-full" placeholder="time 12:00 " /> */}
                {/* <input onChange={(e) => gatepassDetails.time2 = e.target.value } className="w-full" placeholder="AM/PM" /> */}
                {/* <input onChange={(e) => gatepassDetails.to = e.target.value } className="w-full" placeholder=" to Your(RollNo (Section) Name)" />
                    <input onChange={(e) => gatepassDetails.to_email = e.target.value } className="w-full" placeholder=" to_email Your Email" /> */}
                {/* <input onChange={(e) => gatepassDetails.cc_to_email = e.target.value } className="w-full" placeholder="cc email (gatepass@sreenidhi.edu.in)" /> */}
                <input
                    onChange={(e) => {
                        gatepassDetails.message = e.target.value;
                        localStorage.setItem("gatepassDetails.message", String(e.target.value));
                    }}  
                    className="w-full"
                    placeholder="message (approved)"
                />
                {/* <input onChange={(e) => gatepassDetails.slug.from = e.target.value } className="w-full" placeholder="from (CSE Gate pass)" />
                    <input onChange={(e) => gatepassDetails.slug.to = e.target.value } className="w-full" placeholder="to (me)" /> */}
                {/* <input onChange={(e) => gatepassDetails.slug.to2 = e.target.value } className="w-full" placeholder="to2 (gatepass)" /> */}
                <button
                    className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => {
                        setUser(userDetails);
                        setGatepass(gatepassDetails);
                        setHeading(heading);
                        navigate("/inbox", { replace: true });
                    }}
                >
                    Generate
                </button>
            </div>
        </section>
    );
}

// export const userAtom = atom({
//     key: "userAtom",
//     default: {
//         from_name: "",
//         from_email: "",
//         date: "",
//         year: "2025",
//         time: "",
//         to: "CSE Gate pass",
//         to_email: "cse-gatepass@sreenidhi.edu.in",
//         message: "",
//         message2: "",
//         message3: "",
//         message4: "",
//         slug: {
//             from: "",
//             to: "",
//         },
//     },
// })

// export const gatepassAtom = atom({
//     key: "gatepassAtom",
//     default: {
//         from_name: "CSE Gate pass",
//         from_email: "cse-gatepass@sreenidhi.edu.in",
//         date: "",
//         year: "2025",
//         time: "",
//         to: "",
//         to_email: "",
//         cc_to_email: "gatepass@sreenidhi.edu.in",
//         message: "approved",
//         slug: {
//             from: "",
//             to: "",
//             to2: "",

//         },
//     },
// })
