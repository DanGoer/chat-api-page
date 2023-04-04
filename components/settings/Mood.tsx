import { useSettingsContext } from "@/context/settings-context";
import { moodsFE } from "@/data/moodsFE";
import { useState } from "react";

function Mood() {
  const [open, setOpen] = useState<boolean>(false);

  const { setMood } = useSettingsContext();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMood = (mood: string) => {
    setMood(mood);
    setOpen(!open);
  };

  return (
    <div>
      <h2>Wähle einen Stimmung</h2>
      <p>Die Auswahl der Stimmung wird die Art der antworten beeinflussen.</p>
      <div>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
          <ul className="menu">
            {moodsFE.map((mood: string) => (
              <li key={mood}>
                <button onClick={() => handleMood(mood)}>{mood}</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default Mood;
