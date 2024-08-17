import "./pagination.css"
function Pagination (){
    return(
        <div className="pagination">
            <img src="previous.png" className="previousImag"/>
            <div className="page_1">1</div>
            <div className="dot">...</div>
            <div className="page_2">2</div>
            <div className="page_3">3</div>
            <div className="page_4">4</div>
            <div className="page_5">5</div>
            <div className="dot_1">...</div>
            <div className="page_6">6</div>
            <div className="page_7">7</div>
            <div className="page_8">8</div>
            <img src="next.png" className="nextImg"/>
        </div>
    )

}
export default Pagination;