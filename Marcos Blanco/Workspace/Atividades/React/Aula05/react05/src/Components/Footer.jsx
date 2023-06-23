import PropTypes from 'prop-types';

const Footer = ({ title }) => {
    const onClick = () => {
        alert('Clicou');
    };
    return (
        <footer className="footer">
            <h2>Curiosidades Aleatórias</h2>
        </footer>
    );
};

Header.defaultProps = {
    title: 'compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;