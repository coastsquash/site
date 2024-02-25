import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

import murrayImage from "../assets/murray.jpg";

const Photos = () => (
  <div className="flex flex-col gap-6">
    <Panel title="Lessons">
      <Panel.Section title="Murray">
        <div>
          Contact:&nbsp;
          <EmailLink to="mujsmith34@gmail.com" inline />,&nbsp;
          <PhoneLink to="604-989-9111" inline />&nbsp;
          (all levels)
        </div>
        <p>$100 for 3 lessons</p>
        <div className="flex flex-row">
          <div className="grow">
            <p>
              {`Murray has coached in various BC communities over the past 27 years, attaining his
              Level 3 - Technical: Squash Coaching Certification in 2006. He was the Assistant Coach
              with Squash BC's High Performance, as well as Developing Player Junior Programs from
              2006 - 2007.  Since 2008, he has coordinated the SCRD Junior Squash Program, as well
              as provided adult coaching on the Sunshine Coast`}
            </p>
          </div>
          <div className="w-1/3 pr-2 min-w-[100px]">
            <img src={murrayImage} alt="Murray" />
          </div>
        </div>
      </Panel.Section>
    </Panel>
    <Panel>
      <Panel.Section title="Gord">
        <div>
          Contact:&nbsp;
          <EmailLink to="gordon@pantingsbelowzero.com" inline />,&nbsp;
          <PhoneLink to="604-865-075" inline />&nbsp;
          (intermediate)
        </div>
        <p>$40 per hour</p>
        <p>
          {`Gord Halloran is a former National “A” level player. He was coached and trained by
          Larry Armstrong – one of the top pros and teaching pros in BC. Gords areas of focus
          as your coach 1) upgrade your style and technique 2) helping your foot work set up
          your shot 3) controlling the T on offence and defense 4) the right grip for the right
          shot 5) serve with a variety and focus 6)strategies for competing – observing your
          opponent – recognizing opportunities 7) ongoing support and encouragement for your game.`}
        </p>
      </Panel.Section>
    </Panel>
    <Panel>
      <Panel.Section title="Sven">
        <div>
          Contact:&nbsp;
          <EmailLink to="sven.theunissen@gmail.com" inline />,&nbsp;
          <PhoneLink to="778-870-3581" inline />&nbsp;
          (beginner)
        </div>
        <p>$40 per hour</p>
        <p>
          {`Sven played a bit as a Junior in Vancouver, but has only recently taken up the sport
          in a more dedicated way.  This past summer he took a Coaching Fundamentals squash course,
          which aims to teach the beginner player the basic concepts of squash. Ultimately, he
          simply likes to play the game, and would like to see the sport grow in numbers and quality
          on the Sunshine Coast.  To make that happen, he offers lessons at the beginner level.`}
        </p>
      </Panel.Section>
    </Panel>
  </div>
);

export default Photos;
