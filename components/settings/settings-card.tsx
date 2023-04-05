import Custom from "./custom";
import Mood from "./mood";
import Role from "./role";

function SettingsCard() {
  return (
    <div>
      <h2>Hier kannst du alles Einstellen</h2>
      <Role />
      <Mood />
      <Custom />
    </div>
  );
}
export default SettingsCard;
