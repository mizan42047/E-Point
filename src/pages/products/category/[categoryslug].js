import { useRouter } from "next/router";
const Archive = () => {
    const { query } = useRouter();
    return (
        <div className="archive">
            <h1>Archive</h1>
        </div>
    )
}

export default Archive;
