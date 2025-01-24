import React, { useEffect, useState } from "react";
import Chats from "./Chats";
import UserChat from "./UserChat";
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const CHAT_WINDOW_LIMIT = 100;

const ChatWindow = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    // api call here...
    const data = [
      {
        name: generateNames(),
        msg: "Lorem ipsum dolor sit amet, consectetur",
        imgUrl:
          "https://yt4.ggpht.com/OVK7kAgPNWfaiYapQvWzq6Zj7l-eKpSILVTBzhmqm59FNQhZMRdYae-iMW-L5hGeP9duu-oPTmo=s32-c-k-c0x00ffffff-no-rj",
      },
    ];

    setComments((prev) => {
      let newData = [...data, ...prev];
      newData = newData.splice(0, CHAT_WINDOW_LIMIT);
      return newData;
    });
  };

  const onEnterKeyPressed = (val) => {
    setComments((prev) => {
      return [
        {
          name: "User",
          msg: val,
          imgUrl:
            "https://yt4.ggpht.com/OVK7kAgPNWfaiYapQvWzq6Zj7l-eKpSILVTBzhmqm59FNQhZMRdYae-iMW-L5hGeP9duu-oPTmo=s32-c-k-c0x00ffffff-no-rj",
        },
        ...prev,
      ];
    });
  };

  useEffect(() => {
    const s = setInterval(fetchComments, 1000);
    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse  border border-black mt-2 w-[450px] h-[500px] overflow-y-scroll">
        {comments.map((msg, i) => {
          return <Chats {...msg} key={i} />;
        })}
      </div>
      <UserChat onEnterKeyPress={onEnterKeyPressed} />
    </div>
  );
};

export default ChatWindow;
