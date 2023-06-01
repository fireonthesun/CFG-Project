
import '../Paris.css';
import ParisImg from '../parisImg.jpg';
import WorldIcon from '../WorldIcon';


function Paris() {
  return (
    <div className="City">
      <WorldIcon/>
      <header className="City-header">
        <img className="City-header__paris" src={ParisImg} alt="Paris Panorama" />
      </header>
      <div className="City-container">
        <article className="intro">
          <h1 className="intro__title"> Paris </h1>
          <p>
            Cat ipsum dolor sit amet, attack dog, run away and pretend to be victim. Purr like an angel. Skid on floor, crash into wall rub face on owner going to catch the red dot today going to catch the red dot today so lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back and growl at dogs in my sleep yet enslave the hooman eat from dog's food. Meow rub face on owner trip owner up in kitchen i want food but trip on catnip if human is on laptop sit on the keyboard touch my tail, i shred your hand purrrr.
          </p>
        </article>
        <div className="cards">
          <div className="cards__item">Top Paris Sightseeing</div>
          <div className="cards__item">Up Coming Events</div>
        </div>
      </div>
    </div>
  );
}

export default Paris;
