import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { title } from "process";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon ,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon ,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon ,
  },
  {
    title: "GitHub",
    iconType: GithubIcon ,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon ,
  },
  {
    title: "CSS3",
    iconType: CssIcon ,
  },
];

const hobbies = [
  {
    title: "Travel",
    emoji: "🧳",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Cycling",
    emoji: "🚴",
  },
 
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Basketball",
    emoji: "🏀",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  }
]

export const AboutSection = () => {
  return (
    <div className="py-16">
      <SectionHeader
        eyebrow="About Me"
        title="Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
            <Image src={bookImage} alt="Book Cover" />
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools used to craft exceptional
              digital experiences .
            </p>
          </div>
          <div>
            {toolboxItems.map(item=>(
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
        <div>
            <StarIcon />
            <h3>Beyond The Code</h3>
            <p>
             Explore my interest and hobbies beyond the digital realm.
            </p>
          </div>
          <div>
            {hobbies.map(hobby=>(
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
           <Image src={mapImage} alt="Map" />
           <Image src={smileMemoji} alt="Smiling Memoji" />
        </Card>
      </div>
    </div>
  );
};
