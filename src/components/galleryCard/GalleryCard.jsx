import { BsInstagram } from "react-icons/bs";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function GalleryCard({ image }) {
  return (
    <StyledGalleryCard className="flex-center">
      <img src={image} alt="gallery_image" />
      <BsInstagram className="gallery__image-icon" />
    </StyledGalleryCard>
  );
}

export default GalleryCard;

const StyledGalleryCard = styled.div`
  position: relative;
  min-width: 240px;
  height: 320px;
  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: 0.5s ease;

    &:hover {
      opacity: 0.35;
    }
  }

  .gallery__image-icon {
    position: absolute;
    color: var(--color-white);
    font-size: 2rem;
    opacity: 0;
    transition: 0.5s ease;
    cursor: pointer;
  }

  &:hover .gallery__image-icon {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    min-width: 301px;
    height: 447px;
  }

  @media screen and (min-width: 1200px) {
  }
`;
