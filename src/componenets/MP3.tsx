import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function Mp3Player() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const updateTime = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setProgress(audio.currentTime);
  };

  const loadMeta = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setDuration(audio.duration);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Number(e.target.value);

    setProgress(Number(e.target.value));
  };

  return (
    <div className="">
      <div className="">
        {/* Display screen */}
        <div className="">
          <p className=""><i>NOW PLAYING</i></p>
          <p className="text-sm">ghostride.mp3</p>
        </div>

        {/* Hidden audio */}
        <audio
          ref={audioRef}
          src="/assets/decor/ghostride.mp3"
          // autoPlay
          loop
          onTimeUpdate={updateTime}
          onLoadedMetadata={loadMeta}
        />
        

        <div className="flex gap-3">


        {/* Controls */}
        <div className="">
          <button
            onClick={toggle}
            className=""
          >
            {playing ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
          </button>
        </div>



        {/* Progress */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={progress}
          onChange={seek}
          className=""
        />

        {/* Time */}
        <div className="">
          <span>{format(progress)}/</span>
          <span>{format(duration)}</span>
        </div>


        </div>



      </div>
    </div>
  );
}

// time formatter
function format(sec: number) {
  if (!sec) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}
