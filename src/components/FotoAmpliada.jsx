import PropTypes from 'prop-types';
import styles from './FotoAmpliada.module.css';

const FotoAmpliada = ({ampliar, setAmpliar}) => {
    return ( 
        <div onClick={() => setAmpliar(null)}>
            <img className={styles.image} src={ampliar.urls.regular} alt={ampliar.alt_description} />
        </div>
     );
}

FotoAmpliada.propTypes = {
    ampliar: PropTypes.object.isRequired,
    setAmpliar: PropTypes.func.isRequired
};

 
export default FotoAmpliada;