import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function IntroAnimation({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="intro-animation d-flex align-items-center justify-content-center flex-column mt-custom">
      <img
        className="popup-animation w-custom"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
        alt="logo"
      />
      <ProgressBar
        className="mt-4 popup-animation"
        animated
        now={progress}
        variant="primary"
        style={{ width: "200px", height: "6px" }}
      />
    </div>
  );
}

export default IntroAnimation;
