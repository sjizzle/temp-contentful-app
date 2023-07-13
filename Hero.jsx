import heroimg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby raclette pug hammock mukbang PBR&B hot chicken, tattooed
            cred. Portland master cleanse banh mi chambray gentrify pitchfork
            yr. Tattooed irony vinyl, franzen air plant prism literally mixtape
            migas single-origin coffee.
          </p>
          <div className="img-container">
            <img src={heroimg} alt="woman and the browser" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
