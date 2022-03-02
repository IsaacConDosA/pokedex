import * as React from "react";
import { useEffect, useState } from "react";

const POKEDEX_API_LINK: string = "https://www.pokemon.com/el/api/pokedex/kalos";

const IndexPage = () => {
  const [starsCount, setStarsCount] = useState(0);
  useEffect(async () => {
    const response = await fetch(
      "https://www.pokemon.com/el/api/pokedex/kalos",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language":
            "es-AR,es;q=0.9,en-US;q=0.8,en-GB;q=0.7,en;q=0.6,es-419;q=0.5",
          "if-none-match": '"837677c1782ee061de32853f5723f0c5"',
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-newrelic-id": "VQ4OWFZXGwIAXFZTBgI=",
        },
        // referrer: "https://www.pokemon.com/el/pokedex/",
        // referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    );
    const json = response.json();
    console.log(json);
  }, []);

  console.log(starsCount);
  return <main></main>;
};

export default IndexPage;
