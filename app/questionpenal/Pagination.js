import "./Paginations.css"
function Pagination (){
    return(
        <div className="pagination">
            <div className="previusIcon">
                <img src="previous.png" className="previousImag"/>
            </div>
            <div className="page_1">
                1
            </div>
            <div className="page_1">
                2
            </div>
            <div className="page_1">
                3
            </div>
            <div className="page_1">
                4
            </div>
            <div className="page_1">
                5
            </div>
            <div className="page_1">
                6
            </div>
            <div className="page_1">
                7
            </div>
            <div className="page_1">
                8
            </div>
            <div className="nextIcon">
                <img src="next.png" className="nextImg"/>
            </div>
        </div>
    )

}
export default Pagination;