import './Assignment_header.css'
import Watch from './Watch';
import Pagination from './Pagination';
function Assignment_header () {
    return(
        <>
            <div className="header">
                <div className='main_header'>
                    <div className='logo'>
                        <div className='logoImg'>
                        <img src="Logo.png"/>
                        </div>
                        <Pagination/>
                    </div>
                    <div className='submit'>
                        <button className='submitBtn'>
                            <a href="success" className="submitButton"> Submit </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mobile_header'></div>
        </>

        
    );
};
export default Assignment_header;