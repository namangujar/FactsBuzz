import { useEffect } from "react";
import supabase from "../supabase";

function SupabaseFacts({currentCategory,setIsLoading,setFacts}) {
    useEffect(function () {
        async function getFacts() {
          setIsLoading(true)
          const query = supabase.from("facts1").select("*");
          if (currentCategory !== "All") { query.eq("category", currentCategory) }
    
          let { data: facts1, error } = await query
            .order("votesInteresting", { ascending: false })
            .limit(1000);
    
          if (!error) {
            setFacts(facts1);
          } else {
            alert("there was error getting data");
          }
          setIsLoading(false);
    
        }
        getFacts()
      }, [currentCategory]);

}

export default SupabaseFacts