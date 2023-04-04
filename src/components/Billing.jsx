import { apple, concu, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={concu} alt="billing" className="w-[100%] h-[100%] relative z-[5] animate-bounce" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Démarquez-vous de <br className="sm:block hidden" /> la concurrence
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Avec nos cartes, vous montrez à vos clients que 
        vous êtes à la pointe de la technologie et que vous vous souciez 
        de leur expérience. C'est un moyen efficace de vous démarquer de 
        la concurrence et de laisser une impression durable.
      </p>
    </div>
  </section>
);

export default Billing;
