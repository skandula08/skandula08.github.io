type UpdateCategory = {
  title: string;
  updates: string[];
};
export default function Interests() {
  const updates: UpdateCategory[] = [
    {
      title: "Sports",
      updates: ["Formula 1", "NBA", "PWHL", "World Cup(!!!!!)"],
    },
    {
      title: "Music",
      updates: ["Cannons", "The Cure", "Olivia Rodrigo", "Stevie Nicks"],
    },
    {
      title: "Currently Reading",
      updates: ["3 Body Problem", "TMNT IDW"],
    },
    {
      title: "Television & Movies",
      updates: ["Project Hail Mary", "Monk", "House MD"],
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <h2 className="p-3 ">
        (+)Some
        <br />
        Updates
      </h2>

      <div className="w-4/5 my-8">
        {updates.map((update, j) => (
          <div className={`${j < updates.length - 1 ? "border-b" : ""}`}>
            <h3 className="text-lg">
              <b>
                <b>{update.title}</b>
              </b>
            </h3>
            <p className="text-right">
              {update.updates.map((u, i) => (
                <>
                  {u}
                  {i < update.updates.length - 1 ? ", " : ""}
                </>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
