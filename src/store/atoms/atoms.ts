import { atom } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {
        name: localStorage.getItem("userDetails.name") ?? "",
        from_name: localStorage.getItem("userDetails.from_name") ?? "",
        from_email: localStorage.getItem("userDetails.from_email") ?? "",
        week: localStorage.getItem("week") ?? "Sun",
        date: localStorage.getItem("date") ?? "1 June",
        year: localStorage.getItem("year") ?? "2025",
        time: localStorage.getItem("time") ?? "12:47",
        time2: localStorage.getItem("time2") ?? "PM",
        to: "CSE Gate pass",
        to_email: "cse-gatepass@sreenidhi.edu.in",
        message: localStorage.getItem("userDetails.message") ?? "",
        message2: localStorage.getItem("userDetails.message2") ?? "",
        message3: localStorage.getItem("userDetails.message3") ?? "",
        message4: localStorage.getItem("userDetails.message4") ?? "",
        slug: {
            from: "me",
            to: "CSE",
        },
    },
})
        

export const gatepassAtom = atom({
    key: "gatepassAtom",
    default: {
        name: "CSE Gate pass",
        from_name: "CSE Gate pass",
        from_email: "cse-gatepass@sreenidhi.edu.in",
        week: localStorage.getItem("week") ?? "Sun",
        date: localStorage.getItem("date") ?? "1 June",
        year: localStorage.getItem("year") ?? "2025",
        time: localStorage.getItem("time") ?? "12:47",
        time2: localStorage.getItem("time2") ?? "PM",
        to: localStorage.getItem("gatepassDetails.to") ?? "",
        to_email: localStorage.getItem("gatepassDetails.to_email") ?? "",
        cc_to_email: "gatepass@sreenidhi.edu.in",
        message: localStorage.getItem("gatepassDetails.message") ?? "approved",
        slug: {
            from: "CSE Gate pass",
            to: "me",
            to2: ", gatepass",
            
        },
    },
})

