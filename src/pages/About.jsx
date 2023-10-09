import { Link } from "react-router-dom";

import { CallLink, EmailLink } from "../components";
import { Panel } from "../components/Panel";

const About = () => (
  <Panel title="About">
    <Panel.Section title="Welcome to Coast Squash! Home of squash on the Sunshine Coast.">
      <p>The purpose of this site is to connect squash players on B.C’s Sunshine Coast.</p>
      <ul className="list-disc px-8">
        <li>To find other members go to the <Link to="/members">members</Link> page.</li>
        <li>For more information on the box league visit <Link to="/league">here</Link>.</li>
      </ul>
    </Panel.Section>
    <Panel.Section className="mt-4 gap-2" title="Gibsons and Area Community Centre">
      <div className="ml-2">
        <p>700 Park Road, Gibsons, BC</p>
        <p>604-885-6868</p>
      </div>
    </Panel.Section>
    <Panel.Section className="mt-4 gap-2" title="Sunshine Coast Squash Association Contacts">
      <div className="ml-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            <div className="w-[196px]">Coast Squash email:</div>
            <EmailLink email="coastsquash@gmail.com">coastsquash@gmail.com</EmailLink>
          </div>
          <div className="flex flex-row">
            <div className="w-[196px]">Murray Smith:</div>
            <CallLink phone="604-885-7438">604-885-7438</CallLink>
          </div>
          <div className="flex flex-row">
            <div className="w-[196px]">Alun Woolliams:</div>
            <CallLink phone="604-885-8142">604-885-8142</CallLink>
          </div>
        </div>
      </div>
    </Panel.Section>
  </Panel>
);

export default About;
