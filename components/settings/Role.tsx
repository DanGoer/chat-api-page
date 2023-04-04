import { useState } from "react";
import { useSettingsContext } from "@/context/settings-context";
import { rolesFE } from "@/data/rolesFE";

function Role() {
  const [open, setOpen] = useState<boolean>(false);

  const { setRole } = useSettingsContext();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleRole = (role: string) => {
    setRole(role);
    setOpen(!open);
  };

  return (
    <div>
      <h2>Wähle einen Charakter</h2>
      <p>Die Auswahl des Charakters wird die Art der antworten beeinflussen.</p>
      <div>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
          <ul className="menu">
            {rolesFE.map((role: string) => (
              <li key={role}>
                <button onClick={() => handleRole(role)}>{role}</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default Role;
