import Reply from "./Reply";

export default function Foot() {
    return (
        <div
            className="absolute bottom-4 w-full"
            style={{ fontSize: 13, fontWeight: 550 }}
        >
            <hr className="text-secondary/20" />

            <Reply />
        </div>
    );
}
