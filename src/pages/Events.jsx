import { Panel } from "../components/Panel";

import eventImage from "../assets/ref-clinic.jpg";

const Events = () => (
  <div className="flex flex-col gap-6">
    <Panel title="Events">
      <Panel.Section title="January 27th 2024">
        <div className="flex flex-col sm:flex-row gap-2">
          <p className="flex">
            A mini-rules clinic was held at the Gibsons Recreation Centre. Thirteen
            players participated in the clinic facilitated by National Referee Mike
            Tooley.
          </p>
          <img className="flex sm:h-96" src={eventImage} alt="Clinic" />
        </div>
      </Panel.Section>
    </Panel>
    <Panel>
      <Panel.Section title="March 8th &amp; 9th 2024">
        <p>
          This is the date set for the SCSA annual Team Tournament.
        </p>
      </Panel.Section>
    </Panel>
  </div>
);

export default Events;
