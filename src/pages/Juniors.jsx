import { Panel } from "../components/Panel";

const Juniors = () => (
  <Panel title="Juniors">
    <Panel.Section>
      Junior squash is an active, fun filled opportunity to learn the game of squash and increase
      fitness levels for children. This program will involve introduction to the game/rules,
      technical development as well as match play. Participants will be divided according to age
      and skill levels.
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
        <li>October 11, 2023 to December 13, 2023 4:00 PM - 5:00 PM 1 hour$85.00</li>
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
        <li>October 11, 2023 to December 13, 2023 5:00 PM - 6:00 PM 1 hour $85.00</li>
        <li>Instructors: Murray Smith and Todd Clark</li>
      </ul>
    </Panel.Section>
  </Panel>
);

export default Juniors;
