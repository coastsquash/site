import { EmailLink, PhoneLink } from "../components";
import { Panel } from "../components/Panel";

const Photos = () => (
  <Panel title="Miscellaneous Services">
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
            Email: <EmailLink to="mujsmith34@gmail.com" inline>mujsmith34@gmail.com</EmailLink>
          </div>
          <div>
            Phone: <PhoneLink to="604-885-7438" inline>604-885-7438</PhoneLink>
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
            Email: <EmailLink to="ccsquashshop@gmail.com" inline>ccsquashshop@gmail.com</EmailLink>
          </div>
          <div>
            Phone: <PhoneLink to="604-787-3097" inline>604-787-3097</PhoneLink>
          </div>
        </div>
      </div>
    </Panel.Section>
  </Panel>
);

export default Photos;
