import Reply from "./Reply";

export default function Foot() {
    return (
        <div
            className="fixed bottom-0 left-0 w-full bg-background z-20"
            style={{ fontSize: 13, fontWeight: 550 }}
        >
            <hr className="text-secondary/20" />

            <Reply />
        </div>
    );
}
