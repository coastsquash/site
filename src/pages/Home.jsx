import { Link } from "react-router-dom";

import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

const Home = () => (
  <div className="flex flex-col gap-6">
    <Panel title="Home">
      <Panel.Section title="Welcome to Coast Squash! Home of squash on the Sunshine Coast.">
        <p>The purpose of this site is to connect squash players on B.C’s Sunshine Coast.</p>
        <p>
          The Gibson’s Community centre offers a dedicated squash court as well as a court that
          can be converted between a racquetball and a squash court. Bookings can be made on line at
          <a className="mx-[0.5em]" href="https://www.scrd.ca/community-centre/" target="_blank" rel="noreferrer">
            https://www.scrd.ca/community-centre/
          </a>
          or by contacting the community centre by phone. Clean, non-marking shoes are required
          on the court. Eye protection is required for racket sports.
        </p>
        <ul className="list-disc px-8">
          <li>To find other members go to the <Link to="/members">members</Link> page.</li>
          <li>For more information on the box league visit <Link to="/league">here</Link>.</li>
        </ul>
      </Panel.Section>
    </Panel>
    <Panel>
      <Panel.Section className="mt-4 gap-2" title="Gibsons and Area Community Centre">
        <div className="ml-2">
          <p>700 Park Road, Gibsons, BC</p>
          <PhoneLink to="604-885-6868" />
        </div>
      </Panel.Section>
    </Panel>
    <Panel>
      <Panel.Section className="mt-4 gap-2" title="Sunshine Coast Squash Association Contacts">
        <div className="ml-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <div className="w-[196px]">Coast Squash email:</div>
              <EmailLink to="coastsquash@gmail.com">coastsquash@gmail.com</EmailLink>
            </div>
            <div className="flex flex-row">
              <div className="w-[196px]">Murray Smith:</div>
              <PhoneLink to="604-989-9111" />
            </div>
            <div className="flex flex-row border-l-2 border-l-slate-400">
              <p className="pl-2">Murray is the Manta World Sports squash rep for the Sunshine Coast.</p>
            </div>
          </div>
        </div>
      </Panel.Section>
    </Panel>
  </div>
);

export default Home;
