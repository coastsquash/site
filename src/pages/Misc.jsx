import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

const Photos = () => (
  <div className="flex flex-col gap-6">
    <Panel title="Miscellaneous Information">
      <Panel.Section title="Youtube">
        <span>
          You can find the Sunshine Coast Squash Association on
          <a
            className="mx-2"
            href="https://www.youtube.com/@Sventheunissenrecordings"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} /> Youtube
          </a>
        </span>
      </Panel.Section>
    </Panel>
    <Panel>
      <Panel.Section className="mt-4" title="Racket Restringing">
        <div className="flex flex-col gap-2">
          <p>
            Sunshine Coast – Murray Smith has squash racquets, grips, balls,
            glasses for sale. He also has squash racquet demos for use. For
            restringing, leave your racquet with the staff at the Gibsons rec
            centre and paper wrap your grip with your contact info. Contact
            Murray to let him know that the racquet is there. He will contact
            you once the racquet is restrung and returned to the Gibsons
            community center.
          </p>
          <p className="underline">Contact Murray</p>
          <div className="ml-2">
            <div>
              Email: <EmailLink to="mujsmith34@gmail.com" inline />
            </div>
            <div>
              Phone: <PhoneLink to="604-989-9111" inline />
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
              Email: <EmailLink to="ccsquashshop@gmail.com" inline />
            </div>
            <div>
              Phone: <PhoneLink to="604-787-3097" inline />
            </div>
          </div>
        </div>
      </Panel.Section>
    </Panel>
  </div>
);

export default Photos;
