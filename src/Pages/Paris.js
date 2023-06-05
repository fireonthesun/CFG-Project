import '../Paris.css';
import parisImg from '../parisImg.jpg';
import WorldIcon from '../WorldIcon';


function Paris() {
  return (
    <div className="City">
      <WorldIcon/>
      <header className="City-header">
        <img className="City-header__paris" src={parisImg} alt="Paris Panorama" />
      </header>
      <div className="City-container">
        <article className="intro">
          <h1 className="intro__title">Paris</h1>
          <h2>Cat ipsum dolor. Meow rub face on owner trip owner up in kitchen i want food but trip on catnip if human is on laptop sit on the keyboard.</h2> 
          <p>
            Cat ipsum dolor sit amet, attack dog, run away and pretend to be victim. Fight own tail i love cats i am one wake up scratch humans leg for food then purr then i have a and relax or playing with balls of wool i like cats because they are fat and fluffy, and my slave human didn't give me any food so i pooped on the floor. Purr like an angel. Skid on floor, crash into wall rub face on owner going to catch the red dot today going to catch the red dot today so lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back and growl at dogs in my sleep yet enslave the hooman eat from dog's food.
          </p>
        </article>
        <div className="cards">
          <div className="cards__item">Top Paris Sightseeing</div>
          <div className="cards__item">Upcoming Events</div>
        </div>
      </div>
    </div>
  );
}

export default Paris;
