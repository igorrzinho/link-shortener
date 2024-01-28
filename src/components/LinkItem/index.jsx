import "./linkItem.css";
import { FiX, FiClipboard } from "react-icons/fi";

const LinkItem = ({ closeModal, content }) => {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link);
  }

  return (
    <div className="container-modal">
      <div className="modal-header">
        <h2>link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>
      <span>{content.long_url}</span>
      <button onClick={copyLink} className="modal-link">
        {content.link}
        <FiClipboard size={28} color="#fff" />
      </button>
    </div>
  );
};

export default LinkItem;
