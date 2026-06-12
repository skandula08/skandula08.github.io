import Contact from "../componenets/Contact";
import Interests from "../componenets/Interests";
import LikesDislikes from "../componenets/LikesDislikes";
import Mp3Player from "../componenets/MP3";
import "../stylesheets/about.css";

export default function About() {
  return (
    <div className="bg-[var(--bg)]">
      <div className="about-wrapper text-left w-4/6 m-auto">
        <div className="text-left text-3xl my-10 font-[Silkscreen]">
          A Little About Me!
        </div>
        <div className="content">
          <p>
            Hey there, I'm <b className="bg-[var(--green)]">Sree!</b><br />
            I'm a recent graduate of Northeastern
            University, with a BS Computer Science and Design.
          </p>

          <p className="">
            I'm passionate about software engineering, web dev, art, and
            animation. My field of operation lies within the interaction between
            humans and computers, and I find the most importance in human
            centered design, with a fun visual flair.
            <br />
            In terms of personal projects, I'm currently focusing on web dev,
            and learning about graphics and game engineering on the side. I'm
            also an avid illustrator, an you better believe you'll see my comics
            around town!
            <br />
            My goals in life is learn, create, and have fun.
          </p>

          <div className="p-3 gap-3 flex items-center">
            <img
              src="/assets/decor/elevator.png"
              alt=""
              width={"15%"}
              className="track-cover"
            />
            <Mp3Player />
          </div>

          <div className="flex justify-center m-auto">
           <Contact /> 
          </div>
          

          <h5 className="text-center text-xs my-8">
            <b style={{ fontFamily: "Cousine" }}>
              Not too certain about what I'll face in the future, but I'll
              handle it splendidly ⭐︎{" "}
            </b>
          </h5>

          <LikesDislikes />

          <br />

          <Interests />
          
            </div>
      </div>
    </div>
  );
}
