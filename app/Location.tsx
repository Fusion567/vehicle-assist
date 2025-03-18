"use client";

import { useState, useEffect } from "react";

export default function Location() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported.");
    }
  }, []);

  return (
    <div>
      {location ? (
        <p>Your location: {location.lat}, {location.lon}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}
