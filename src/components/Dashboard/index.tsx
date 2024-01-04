import "./styles.css";
import React, { useState, ChangeEvent } from "react";


interface DashboardProps {
  dashboardType: "login" | "signup" | undefined;
}

interface PostedImage {
  url: string;
  caption: string;
}

const Dashboard: React.FC<DashboardProps> = ({ dashboardType }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [postedImages, setPostedImages] = useState<PostedImage[]>([]);
  const [caption, setCaption] = useState<string>("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleCaptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handlePost = () => {
    if (selectedImage) {
      setPostedImages([
        { url: URL.createObjectURL(selectedImage), caption: caption }, 
        ...postedImages, 
      ]);
      setSelectedImage(null);
      setCaption("");
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        {dashboardType === "login" && (
          <button className="create-post-button" onClick={openModal}>
            Criar novo post +
          </button>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p >Novo Post</p>
            <input
              type="text"
              placeholder="Legenda"
              value={caption}
              onChange={handleCaptionChange}
            />
            <label className="upload-image-button">
              Upload image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Imagem Selecionada"
                style={{ maxWidth: "100%", marginTop: "10px" }}
              />
            )}
            <button className="button-post" onClick={handlePost}>Publicar</button>
          </div>
        </div>
      )}

      
        <div className="image-preview">
          {postedImages.map((image, index) => (
            <div className="image-post-container" key={index}>
              <img
                src={image.url}
                alt={`Imagem ${index + 1}`}
                
              />
              <p className="image-caption">{image.caption}</p>
              
            </div>
          ))}
        </div>
    </>
  );
};

export default Dashboard;