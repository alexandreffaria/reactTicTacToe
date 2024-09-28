import { Game } from "./components/Game";
export default function App() {
  // make background color black
  document.body.style.backgroundColor = "black";
  // make text color white
  document.body.style.color = "white";
  // make button color dark gray
  document.body.style.buttonColor = "#444";
  return (
    <>
      <Game />
    </>
  );
}
