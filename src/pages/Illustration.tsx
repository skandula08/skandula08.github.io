// import ImageGrid from "../componenets/ImageGrid";

import { useEffect, useState } from "react";

export default function Illustration() {
  const [selectedImage, setSelectedImage] = useState("");

  const imagelist = [
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/9013e891-76cf-4ae9-beaa-00935595fd5c_rw_1920.png?h=2fb62e31a3fbfec757cce1620bcafb62",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/752baa0f-3858-4f4c-a730-f29461afc592_rw_1200.jpg?h=c7f54022bca85bdad42ba4079aec4367",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/f7008347-70b2-40c8-9b6a-e99cc7823031_rw_1920.jpg?h=21d84e86ef8189a910072eeeb4ceec69",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/3e918f88-7b5a-4d78-9fc9-24631742ae57_rw_1920.jpg?h=ad4763337a45a1037db98c7e05aee3b2",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/d5cf1267-ae3b-4c1d-b3ba-dd70af499b6e_rw_1920.jpg?h=23cb0a6a2a2dc54c69c9ca93b2fccdd0",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/e93ca71d-4ed7-4f90-ba5e-3d391fcdb255_rw_1200.png?h=07efb044701fa26fea407322e01fad55",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/bb788441-4d9a-4ecb-a793-5dc25b57ca96_rw_1200.jpg?h=10355a352058283281d3003d83d2a4b1",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/78684f1b-6ce5-48f1-b26a-f42cb97146bc_rw_1920.jpg?h=7bda8a0aec3da150cf02d4328a99fb40",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/23c2cff8-2a17-425e-8a45-e8ea93922763_rw_1200.png?h=bea4b5cc782337f4cbbe7030e7cc45d3",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/3cf630aa-3b80-4656-90a5-3cea6d566f7a_rw_1920.jpg?h=894af6e2759970e46952de482e08eb57",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/bf0fd142-f059-4f5d-bc40-60cd0c69411d.png?h=717071b91ac2b431e5d4255026ddbbf6",
    "https://64.media.tumblr.com/68da591d771d45424a694eb553353759/9b6aba4b572ab9d0-ad/s2048x3072/3c556da059a46980a7e700e0d3ce09f7a6633ff4.pnj",
    "https://64.media.tumblr.com/a4901877512ff3ca23fcc515bdef59fc/c73ce02b91e811d1-dc/s2048x3072/fed875a0a0d27134746d4d0fd276cd7fd7f4399e.pnj",
    "https://64.media.tumblr.com/e2bfcae6e78bffec668fee3783d9d085/88ad652d1c72f47c-d3/s2048x3072/19947f7570e2e8ee5e1773a3ba53348f29faed26.pnj",
    "https://64.media.tumblr.com/27c63a669be70d618e2d264cf8dd6f66/c80d8b4c1c8c608e-ea/s2048x3072/3da217bd4e2530ad493cb8a4ceae48ed717f3a8c.pnj",
    "https://64.media.tumblr.com/3aec237026ebf0d79a506dd447874991/5f6e17596a172421-ec/s2048x3072/7e3c6e323b354d1871d2ef46e517ddd574af2f3c.pnj",
    // "",
  ];

  const comics = [
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/634ade8f-e83d-4bf7-9d49-4bde36d7bef4_rw_1920.jpg?h=11037bf78d5904acbd0ab6e84da9afc8",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/22a96d92-12b2-4009-ab39-d14cd52c50df_rw_1920.jpg?h=9b0c36495b25155d2506c84f93da879d",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/ea7db16a-8377-4bc3-964d-a0df06d89170_rw_1920.jpg?h=efa3d0eec6c454907c07e4bba7b92174",
    "https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/685f1ffb-0bfb-40b5-8360-b301a199314d_rw_1200.jpg?h=54c43206c6f5807f6b401f8f0cc776b1",
    // "",
    // "",
    // "",
  ];

  function lightbox(selected: string) {
    return (
      <div>
        {selected !== "" && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage("")}
          >
            <img
              src={selected}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === "Escape") {
        setSelectedImage("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mt-20">
      <h1>Illustration</h1>

      <p>
        Here's a collection of recent artwork I've created. I enjoy digital art,
        and my go to software are Photoshop, Illustrator and After Effects
      </p>
      <p>
        I've been experimenting with a few open source animation and art
        software as well, such as GIMP, Tahoma2D and Blender
      </p>
      <p>I especially enjoy character art, drawing expressions is wildly fun</p>
      <div className="my-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {imagelist.map((img) => (
          <>
            <img
              key={`${img}`}
              src={`${img}`}
              onClick={() => setSelectedImage(img)}
              className="aspect-square w-full object-cover cursor-pointer"
              alt=""
            />
          </>
        ))}
      </div>
      {lightbox(selectedImage)}

      <div className="my-10" />

      <h2>Comics and Narrative work</h2>
      <div className="my-5" />

      <p>
        I like to use my art to tell stories, one of the ways I've been
        exploring lately is comic art.
        <br/ > I'm in the process of writing a story,
        that I hope to share more details soon. In the meantime, enjoy these pieces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {comics.map((img) => (
          <>
            <img
              key={`${img}`}
              src={`${img}`}
              onClick={() => setSelectedImage(img)}
              className="w-full border object-cover cursor-pointer"
              alt=""
            />
          </>
        ))}
      </div>

      
    </div>
  );
}
