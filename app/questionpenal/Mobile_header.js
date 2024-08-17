import "./mobile_header.css"
import Header from "../Header";
import Pagination from "./Pagination";
function Mobile_header(){
    return (
        <>
            <Header/>
            <div className="mobile_pagination">
                <Pagination/>
            </div>
        </>
    )
}
export default Mobile_header;