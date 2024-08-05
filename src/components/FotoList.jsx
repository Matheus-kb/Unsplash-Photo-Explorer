import PropTypes from 'prop-types';
import Foto from "./Foto";
import styles from './FotoList.module.css'

const FotoList = ({fotos, setAmpliar}) => {
    return ( <div className={styles.fotoList}>
        {fotos.map(foto => (
            <Foto key={foto.id} foto={foto} setAmpliar={setAmpliar}/>
        ))}
        
    </div> );
}

FotoList.propTypes = {
    fotos: PropTypes.array.isRequired,
    setAmpliar: PropTypes.func.isRequired
};
 
export default FotoList;