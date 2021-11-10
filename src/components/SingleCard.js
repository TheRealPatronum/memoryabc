import './SingleCard.css';
import coverCard from '../img/cover2.png';

export default function SingleCard({
  card,
  handleChoice,
  flipped,
  disabled,
  num,
  startFlipEfx,
}) {
  const handleClick = () => {
    if (!disabled) {
      startFlipEfx();
      handleChoice(card);
    }
  };

  return (
    <div className={`card card-${num}`}>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src={coverCard}
          onClick={handleClick}
          alt='card back'
        />
      </div>
    </div>
  );
}
