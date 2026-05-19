import { useState } from "react";

import "./Chatbot.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  FaMicrophone,
  FaImage,
  FaVolumeUp,
  FaPause,
  FaPlay,
  FaStop,
} from "react-icons/fa";

function Chatbot() {

  const [message, setMessage] =
    useState("");

  const [chat, setChat] =
    useState([]);

  const [image, setImage] =
    useState(null);

  const [language, setLanguage] =
    useState("en-US");

  const [speaking, setSpeaking] =
    useState(false);

  const [isPaused, setIsPaused] =
    useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  /* START MIC */

  const startListening = () => {

    SpeechRecognition.startListening({
      continuous: false,
      language,
    });

  };

  /* STOP MIC */

  const stopListening = () => {

    SpeechRecognition.stopListening();

    setMessage(transcript);

  };

  /* IMAGE PICK */

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader =
        new FileReader();

      reader.onloadend = () => {

        setImage(reader.result);

      };

      reader.readAsDataURL(file);

    }

  };

  /* SPEAK TEXT */

  const speakText = (text) => {

    if (
      !("speechSynthesis" in window)
    ) return;

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(
        text
      );

    speech.lang = language;

    speech.rate = 1;

    speech.pitch = 1;

    speech.onstart = () => {

      setSpeaking(true);

      setIsPaused(false);

    };

    speech.onend = () => {

      setSpeaking(false);

      setIsPaused(false);

    };

    window.speechSynthesis.speak(
      speech
    );

  };

  /* PAUSE */

  const pauseSpeech = () => {

    window.speechSynthesis.pause();

    setIsPaused(true);

  };

  /* RESUME */

  const resumeSpeech = () => {

    window.speechSynthesis.resume();

    setIsPaused(false);

  };

  /* STOP */

  const stopSpeech = () => {

    window.speechSynthesis.cancel();

    setSpeaking(false);

    setIsPaused(false);

  };

  /* SEND MESSAGE */

  const sendMessage = async () => {

    if (
      message.trim() === "" &&
      !image
    ) return;

    const userMessage = {
      sender: "user",
      text: message,
      image,
    };

    setChat((prev) => [
      ...prev,
      userMessage,
    ]);

    try {

      const response =
        await fetch(
          "http://localhost:8000/chat",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message,
              image,
              language,
            }),
          }
        );

      const data =
        await response.json();

      const botMessage = {
        sender: "bot",
        text: data.reply,
      };

      setChat((prev) => [
        ...prev,
        botMessage,
      ]);

      /* AUTO SPEAK */

      if (
        transcript ||
        language !== "en-US"
      ) {

        speakText(data.reply);

      }

    } catch (error) {

      console.log(
        "FETCH ERROR:",
        error
      );

    }

    setMessage("");

    setImage(null);

    resetTranscript();

  };

  return (

    <div className="chatbot-container">

      {/* HEADER */}

      <div className="chatbot-header">

        <div className="chatbot-logo">
          🌾
        </div>

        <h1 className="chatbot-title">
          Smart Agriculture AI Chatbot
        </h1>

      </div>

      {/* LANGUAGE */}

      <div className="language-bar">

        <select
          value={language}
          onChange={(e) =>
            setLanguage(
              e.target.value
            )
          }
          className="language-select"
        >

          <option value="en-US">
            English
          </option>

          <option value="kn-IN">
            Kannada
          </option>

          <option value="ta-IN">
            Tamil
          </option>

          <option value="te-IN">
            Telugu
          </option>

          <option value="hi-IN">
            Hindi
          </option>

          <option value="ml-IN">
            Malayalam
          </option>

        </select>

      </div>

      {/* BODY */}

      <div className="chatbot-body">

        {/* CHAT */}

        <div className="chatbot-messages">

          {chat.map((msg, index) => (

            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "chatbot-user"
                  : "chatbot-bot"
              }
            >

              {msg.text}

              {/* IMAGE */}

              {msg.image && (

                <img
                  src={msg.image}
                  alt="uploaded"
                  className="chat-image"
                />

              )}

              {/* VOICE CONTROLS */}

              {msg.sender === "bot" && (

                <div className="voice-controls">

                  {/* PLAY */}

                  <button
                    className="speak-btn"
                    onClick={() =>
                      speakText(
                        msg.text
                      )
                    }
                  >

                    <FaVolumeUp />

                  </button>

                  {/* PAUSE */}

                  {speaking &&
                    !isPaused && (

                      <button
                        className="pause-btn"
                        onClick={
                          pauseSpeech
                        }
                      >

                        <FaPause />

                      </button>

                    )}

                  {/* RESUME */}

                  {isPaused && (

                    <button
                      className="resume-btn"
                      onClick={
                        resumeSpeech
                      }
                    >

                      <FaPlay />

                    </button>

                  )}

                  {/* STOP */}

                  {speaking && (

                    <button
                      className="stop-btn"
                      onClick={
                        stopSpeech
                      }
                    >

                      <FaStop />

                    </button>

                  )}

                </div>

              )}

            </div>

          ))}

        </div>

        {/* IMAGE PREVIEW */}

        {image && (

          <div className="preview-box">

            <img
              src={image}
              alt="preview"
              className="preview-image"
            />

          </div>

        )}

        {/* INPUT AREA */}

        <div className="chatbot-input-area">

          {/* IMAGE */}

          <label className="icon-btn">

            <FaImage />

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />

          </label>

          {/* TEXT */}

          <input
            className="chatbot-input"
            type="text"
            placeholder="Ask farming questions..."
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
          />

          {/* MIC */}

          <button
            className={
              listening
                ? "mic-btn active"
                : "mic-btn"
            }
            onMouseDown={
              startListening
            }
            onMouseUp={
              stopListening
            }
          >

            <FaMicrophone />

          </button>

          {/* SEND */}

          <button
            className="chatbot-button"
            onClick={sendMessage}
          >
            Send
          </button>

        </div>

      </div>

    </div>

  );

}

export default Chatbot;