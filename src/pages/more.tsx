export default function More() {
    return (
        <div className="fixed bottom-0 left-0 w-full h-fit bg-card z-30">
            <MoreItem label="Reply" />
            <MoreItem label="Reply to all" />
            <MoreItem label="Forward" />
            <MoreItem label="Delete" />
            <MoreItem label="Mark as read" />
            <MoreItem label="Mark as unread" />
        </div>
    );
}

function MoreItem({ label }: { label: string }) {
    return (
        <div className="w-full px-4 py-2">
            <div className="text-foreground text-lg">{label}</div>
        </div>
    );
}
