import React, { useState } from "react";
import LinkItem from "../../components/LinkItem";
import { FiLink } from "react-icons/fi";
import "./home.css";
import Menu from "../../components/menu";
import api from "../../services/api"; //importa a api
import { saveLink } from "../../services/storeLinks";
const Home = () => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      setLink("");
      saveLink("encurtar link", response.data);
    } catch {}
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="./link.png" alt="" />
        <h1>sigor link</h1>
        <span>cole seu link aqui</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="cole aqui seu link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}> encurtar link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem content={data} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Home;
