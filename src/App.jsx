import "./App.scss";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "./Components/MainSection";
import ClarifionCard from "./Components/ClarifionCard";

function App() {
  return (
    <Layout>
      <MainSection />
      <ClarifionCard />
    </Layout>
  );
}

export default App;
