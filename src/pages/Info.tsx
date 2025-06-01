export function Info(){
    return (
       <section>
        <Inputbox />
       </section>
    )
}


function Inputbox(){
    return (
        <div className="flex flex-col gap-2">
            <input placeholder="from_name" />
            <input placeholder="from_email" />
            <input placeholder="date" />
            <input placeholder="year" />
            <input placeholder="time" />
            <input placeholder="to" />
            <input placeholder="to_email" />
            <input placeholder="message" />
            <input placeholder="message2" />
            <input placeholder="message3" />
            <input placeholder="message4" />
            <input placeholder="slug.from" />
            <input placeholder="slug.to" />

        </div>
    )
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

