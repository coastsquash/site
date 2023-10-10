import { CallLink, EmailLink } from "../components";
import { Panel } from "../components/Panel";

const Home = () => (
  <Panel title="Home">
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
        <EmailLink email="mujsmith34@gmail.com" inline>mujsmith34@gmail.com</EmailLink>,&nbsp;
        <CallLink phone="604-885-7438" inline>604-885-7438</CallLink>&nbsp;
        (all levels)
      </div>
      <div>
        Gord: $40 per hour - contact:&nbsp;
        <EmailLink email="gordon@pantingsbelowzero.com" inline>gordon@pantingsbelowzero.com</EmailLink>,&nbsp;
        <CallLink phone="604-865-075" inline>604-865-075</CallLink>&nbsp;
        (intermediate)
      </div>
      <div>
        Sven: $40 per hour - contact:&nbsp;
        <EmailLink email="sven.theunissen@gmail.com" inline>sven.theunissen@gmail.com</EmailLink>,&nbsp;
        <CallLink phone="778-870-3581" inline>778-870-3581</CallLink>&nbsp;
        (beginner)
      </div>
    </Panel.Section>
    <Panel.Section className="mt-4" title="Racket Restringing">
      <div className="flex flex-col gap-2">
        <p>
          Sunshine Coast – Murray Smith – leave your racket with the staff at the
          Gibsons rec centre and paper wrap your grip with your contact info.
          Contact Murray to let him know that the racket is there.  He will
          contact you once the racket is restrung and returned to the Gibsons
          community center.
        </p>
        <p className="underline">Contact Murray</p>
        <div className="ml-2">
          <div>
            Email: <EmailLink email="mujsmith34@gmail.com" inline>mujsmith34@gmail.com</EmailLink>
          </div>
          <div>
            Phone: <CallLink phone="604-885-7438" inline>604-885-7438</CallLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Evergreen (North Vancouver) - Cathy Covernton owns and manages the
          on-site CC Squash Pro Shop at Evergreen. She provides all of the
          sportswear, shoes and equipment you will need at competitive prices.
          Cathy also provides expert racquet stringing and will provide you with
          demo racquets for testing. Special orders? No problem.
        </p>
        <p className="underline">Contact Cathy</p>
        <div className="ml-2">
          <div>
            Email: <EmailLink email="ccsquashshop@gmail.com" inline>ccsquashshop@gmail.com</EmailLink>
          </div>
          <div>
            Phone: <CallLink phone="604-787-3097" inline>604-787-3097</CallLink>
          </div>
        </div>
      </div>
    </Panel.Section>
  </Panel>
);

export default Home;
