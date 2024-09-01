import './assignment_header.css';
import Mobile_header from './Mobile_header';
import Pagination from './Pagination';
import Submit_button from './Submit_button';

function Assignment_header () {
    return(
        <>  
            <div className="assignment_header">
                <div className='main_header'>
                    <div className='pagination_logo'>
                        <img src="Logo.png" className='logoImg' alt=""/>
                        <Pagination/>
                    </div>
                <Submit_button/>
                </div>
            </div>
        <Mobile_header/>
        </> 
    );
};
export default Assignment_header;