import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {
    const onClick = () => {
        alert('Clicou');
    };
    return (
        <header className="header">
            <h1>Curiosidades Aleatórias</h1><br />
            <p>Você está pronto?</p>
            <Button bgColor="green" text="Curiosidade" onClick={onClick} />
        </header>
    );
};

Header.defaultProps = {
    title: 'compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;