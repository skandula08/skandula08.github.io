export default function LikesDislikes() {
    const likes : string[] = ["comics/manga", "astronomy", "scary stories"];
    const dislikes : string[] = ["delayed trains", "bugs", "hot and humid weather", "unintuitive design"];
    return(  <div className="flex justify-evenly">
            <div className="text-left">
              <h2>
                Likes (≧◡≦)
                <b>
                  <b>♡</b>
                </b>
              </h2>
              <ul className="likes">
                {likes.map((item) => (
                    <li>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Dislikes (￢_￢;)</h2>

              <ul className="dislikes">
                {dislikes.map((item) => (
                    <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>

    );
}