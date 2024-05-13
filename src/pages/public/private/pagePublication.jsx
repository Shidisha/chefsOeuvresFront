import Header from "../../../components/header";
import SideBar from "../../../components/sidebar";

const PagePublication = () =>{
    return(
        <div>
            <Header/>
            <main className=" flex  gap-12 py-4 pl-12 pr-12">
            <SideBar/>
            <div>
                <button className=" p-2 border rounded-full">Publier</button>
            </div>

            </main>
        </div>
    )
}

export default PagePublication;