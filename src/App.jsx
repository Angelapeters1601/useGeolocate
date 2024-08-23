import "./App.css";
import { useState } from "react";
import { useGeolocate } from "./useGeolocate";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocate();

  //   const { lat, lng } = position;

  const handleGetPosition = () => {
    getPosition();
    setCountClicks((count) => count + 1);
  };

  return (
    <div className="geolocate">
      <button onClick={handleGetPosition} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
