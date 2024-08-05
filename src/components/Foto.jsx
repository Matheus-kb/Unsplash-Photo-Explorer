import PropTypes from 'prop-types';
import styles from './Foto.module.css';

const Foto = ({foto, setAmpliar}) => {
    return ( <div className={styles.fotoItem} onClick={() => setAmpliar(foto)}>
        <img src={foto.urls.small} alt={foto.alt_description} className={styles.fotoImage}/>
    </div> );
}

Foto.propTypes = {
    foto: PropTypes.object.isRequired,
    setAmpliar: PropTypes.func.isRequired
};
 
export default Foto;