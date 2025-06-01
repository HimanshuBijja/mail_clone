import { atom } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {
        name: "Himanshu",
        from_name: "23311A05P5 (D) Himanshu",
        from_email: "23311A05P5@cse.sreenidhi.edu.in",
        week: "Mon",
        date: "2 June",
        year: "2025",
        time: "12:47",
        time2: "PM",
        to: "CSE Gate pass",
        to_email: "cse-gatepass@sreenidhi.edu.in",
        message: "Name: Himanshu",
        message2: "Roll No: 23311A05P5",
        message3: "Reason: Gate pass",
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
        week: "Mon",
        date: "2 June",
        year: "2025",
        time: "12:47",
        time2: "PM",
        to: "23311A05P5 (D) Himanshu",
        to_email: "23311A05P5@cse.sreenidhi.edu.in",
        cc_to_email: "gatepass@sreenidhi.edu.in",
        message: "approved",
        slug: {
            from: "CSE Gate pass",
            to: "me",
            to2: ", gatepass",
            
        },
    },
})

