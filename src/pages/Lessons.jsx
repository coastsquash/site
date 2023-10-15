import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

const Photos = () => (
  <Panel title="Lessons">
    <Panel.Section title="Lessons">
      <p>
        1 on 1 in person. Coaches will spend time on technique, strategy, rules and
        safety. Murray is the main coach for the Gibsons Community center and can
        provide lessons for all levels. Gord as a former national “A” player prefers
        to coach the intermediate level and above.  Sven has taken a coaching course
        and is able to fill in where required at the beginner level.
      </p>
      <div>
        Murray: $100 for 3 lessons - contact:&nbsp;
        <EmailLink to="mujsmith34@gmail.com" inline>mujsmith34@gmail.com</EmailLink>,&nbsp;
        <PhoneLink to="604-885-7438" inline>604-885-7438</PhoneLink>&nbsp;
        (all levels)
      </div>
      <div>
        Gord: $40 per hour - contact:&nbsp;
        <EmailLink to="gordon@pantingsbelowzero.com" inline>gordon@pantingsbelowzero.com</EmailLink>,&nbsp;
        <PhoneLink to="604-865-075" inline>604-865-075</PhoneLink>&nbsp;
        (intermediate)
      </div>
      <div>
        Sven: $40 per hour - contact:&nbsp;
        <EmailLink to="sven.theunissen@gmail.com" inline>sven.theunissen@gmail.com</EmailLink>,&nbsp;
        <PhoneLink to="778-870-3581" inline>778-870-3581</PhoneLink>&nbsp;
        (beginner)
      </div>
    </Panel.Section>
  </Panel>
);

export default Photos;
