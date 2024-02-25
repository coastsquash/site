import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

const Juniors = () => (
  <Panel title="Juniors">
    <Panel.Section>
      <p>
        Each year, Murray hosts Junior squash Lessons at the Gibsons Community
        Centre. This takes place each Wednesday afternoon/night in the Fall
        (October – December) and in the Winter (January – March). 4pm-5pm is
        for beginners and 5pm-6pm of for intermediates. Junior age is considered
        8 years up to 17 years old. Cost is $85 for 10 sessions.
      </p>
      <p>
        For additional information:
      </p>
      <ul className="list-disc px-8">
        <li><EmailLink to="mujsmith34@gmail.com" /></li>
        <li><PhoneLink to="604-885-7438" /></li>
      </ul>
    </Panel.Section>
    <Panel.Section className="mt-4 gap-2">
      <p>
        All squash equipment is provided in this program.
      </p>
      <a href="https://ca.apm.activecommunities.com/scrd/Activity_Search/junior-squash-program-beginner-4-00pm/90462">
        Junior Squash Program Beginner 4:00pm
      </a>
      <p className="font-medium">Information</p>
      <ul className="list-disc px-8">
        <li>All Ages</li>
        <li>Court 1 and 2 Gibsons & Area Community Centre</li>
      </ul>
    </Panel.Section>
    <Panel.Section className="mt-4 gap-2">
      <a href="https://ca.apm.activecommunities.com/scrd/Activity_Search/junior-squash-program-intermediate-5-00pm/90463">
        Junior Squash Program Intermediate 5:00pm
      </a>
      <p className="font-medium">Information</p>
      <ul className="list-disc px-8">
        <li>All Ages</li>
        <li>Court 1 and 2 Gibsons & Area Community Centre</li>
        <li>Instructors: Murray Smith and Todd Clark</li>
      </ul>
    </Panel.Section>
  </Panel>
);

export default Juniors;
