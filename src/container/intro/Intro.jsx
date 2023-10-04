import styled from "styled-components";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import { useRef, useState } from "react";

function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <StyledIntro>
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="video-overlay flex-center">
        <div
          className="video-overlay-circle flex-center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </StyledIntro>
  );
}

export default Intro;

const StyledIntro = styled.div`
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
  }

  .video-overlay-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--color-golden);
    cursor: pointer;
  }
`;
