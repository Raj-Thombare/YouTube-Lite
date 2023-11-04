import { Header, Sidebar } from "../components";

const Home = () => {
    return (
        <div className="max-h-screen overflow-hidden">
            <div className="h-[7.5vh]">
                <Header />
            </div>
            <div className="h-[92.5vh] flex">
                <Sidebar />
            </div>
        </div>
    )
}

export default Home;

