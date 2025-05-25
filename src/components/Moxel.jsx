import React from 'react';
import { Globe, Facebook, Instagram, Linkedin } from 'lucide-react';
import '../styles/moxel.css';
import TiktokIcon from '/tiktok.svg'; // Import the TikTok SVG

const Moxel = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="moxel-container">
      <div className="logo-container">
        <img src="/moxel_logo.svg" alt="Moxel" width="32" height="32" />
      </div>
      <div className="social-container">
        <a
          href="https://www.moxel.co?utm_source=hog&utm_medium=app&utm_campaign=hog_app&utm_id=hog-app"
          target="_blank"
          rel="noopener noreferrer"
          className="powered-by"
        >
          MOXEL
        </a>
        <div className="social-icons">
          <Facebook
            className="social-icon"
            size={12}
            onClick={() => openLink('https://www.facebook.com/moxelco')}
          />
          <Instagram
            className="social-icon"
            size={12}
            onClick={() => openLink('https://instagram.com/moxelco')}
          />
          <div
            className="social-icon tiktok-icon"
            onClick={() => openLink('https://tiktok.com/@moxelco')}
          />
        </div>
      </div>
    </div>
  );
};

export default Moxel;