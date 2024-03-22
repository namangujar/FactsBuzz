import "./style.css"
import { useState } from 'react';
import Loader from "./components/Loader";
import Header from "./components/Header";
import FactForm from "./components/FactForm";
import CategoryFilter from "./components/CategoryFilter";
import Factslist from "./components/Factslist";
import SupabaseFacts from "./components/SupabaseFacts";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All")

  return (
    <>
      <SupabaseFacts currentCategory={currentCategory} setIsLoading={setIsLoading} setFacts={setFacts} />
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <FactForm setFacts={setFacts} setShowForm={setShowForm} CATEGORIES={CATEGORIES}/> : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} CATEGORIES={CATEGORIES}/>
        {isLoading ? <Loader /> : <Factslist facts={facts} setFacts={setFacts} CATEGORIES={CATEGORIES}/>}
      </main>
    </>
  );
}

export default App;