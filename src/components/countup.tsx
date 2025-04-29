import React, { useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce'; // Install lodash.debounce if not already installed

const formatRustTime = (rustTime: number) => {
  const normalizedTime = rustTime % 24;
  const hours = Math.floor(normalizedTime);
  const minutes = Math.floor((normalizedTime - hours) * 60);
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
};

const RustGameTimeDisplay = ({ initialRustTime, className, fallback }: { initialRustTime: number, className?: string, fallback?: (value: number) => void }) => {
  const [displayTime, setDisplayTime] = useState(initialRustTime);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Debounced fallback to prevent frequent state updates
  const debouncedFallback = useRef(
    debounce((time: number) => {
      fallback && fallback(time);
    }, 500)
  ).current;

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setDisplayTime(initialRustTime);
    debouncedFallback(initialRustTime);

    const gameHoursPerSecond = 1 / 150;

    intervalRef.current = setInterval(() => {
      setDisplayTime(prevTime => {
        const nextTime = prevTime + gameHoursPerSecond;
        debouncedFallback(nextTime % 24);
        return nextTime % 24;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      debouncedFallback.cancel(); // Cancel any pending debounced calls
    };
  }, [initialRustTime, debouncedFallback]);

  const formattedTime = formatRustTime(displayTime);

  return <h1 className={className}>{formattedTime}</h1>;
};

export default RustGameTimeDisplay;