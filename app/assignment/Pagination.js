import "./pagination.css"
function Pagination (){
    return(
        <div className="pagination">
            <img src="previous.png" className="previousImag" alt=""/>
            <a className="page_1">1</a>
            <a className="dot">...</a>
            <a className="page_2">2</a>
            <a className="page_3">3</a>
            <a className="page_4">4</a>
            <a className="page_5">5</a>
            <a className="dot_1">...</a>
            <a className="page_6">6</a>
            <a className="page_7">7</a>
            <a className="page_8">8</a>
            <img src="next.png" className="nextImg" alt=""/>
        </div>
    )

}
export default Pagination;