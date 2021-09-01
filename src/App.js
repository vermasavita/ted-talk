import React from "react";
import { useState } from "react";
import "./styles.css";
const tedTalk = {
  Activism: [
    {
      name: "How to be a professional troublemaker",
      creator: "Speaker: Luvvie Ajayi Jones"
    },
    {
      name: "Love, sorrow and the emotions that power climate action",
      creator: "Speaker: Knut Ivar Bjørlykhaug"
    },
    {
      name: "When the world is burning, is art a waste of time?",
      creator: "Speaker: R. Alan Brooks"
    }
  ],

  Addiction: [
    {
      name: "The past, present and future of nicotine addiction",
      creator: " Speaker: Mitch Zeller"
    },
    {
      name: "How to fix a broken heart",
      creator: "Speaker: Guy Winch"
    },
    {
      name: "Addiction is a disease. We should treat it like one",
      creator: "Speaker: Michael Botticelli "
    }
  ],
  Books: [
    {
      name: "The habits of happiness",
      creator: "Speaker: Matthieu Ricard"
    },
    {
      name: "We can be Buddhas",
      creator: "Speaker: Robert Thurman"
    }
  ],

  Curiosity: [
    {
      name: "Stumbling towards intimacy: An improvised TED Talk",
      creator: "Speaker: Anthony Veneziale"
    },
    {
      name: "Need a new idea? Start at the edge of what is known",
      creator: "Speaker: Vittorio Loreto"
    }
  ]
};

export default function App() {
  var [selectedCategory, setSelectedCategory] = useState("Addiction");

  function categoryClickHandler(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Ted Talk</h1>
      <small style={{ paddingBottom: "10%" }}>
        Checkout my favorite ted talks. Select a category to get started
      </small>
      <hr></hr>

      <div style={{ backgroundColor: "red" }}>
        {Object.keys(tedTalk).map((category) => (
          <button
            style={{
              width: "10%",
              cursor: "pointer",
              margin: "0.5rem 1rem",
              backgroundColor: "red",
              border: "none",
              color: "white",
              fontWeight: "bolder"
            }}
            onClick={() => categoryClickHandler(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul
          style={{
            listStyle: "none",
            paddingInlineStart: "none"
          }}
        >
          {tedTalk[selectedCategory].map((ted) => (
            <li key={ted.name}>
              <div
                style={{
                  padding: "1rem"
                }}
              >
                <strong> {ted.name}</strong>{" "}
              </div>

              <small>
                {" "}
                <em> {ted.creator} </em>
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
