export default function Dropdown({
    from,
    to,
    date,
    time,
}: {
    from: string;
    to: string;
    date: string;
    time: string;
}) {
    return (
        <div className="border border-secondary/70 rounded-lg py-2 px-3 mt-4">
            <div className="flex flex-col  leading-relaxed gap-3">
                <div className="grid grid-cols-8">
                    <div className="col-span-1 ">From</div>
                    <div className="col-span-7 mx-2 leading-tight">
                        <div className="text-foreground font-bold">
                            {from}
                        </div>
                        <div>mail</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">to</div>
                    <div className="col-span-7 mx-2 leading-tight">
                        <div className="text-foreground font-bold">{to}</div>
                        <div>mail</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">date</div>
                    <div className="col-span-7 mx-2">
                        <div className="text-foreground font-bold">
                            {date} {time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
