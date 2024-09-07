import { useLocation } from "react-router-dom"
import NavBar from "../components/NavBar";
import Announcements from "../components/Announcements";

const Success = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <NavBar />
            <Announcements />
            <div className="max-w-2xl xl:px-24 px-6 py-8 ">
                Success

            </div>
        </>
    );
};

export default Success
