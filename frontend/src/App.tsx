import viteLogo from "/vite.svg";
import { useTheme } from "./context/useTheme";
function App() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] font-sans text-2xl">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo w-28 m-5" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card text-center">
        <button
          className="text-primary-foreground bg-primary rounded-xl py-2 px-10 m-5 bg-orange-400"
          onClick={() => setTheme(theme !== "dark" ? "dark" : "light")}>
          {theme !== "dark" ? "dark" : "light"}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
