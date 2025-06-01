export default function MoreHorizontalInfo({ data }: { data: any }) {
    return (
        <div
            className="mt-3 mb-2 text-lg no-underline mx-5 "
            style={{ fontSize: 15, fontWeight: 550 }}
        >
            {" "}
            <div className="border-l border-secondary/90 p-2 align-top">
                On {data.week}, {data.date}, {data.year} at {data.time} {data.time2} {data.from_name}
                <div>
                    {"<"}
                    <span className="text-line underline underline-offset-2 ">
                        {data.from_email}
                    </span>
                    {"> "}
                    wrote:
                </div>
                <div className="border-l border-secondary/70 px-2 mx-2" 
                style={{ fontSize: 15, fontWeight: 550 }}
                >
                    <div>{data.message}</div>
                    <div>{data.message2}</div>
                    <div>{data.message3}</div>
                    <div>{data.message4}</div>
                </div>
            </div>
        </div>
    );
}
