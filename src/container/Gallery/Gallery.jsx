import styled from "styled-components";
import { images } from "../../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Subheading from "../../components/subHeading/SubHeading";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import Button from "../../components/button/Button";
import GalleryCard from "../../components/galleryCard/GalleryCard";
import { useRef } from "react";

const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

function Gallery() {
  const scrollRef = useRef();

  function handleClick(direction) {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  }

  return (
    <StyledGallery className="flex-center">
      <div className="gallery-content">
        <div className="gallery-content-title">
          <Subheading title="Instagram" />
          <Heading>Photo Gallery</Heading>
        </div>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </Paragraph>
        <Button>View More</Button>
      </div>
      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {gallery.map((image, index) => (
            <GalleryCard key={index} image={image} />
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleClick("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </StyledGallery>
  );
}

export default Gallery;

const StyledGallery = styled.div`
  background: var(--color-black);
  flex-direction: column;
  padding: 4rem 0 4rem 2rem;
  gap: 3rem;

  .gallery-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    .gallery-content-title {
      h1 {
        margin-top: 1rem;
      }
    }
  }

  .gallery-images {
    min-width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    max-width: 50%;
    position: relative;

    .gallery-images-container {
      display: flex;
      flex-direction: row;
      width: max-content;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .gallery-images-arrows {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;
    position: absolute;
    bottom: 40%;

    .gallery__arrow-icon {
      color: var(--color-golden);
      font-size: 2rem;
      cursor: pointer;
      background: var(--color-black);
      border-radius: 5px;

      &:hover {
        color: var(--color-white);
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 4rem 0 4rem 4rem;

    .gallery-content {
      padding-right: 2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    padding: 4rem 0 4rem 6rem;

    .gallery-content {
    }

    .gallery-images {
      min-width: auto;
    }
  }
`;
