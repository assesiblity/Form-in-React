import { useEffect, useState } from "react";

export default function joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let respose = await fetch(URL);
    let jsonResponse = await respose.json();

    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };
  useEffect(() => {
    async function getFirstJoke() {
      let respose = await fetch(URL);
      let jsonResponse = await respose.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);
  return (
    <div>
      <h3>joker!</h3>
      <h2>{joker.setup}</h2>
      <h2>{joker.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
