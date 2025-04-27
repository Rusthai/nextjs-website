// components/RustGameTimeDisplay.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * Converts Rust game time (float 0-24) to human-readable HH:MM format.
 * The integer part is the hour, the decimal part is a fraction of an hour.
 *
 * @param {number} rustTime - The game time as a float (e.g., 17.96)
 * @returns {string} The formatted time string (e.g., "17:57")
 */
const formatRustTime = (rustTime: number) => {
  // Ensure time wraps around correctly from 24 to 0,
  // important for the count-up logic that might slightly exceed 24.
  const normalizedTime = rustTime % 24;

  // The integer part of the float is the hour
  const hours = Math.floor(normalizedTime);

  // The decimal part is a fraction of an hour. Multiply by 60 to get minutes.
  const minutes = Math.floor((normalizedTime - hours) * 60);

  // Pad with leading zeros if necessary
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};

/**
 * Next.js component to display and count-up Rust game time.
 * Simulates time passage without frequent API calls.
 *
 * @param {object} props
 * @param {number} props.initialRustTime - The initial game time received from the API (float 0-24).
 */
const RustGameTimeDisplay = ({ initialRustTime, className }: { initialRustTime: number, className?: string }) => {
  // State to hold the currently displayed time value (the floating point number)
  const [displayTime, setDisplayTime] = useState(initialRustTime);

  // Ref to store the interval ID so we can clear it later
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Clear any existing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset the displayed time state to the new initial time
    setDisplayTime(initialRustTime);

    // Start the interval to update the time every second
    // A Rust day (24 game hours) is 60 real minutes (3600 real seconds).
    // So, game time increases by 24 / 3600 = 1/150 game hours per real second.
    const gameHoursPerSecond = 1 / 150;

    intervalRef.current = setInterval(() => {
      // Use the state updater function to get the latest state value (prevTime)
      setDisplayTime(prevTime => {
        const nextTime = prevTime + gameHoursPerSecond;
        // Wrap around if time exceeds 24
        return nextTime % 24;
      });
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup function: clear the interval when the component unmounts
    // or when the initialRustTime prop changes (triggering a re-run of the effect)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

  }, [initialRustTime]); // Re-run effect if the initialRustTime prop changes

  // Format the current displayTime state for rendering
  const formattedTime = formatRustTime(displayTime);

  return (
    <h1 className={className}>{formattedTime}</h1>
  );
};

export default RustGameTimeDisplay;