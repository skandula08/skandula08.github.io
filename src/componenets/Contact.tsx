// ┌────┬───────────────────────┐
// │A-1 │ PERSONNEL RECORD      │
// │ACT │                       │
// │CLR │ NAME: Jane Doe        │
// │02  │ ROLE: SWE             │
// ├────┼───────────────────────┤
// │RES │ LINK │ GIT │ MAIL     │
// └────┴───────────────────────┘

import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  // faFile,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="max-w-sm border border-[var(--red)] bg-[var(--header)] text-[var(--red)] p-4 font-[Cousine] rounded-lg shadow-md w-full">
      <div className="text-md tracking-[0.3em]">
        CONTACT FILE
      </div>
      <span className="text-xs">
        available via{" "}
          <a href="https://drive.google.com/file/d/12RIeLmWuPHJkmSDDzffbTglFN9LFPvNm/view?usp=sharing">
              <b><FontAwesomeIcon icon={faIdCard} />
              vcard </b>
          </a>
        </span>

      <div className="border-t border-[var(--red)] mb-3" />

      <div className="space-y-1 text-md">
        <div>NAME: SREE KANDULA</div>
        <div>ROLE: DEVELOPER/DESIGNER</div>
        <div>STATUS: ACTIVE</div>
      </div>

      <div className="border-t border-[var(--red)] my-3" />

      <div className="grid grid-cols-3 gap-3 text-sm">
        {/* <a href="/resume.pdf">
          <FontAwesomeIcon icon={faFile} />
          RESUME
        </a> */}
        <a href="https://linkedin.com/sreekandula" title="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          LINKEDIN
        </a>
        <a href="https://github.com/skandula08" title="github">
          <FontAwesomeIcon icon={faGithub} />
          GITHUB
        </a>
        <a href="mailto:sreekandula7@email.com/" title="email">
          <FontAwesomeIcon icon={faEnvelope} />
          EMAIL
        </a>
        <a href="https://www.instagram.com/sree.can.doodle/" title="instagram">
          <FontAwesomeIcon icon={faInstagram} />
          INSTAGRAM
        </a>
        <a href="https://discord.com/users/452990785814790144" title="discord">
          <FontAwesomeIcon icon={faDiscord} />
          DISCORD
        </a>
      </div>
      <hr />
      <caption className="text-xs">2026</caption>
    </div>
  );
}
