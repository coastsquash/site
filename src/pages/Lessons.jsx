import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

const Photos = () => (
  <Panel title="Lessons">
    <Panel.Section title="Lessons">
      <div>
        Murray: $100 for 3 lessons - contact:&nbsp;
        <EmailLink to="mujsmith34@gmail.com" inline />,&nbsp;
        <PhoneLink to="604-989-9111" inline />&nbsp;
        (all levels)
      </div>
      <div className="border-l-2 border-l-slate-400 pl-2">
        <p>
          {`Hi, I'm a squash coach teaching out of the Gibsons Community Center in Gibsons, BC.
          I've coached in various BC communities over the past 27 years, receiving my
          Level 3 - Technical, squash coaching certification, in 2006.From 2007 – 2008,
          I was the Assistant Coach with Squash BC's High Performance, and Developing Player
          Junior Programs.Since 2008, I have coordinated the Junior Squash Program, and Adult
          Coaching.`}
        </p>
        <p className="mt-2">
          3 lessons for $100
        </p>
      </div>
      <div>
        Gord: $40 per hour - contact:&nbsp;
        <EmailLink to="gordon@pantingsbelowzero.com" inline />,&nbsp;
        <PhoneLink to="604-865-075" inline />&nbsp;
        (intermediate)
      </div>
      <div className="border-l-2 border-l-slate-400 pl-2">
        <p>
          {`Gord Halloran is a former National “A” level player. He was coached and trained by
          Larry Armstrong – one of the top pros and teaching pros in BC. Gords areas of focus
          as your coach 1) upgrade your style and technique 2) helping your foot work set up
          your shot 3) controlling the T on offence and defense 4) the right grip for the right
          shot 5) serve with a variety and focus 6)strategies for competing – observing your
          opponent – recognizing opportunities 7) ongoing support and encouragement for your game.`}
        </p>
        <p className="mt-2">
          $40 per hour
        </p>
      </div>
      <div>
        Sven: $40 per hour - contact:&nbsp;
        <EmailLink to="sven.theunissen@gmail.com" inline />,&nbsp;
        <PhoneLink to="778-870-3581" inline />&nbsp;
        (beginner)
      </div>
      <div className="border-l-2 border-l-slate-400 pl-2">
        <p>
          {`Sven played a bit as a Junior in Vancouver, but has only recently taken up the sport
          in a more dedicated way.  This past summer he took a Coaching Fundamentals squash course,
          which aims to teach the beginner player the basic concepts of squash. Ultimately, he
          simply likes to play the game, and would like to see the sport grow in numbers and quality
          on the Sunshine Coast.  To make that happen, he offers lessons at the beginner level.`}
        </p>
        <p className="mt-2">
          $40 per hour
        </p>
      </div>
    </Panel.Section>
  </Panel>
);

export default Photos;
