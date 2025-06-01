import { atom } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {
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
    },
})
        

export const gatepassAtom = atom({
    key: "gatepassAtom",
    default: {
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
    },
})

