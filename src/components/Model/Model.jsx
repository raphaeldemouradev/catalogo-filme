import { useNavigate } from 'react-router-dom';
import './StylesModel.css';

function Model() {
    const funcNav = useNavigate(); 
    function Navega() {
        funcNav('/Detalhes')
    }
    
    return (
        <div className='contentModel'>
          <div className='imgModel'>
            <img src="" alt="img" />  
          </div>  
          
          <div className='detailsModel'>
            <button onClick={Navega}>Detalhes</button>
          </div>
        </div>
    )
}

export default Model