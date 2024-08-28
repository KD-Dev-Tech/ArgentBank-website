import PropTypes from 'prop-types';

function Features({img, alt, title, description}) {
    return (
            <div className="feature-item">
                <img className="feature-icon"
                src={img}
                alt={alt}    
                />
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>  
    )
}

Features.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


export default Features;