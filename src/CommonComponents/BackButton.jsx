import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // -1 goes back one entry in the history stack
  };

  return (
    <button onClick={handleBack} className="absolute left-7 top-18 px-4 py-2 text-white bg-[#43c4a6] hover:bg-[#3aad92] rounded-full ">
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}
export default BackButton;