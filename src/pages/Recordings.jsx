import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { EmailLink, SmsLink } from "../components";
import { Panel } from "../components/Panel";

const Recordings = () => (
  <Panel title="Recordings">
    <Panel.Section title="GoPro recordings for your squash games">
      <p>
        <span className="font-semibold">Reason:</span> Video recording a squash game/match can give a player the perspective (post-game)
        to learn from their mistakes. This recording can be used for analysis by the player, and
        further analyzed by a coach for greater insight.
      </p>
      <Panel.Subsection title="Basic Cost">
        <ul className="pl-4">
          <li>
            A) Go pro camera setup at courts, and recording at 1080p 120 FPS (up to 45 minutes)
            any angle option:<span className="font-semibold ml-2">$20</span>
          </li>
          <li>
            B) recordings uploaded w/private link to Youtube (480p) & player sent a private link:
            <span className="font-semibold ml-2">$5 per game</span>
          </li>
        </ul>
      </Panel.Subsection>
      <Panel.Subsection title="Additional options (optional - not required)">
        <ul className="pl-4">
          <li>
            A) Edits to include subtitle scoring:
            <span className="font-semibold ml-2">
              $5 additional for each game edited with scoring.
            </span>
          </li>
          <li>
            B) 2 camera recording (w/ editing)
            <span className="font-semibold ml-2">
              $5 additional for each game edited with 2 cameras.
            </span>
          </li>
          <li>
            C) Highlights (with music) at the end of game:
            <span className="font-semibold ml-2">
              $5 additional for each game edited to include highlights.
            </span>
          </li>
        </ul>
      </Panel.Subsection>
      <Panel.Subsection title="Youtube channel">
        <span>
          Youtube channel is under “Sunshine Coast Squash Association.” Youtube Link:
          <a className="mx-2" href="https://www.youtube.com/watch?v=vu1WWyRBN-o" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} /> GoPro recordings trailer
          </a>
          shows particulars on the service that is offered with examples of
          recorded games using each of the angle options listed below. There are also 3 example
          games with a coach analysis to show how videos can potentially be used for remote coaching.
        </span>
      </Panel.Subsection>
      <Panel.Subsection title="Angle options (your choice)">
        <ul className="pl-4">
          <li>1) squash court - single camera - mounted center back</li>
          <li>2) squash court - single camera - tripod left back</li>
          <li>3) squash court - double camera - mounted center back & tripod left back</li>
          <li>4) racquetball court - single camera - mounted center back</li>
          <li>5) racquetball court - single camera - mounted left back</li>
          <li>6) racquetball court - single camera - tripod front center</li>
          <li>7) racquetball court - double camera - mounted center back & tripod right front</li>
          <li>8) racquetball court - double camera - mounted center back & mounted left back</li>
          <li>9) racquetball court - double camera - mounted left back & mounted right front</li>
          <li>10) racquetball court - double camera - mounted left back & mounted right back</li>
        </ul>
      </Panel.Subsection>
      <Panel.Subsection title="Link example">
        <a href="https://www.youtube.com/playlist?list=PL-v-l8A2C284nraR0ECqjMvjT1qcjOA4K" target="_blank" rel="noreferrer">
          https://www.youtube.com/playlist?list=PL-v-l8A2C284nraR0ECqjMvjT1qcjOA4K
        </a>
        <p>
          this is an example of the private link you would
          receive if 5 games were played/recorded using option 1 (squash court - single camera - center back), and you requested “additional options”
          including subtitles & highlights.
        </p>
      </Panel.Subsection>
      <Panel.Subsection title="Contact">
        <p>Text Sven at <SmsLink to="778-870-3581" inline /> and provide information below.</p>
        <ul className="pl-8 list-decimal">
          <li>date/time of game and confirmation of which court has been booked.</li>
          <li>
            specify angle option desired and any “additional options” (ie scoring/dual cameras/highlights)
          </li>
        </ul>
        <p>I will text back and confirm if I am able to attend.</p>
        <p>Payment via e-transfer email: <EmailLink to="sven.theunissen@gmail.com" inline /></p>
        <ul className="pl-8 list-disc">
          <li>
            Youtube link will be sent (within a week) once payment has been received.
          </li>
          <li>
            These links will not be public, but will be accessible to anyone the player chooses
            to forward the link to.
          </li>
          <li>
            If you prefer the video on a USB stick (in lieu of a YouTube link), the stick you provide
            will need to be at least 16GB (also available for purchase for $5). Also text a mailing
            address for the USB stick to be mailed after upload.
          </li>
          <li>
            If you do not have a playing partner, I can join you and attempt to play similar to your
            level, although it is recommended from a coaching analysis point of view to have your
            opponent fairly equal to you in ability.
          </li>
        </ul>
      </Panel.Subsection>
    </Panel.Section>
    <Panel.Section className="mt-4" title="Using the recording for analysis - different options">
      <ul className="pl-4">
        <li className="flex flex-row gap-4 pb-4">
          <p>1)</p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Coach Murray - written analysis - cost: $30 per game:
            </span>
            <span>
              Murray will watch a game and then send a written analysis on technique,
              strategy, tactics, rules, and safety.<br />Link example:
              <a className="mx-2" href="https://www.youtube.com/watch?v=90Qs3_OEG-M" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} /> remote coaching option 1 - Coach Murray - example game - Chris vs Sven
              </a>
            </span>
            <p>contact: <EmailLink to="mujsmith34@gmail.com" inline /></p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4">
          <p>2)</p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Coach Philip - video analysis - cost: 25 Euro (about CAN$37.50)
            </span>
            <span>
              5 minutes of playing time (analysis roughly 20 minutes).<br />Link example:
              <a className="mx-2" href="https://www.youtube.com/watch?v=7PzZ9nvh2w4" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} /> remote coaching option 2 - Coach Phillip - example game - Remi vs Sven
              </a>
            </span>
            <p>
              website:
              <a className="mx-2" href="https://bettersquash.com" target="_blank" rel="noreferrer">
                https://bettersquash.com
              </a>
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4">
          <p>3)</p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Coach Sven - video analysis - cost: $20 for 1 game.
            </span>
            <span>
              3 tips/pointers will be given for the beginner/intermediate level. Although I have
              attended a coaching course, consider this simply a perspective with 3 suggestions
              from a fellow player.<br />Link example:
              <a className="mx-2" href="https://youtu.be/h023Qvj2uXw" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} /> remote coaching option 3 - Coach Sven - example game - Damien vs Sven
              </a>
            </span>
            <p>contact: <EmailLink to="sven.theunissen@gmail.com" inline /></p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4">
          <p>4)</p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Cross court analytics - cost: 40 pounds per match
            </span>
            <span>
              Will compile and analyze data from your game recording, and create a game plan for
              you based on your shot location and shot type.
            </span>
            <p>
              website:
              <a className="mx-2" href="https://www.crosscourtanalytics.com" target="_blank" rel="noreferrer">
                https://www.crosscourtanalytics.com
              </a>
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-4">
          <p>5)</p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Squash Dynamics - cost: 30, 40 or 50 Euro depending on package
            </span>
            <span>
              The offer 3 packages including technical & tactical assessment, training evaluation,
              and meeting online with a coach.
            </span>
            <p>
              website:
              <a className="mx-2" href="https://squashdynamics.com/online-coaching/" target="_blank" rel="noreferrer">
                https://squashdynamics.com/online-coaching/
              </a>
            </p>
          </div>
        </li>
      </ul>
    </Panel.Section>
  </Panel>
);

export default Recordings;
