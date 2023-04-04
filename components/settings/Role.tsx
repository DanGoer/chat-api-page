import { useState } from "react";
import { useSettingsContext } from "@/context/SettingsContext";
import { rolesFE } from "@/data/RolesFE";

function Role() {
  const [open, setOpen] = useState(false);

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
      <p>
        Die Auswahl dews Charakters wird die Art der antworten beeinflussen.
      </p>
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
