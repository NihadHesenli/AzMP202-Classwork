import image from '../../assets/Illustration.png';
import styles from './index.module.scss';

const Section1 = () => {
  return (
    <div className={styles.container1}>
      <div className="main">
        <img src={image} alt="" />
        <h1>Get your most important tasks done in no time</h1>
        <p>Sign up for free and turbocharge your productivity today with the world’s best product management platform</p>
        <div className="input">
          <input type="email" placeholder='Enter your email' />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
