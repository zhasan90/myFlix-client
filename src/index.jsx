import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

//Import statement to indicate that you need to bundle ./index.scss
import "./index.scss";
import { MainView } from "./components/main-view/main-view";
import { LoginView } from "./components/login-view/login-view";

//Main component (will eventually use all the others)
const MyFlixApplication = () => {
    return (
        <div className="my-Flix">
            <MainView />
        </div>
    );
};

//Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

//Tells react to render your app in the root DOM element
root.render(<MyFlixApplication />);