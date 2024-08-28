import Features from '../components/Feature';
import featuresData from '../data/features.json';
import heroContentData from '../data/heroContent.json';

const BodyHome = () => {
  return (
    <>
      <div className="hero">
        <section className="hero-content">
          <h2 className="se-only">Promoted Content</h2>
          {heroContentData.heroContent.map((item, index) => (
            <p key={index} className={item.className}>
              {item.text}</p>
          ))}
        </section>
      </div>
      <section className="features">
          <h2 className="sr-only">Features</h2>
          
        {featuresData.map((features, index) => (
          <Features 
          key={index}
          img={features.img}
          alt={features.alt}
          title={features.title}
          description={features.description}
          />  
        ))} 
      </section>
    </> 

);
}
export default BodyHome;





{/* <h2 className="sr-only">Create an account</h2>
<p>Interested in opening an account?</p>
<a href="/signup" className="button">Get started</a> */}