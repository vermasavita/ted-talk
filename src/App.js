import React from "react";
import { useState } from "react";
import "./styles.css";
const tedTalk = {
  Activism: [
    {
      name: "How to be a professional troublemaker",
      creator: "Speaker: Luvvie Ajayi Jones",
      rating: "4/5"
    },
    {
      name: "Love, sorrow and the emotions that power climate action",
      creator: "Speaker: Knut Ivar Bjørlykhaug",
      rating: "4/5"
    },
    {
      name: "When the world is burning, is art a waste of time?",
      creator: "Speaker: R. Alan Brooks",
      rating: "5/5"
    }
  ],

  Addiction: [
    {
      name: "The past, present and future of nicotine addiction",
      creator: " Speaker: Mitch Zeller",
      rating: "4/5"
    },
    {
      name: "How to fix a broken heart",
      creator: "Speaker: Guy Winch",
      rating: "4.5/5"
    },
    {
      name: "Addiction is a disease. We should treat it like one",
      creator: "Speaker: Michael Botticelli ",
      rating: "3/5"
    }
  ],
  Books: [
    {
      name: "The habits of happiness",
      creator: "Speaker: Matthieu Ricard",
      rating: "5/5"
    },
    {
      name: "We can be Buddhas",
      creator: "Speaker: Robert Thurman",
      rating: "3/5"
    },
    {
      name: "How books can open your mind",
      creator: "Speaker: Robert Thurman",
      rating: "3/5"
    }
  ],

  Curiosity: [
    {
      name: "Stumbling towards intimacy: An improvised TED Talk",
      creator: "Speaker: Anthony Veneziale",
      rating: "5/5"
    },
    {
      name: "Need a new idea? Start at the edge of what is known",
      creator: "Speaker: Vittorio Loreto",
      rating: "4/5"
    },
    {
      name: "How to separate fact and fiction online",
      creator: "Speaker: Markham Nolan",
      rating: "4/5"
    }
  ]
};

export default function App() {
  var [selectedCategory, setSelectedCategory] = useState("Activism");

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
      <div style={{
          textAlign: "left"
        }}
      >
        <ul
          style={{
            listStyle: "none",
            paddingInlineStart: ""
          }}
        >
          {tedTalk[selectedCategory].map((ted) => (
            <li
              key={ted.name}
              style={{
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "30rem",
                margin: "1rem 3rem"
              }}
            >
              <strong> {ted.name}</strong> <br></br>
              <small>
                {" "}
                <em> {ted.creator} </em>
              </small>
              <br></br>
              <small>
                Rating: <em> {ted.rating} </em>
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
