import { useSettingsContext } from "@/context/settings-context";
import { useState } from "react";

interface customPromptsI {
  title: string;
  behaviour: string;
}

function Custom() {
  const [openCreative, setOpenCreative] = useState<boolean>(false);
  const [openCustomList, setOpenCustomList] = useState(false);
  const [customTitle, setCustomTitle] = useState<string>("");
  const [customBehaviour, setCustomBehaviour] = useState<string>("");

  const { customPrompts, setCustomPrompts } = useSettingsContext();

  function handleOpenCreative() {
    setOpenCreative(!openCreative);
  }

  function handleOpenCustomList() {
    setOpenCustomList(!openCustomList);
  }

  function handleCustom(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const array = [
      ...customPrompts,
      { title: customTitle, behaviour: customBehaviour },
    ];
    localStorage.setItem("customPrompts", JSON.stringify(array));
    setCustomPrompts(array);
  }

  function handleDelete(index: number) {
    const changeArray = [...customPrompts];
    changeArray.splice(index, 1);
    localStorage.setItem("customPrompts", JSON.stringify(changeArray));
    setCustomPrompts(changeArray);
  }

  return (
    <div>
      <h2>Individuell angepasste Prompts</h2>
      <p>Hier kannst du eine eigene Persöhnlichkeit erstellen</p>
      <button onClick={() => handleOpenCreative()}>Kreativ</button>
      <button onClick={handleOpenCustomList}>Dropdown</button>
      {openCustomList ? (
        <ul className="menu">
          {customPrompts.map((prompt: customPromptsI, index: number) => (
            <li key={prompt.title + index}>
              {prompt.title}
              <button onClick={() => handleDelete(index)}>löschen</button>
            </li>
          ))}
        </ul>
      ) : null}
      <div>
        {openCreative && (
          <form onSubmit={(e) => handleCustom(e)}>
            <input
              onChange={(e) => {
                setCustomTitle(e.target.value);
              }}
              type="text"
              value={customTitle}
              placeholder={"Bitte gebe eine Rolle ein"}
            />
            <input
              onChange={(e) => {
                setCustomBehaviour(e.target.value);
              }}
              type="text"
              value={customBehaviour}
              placeholder={"Bitte gebe eine Verhaltensweise ein"}
            />
            <button>Erschaffe!</button>
          </form>
        )}
      </div>
    </div>
  );
}
export default Custom;
