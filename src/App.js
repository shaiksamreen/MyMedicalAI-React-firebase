import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import ErrorBoundary from "./ErroBoundary";
// import UploadPrescription from "./components/home/UploadPrescription";
// import PrescriptionAnalysis from "./components/home/PrescriptionAnalysis";
import MedicalHistory from "./components/home/MedicalHistory";
import ImageUpload from "./components/home/ImageUpload";
import ImageRecognition from "./components/home/ImageRecognition";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path:"/upload" ,
    element:<ImageUpload/>
  }
    ,
    {path:"/analyze" ,
      element:<ImageRecognition/>
    },
      {path:"/history" ,
        element:<MedicalHistory/>,
  }
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <ErrorBoundary>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;
