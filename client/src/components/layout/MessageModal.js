import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DISMISS_MESSAGE } from '../../actions/types';

const MessageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const [dismissed, setDismissed] = useState(false);
  const dispatch = useDispatch();
  const { messageDismissed } = useSelector((state) => state.auth);

  console.log(messageDismissed);

  if (messageDismissed) return <Fragment />;

  return (
    <span
      className={!isOpen ? 'message-modal' : 'message-modal active'}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className='message-modal-dismiss'
        onClick={() => dispatch({ type: DISMISS_MESSAGE })}
      >
        Dismiss
      </span>
      <span className='primary-info'>
        <p>IMPORTANT INFORMATION on listings (pre-booking)</p>
        <p style={{ cursor: 'pointer' }}>
          Read More <i className='icon-chevron-down' />
        </p>
      </span>

      <span className={!isOpen ? 'secondary-info' : 'secondary-info active'}>
        <p>
          Due to the construction of our new cafe, you
          might experience construction noises during your stay between 9-5. While 98% of our guests have had no
          complaints about the noise and loved staying at Masakali, we still
          want to inform you about the recent construction noise.
        </p>
        <br />
        <p>
          As the owner, Suzanne has put her heart and soul into Masakali and she
          wants everyone to be 100% satisfied with their stay. It truly is a
          “special place”, a “paradise”, “heaven on earth”, “magical” (to use
          some of the words from our prior guests) but Suzanne does not want
          anyone who stays here to be unhappy so she will do anything in her
          power to ensure you are happy at Masakali if you still decide to stay
          here regardless of the construction noise. Please consider this note
          before booking.
        </p>
      </span>
    </span>
  );
};

export default MessageModal;
