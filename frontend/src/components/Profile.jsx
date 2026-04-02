import React from "react";
import styled from "styled-components";
import profileImg from "../assets/Profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const socials = [
  {
    icon: faInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/abdelghafour_dev?igsh=YTJyYmlweDN0Z21q",
  },
  {
    icon: faFacebook,
    label: "Facebook",
    link: "https://www.facebook.com/share/1DXjzGQraB/",
  },
  {
    icon: faTiktok,
    label: "TikTok",
    link: "https://www.tiktok.com/@abdelghafourdev?_r=1&_t=ZS-95DJdKxdySH",
  },
  { icon: faWhatsapp, label: "WhatsApp", link: "https://wa.me/213698055344" },
  {
    icon: faGithub,
    label: "GitHub",
    link: "https://github.com/AbdelghafourHA",
  },
];

const Profile = () => {
  return (
    <StyledWrapper>
      <motion.div
        className="card z-50"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {/* Image */}
        <div className="card_load">
          <img src={profileImg} alt="profile" />
        </div>

        {/* Right content */}
        <div className="content">
          <h4 className="name">Abdelghafour Hadjoudj</h4>

          <div className="socials">
            {socials.map((item, i) => (
              <a key={i} href={item.link} target="_blank" className="icon">
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    max-width: 95%;
    background: #ffff;
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 50px;
    left: 100px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 14px;
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  }

  /* Desktop bigger */
  @media (min-width: 768px) {
    .card {
      padding: 16px 18px;
    }
  }

  .card_load {
    width: 60px;
    height: 60px;
    min-width: 60px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      #f0f0f0 38%,
      #f0f0f0 40%,
      #e5e5e5 48%
    );
    background-size: 200% 100%;
    animation: load89234 2s infinite;
  }

  .card_load::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 2px solid var(--color-violet);
    opacity: 0.6;
  }

  .card_load img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .name {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .socials {
    display: flex;
    gap: 10px;
    margin-top: 6px;
  }

  .icon {
    position: relative;
    color: var(--color-text);
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
  }

  .icon:hover {
    transform: scale(1.15);
    color: var(--color-violet);
  }

  .icon:active {
    transform: scale(0.95);
  }

  .icon:hover .tooltip {
    opacity: 1;
  }

  @keyframes load89234 {
    100% {
      background-position: -100% 0;
    }
  }

  @media (max-width: 640px) {
    .card {
      padding: 8px 10px;
      gap: 8px;
      bottom: 20px;
      left: 20px;
    }

    .card_load {
      width: 45px;
      height: 45px;
      min-width: 45px;
    }

    .name {
      font-size: 12px;
    }

    .socials {
      gap: 6px;
    }

    .icon svg {
      font-size: 14px;
    }
  }
`;

export default Profile;
