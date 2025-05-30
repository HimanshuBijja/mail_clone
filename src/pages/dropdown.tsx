export default function Dropdown() {
    return (
        <div className="border border-secondary/70 rounded-lg py-2 px-3 mt-4">
            <div className="flex flex-col">
                <div className="grid grid-cols-8">
                    <div className="col-span-1">From</div>
                    <div className="col-span-7 mx-2">
                        <div className="text-foreground font-medium">name</div>
                        <div>mail</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">to</div>
                    <div className="col-span-7 mx-2">
                        <div className="text-foreground font-medium">name</div>
                        <div>mail</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">date</div>
                    <div className="col-span-7 mx-2">
                        <div className="text-foreground font-medium">
                            date and time
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
