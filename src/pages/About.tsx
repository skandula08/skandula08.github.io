import Contact from "../componenets/Contact";
import Resume from "../componenets/Resume";
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
            Hey there, I'm{" "}
            <b className="bg-[var(--highlight)] text-[var(--highlight-text)]">
              Sree!
            </b>{" "}
            (´• ‿ •`)ノ〃
            <br />
            I'm a recent graduate of Northeastern University with a BS in
            Computer Science and Design.
          </p>

          <p className="">
            I'm passionate about software engineering, web dev, art, and
            animation. My field of operation lies within the interaction between
            humans and computers, and I find the most importance in
            human-centered design, with a fun visual flair. 
            <br />
            In terms of personal projects, I'm currently focusing on web dev and
            learning about graphics and game engineering on the side. I'm also
            an avid illustrator, and you better believe you'll see my comics
            around town!
            <br />
            My goals in life are to learn, create, and have fun.
          </p>
          <br />

          <div className="flex gap-2 justify-evenly">
            <img
              className="w-auto h-60 object-contain"
              src="/images/decor/me2.png"
              alt="It's Me!"
            />
            <img
              className="w-auto h-60 object-contain"
              src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/a7847584-aeaf-421b-a99f-5487701ce653.jpg?h=fd008a6542e827b666ccd95f97913dcc"
              alt="It's Me!"
            />
          </div>

          <div className="p-3 gap-3 flex items-center">
            <img
              src="/images/decor/elevator.png"
              alt=""
              width={"15%"}
              className="track-cover"
            />
            <Mp3Player />
          </div>

          <div className="flex justify-center m-auto">
            <Contact />
          </div>
          <div className="my-10" />
          <Resume />

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
