import React, { useEffect, useState, useRef, MouseEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./chatbox.css";

const App: React.FC = () => {
  const [data, setData] = useState<string | undefined>(undefined);
  const [inputText, setInputText] = useState<string>("");
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [sliderVisible, setSliderVisible] = useState<boolean>(false);
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number }>({
    x: window.innerWidth - 80,
    y: window.innerHeight - 80,
  });
  const [sliderPosition, setSliderPosition] = useState<{ x: number; y: number }>({
    x: window.innerWidth - 300,
    y: window.innerHeight - 400,
  });
  const sliderRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonSize = 50;

  const handleButtonClick = (event: MouseEvent<HTMLDivElement>) => {
    setSliderVisible(!sliderVisible);
    if (!sliderVisible) {
      document.addEventListener("click", handleOutsideClick, true);
      const buttonRect = (event.target as HTMLDivElement).getBoundingClientRect();
      setSliderPosition({
        x: buttonRect.left,
        y: buttonRect.top,
      });
    } else {
      document.removeEventListener("click", handleOutsideClick, true);
    }
  };

  const handleOutsideClick = (event: MouseEvent<Document>) => {
    if (
      sliderRef.current &&
      !sliderRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setSliderVisible(false);
      document.removeEventListener("click", handleOutsideClick, true);
    }
  };

  const handleDoubleClick = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent<Document>) => {
    const newX = event.clientX;
    const newY = event.clientY;
    const maxX = window.innerWidth - buttonSize;
    const maxY = window.innerHeight - buttonSize;
    const minX = 0;
    const minY = 0;
    const adjustedX = Math.max(minX, Math.min(newX, maxX));
    const adjustedY = Math.max(minY, Math.min(newY, maxY));

    setButtonPosition({
      x: adjustedX,
      y: adjustedY,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  async function fetchDataFromGeminiProAPI() {
    try {
      if (!inputText) {
        alert("Hi! What can I help you with today?");
        return;
      }
      setLoading1(true);
      const genAI = new GoogleGenerativeAI("");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(inputText);
      const text = await result.response.text();
      setLoading1(false);
      setData(text);
    } catch (error) {
      setLoading1(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  return (
    <>
      <div
        className="slider-open"
        ref={buttonRef}
        style={{
          position: "fixed",
          left: buttonPosition.x + "px",
          top: buttonPosition.y + "px",
          width: buttonSize + "px",
          height: buttonSize + "px",
          cursor: "pointer",
          textAlign: "center",
          lineHeight: buttonSize / 1.6 + "px",
        }}
        onMouseDown={handleDoubleClick}
        onClick={handleButtonClick}
      >
        C
      </div>
      {sliderVisible && (
        <div
          className="slider-visible"
          ref={sliderRef}
          style={{
            position: "fixed",
            left: sliderPosition.x + "px",
            top: sliderPosition.y + "px",
          }}
        >
          <SliderContent
            inputText={inputText}
            setInputText={setInputText}
            loading1={loading1}
            loading2={loading2}
            fetchDataFromGeminiProAPI={fetchDataFromGeminiProAPI}
            data={data}
          />
        </div>
      )}
    </>
  );
};

interface SliderContentProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  loading1: boolean;
  loading2: boolean;
  fetchDataFromGeminiProAPI: () => Promise<void>;
  data: string | undefined;
}

const SliderContent: React.FC<SliderContentProps> = ({
  inputText,
  setInputText,
  loading1,
  loading2,
  fetchDataFromGeminiProAPI,
  data,
}) => {
  return (
    <div className="container-Slider">
      <input
        type="text"
        style={{ width: "90%", marginBottom: "10px" }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        disabled={loading1}
        onClick={fetchDataFromGeminiProAPI}
        style={{
          marginRight: "10px",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        {loading1 ? "Loading..." : "Text"}
      </button>
      <hr />
      <div className="container">
        <p>Response:</p>
        <div className="container-text">{data}</div>
      </div>
    </div>
  );
};

export default App;
