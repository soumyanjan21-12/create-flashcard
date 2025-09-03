import { Outlet } from "react-router";
import Navbar from "./components/navbar/navbar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="mt-20 mx-20 p-4">
        <h2 className="text-2xl">Create Flashcard</h2>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
