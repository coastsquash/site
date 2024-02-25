import { Panel } from "../components/Panel";
import { EmailLink } from "../components";

const League = () => (
  <Panel title="League">
    <p className="text-xl pt-2">Box League</p>
    <p className="text-normal pt-2">
      The league is starting up on the 15 of October. You can find the League Entry Form&nbsp;
      <a
        href="https://docs.google.com/document/d/1wKT-832zm4CQALBpl_yfMOG2OT_lX9UawIy2LFM1J8g/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>.
    </p>
    <p className="text-normal pt-2">
      How it works:
    </p>
    <ul className="list-disc px-8 pt-2">
      <li>
        At the start of each session (a month give or take) you will receive
        an email listing the other members in your box. It is your responsibility
        to schedule and play your games before the month is out. This box will
        run Sept 15 through Sept 15.
      </li>
      <li>
        Games are scored according to agreement between the players. Scoring
        options are as follows:
        <ol className="list-decimal px-8">
          <li>
            Hand in/Hand out – game to 9 points, where only the server scores a point.
          </li>
          <li>
            Point a Rally (11) – game to 11 points, where points are scored for each
            player continuously regardless who served.
          </li>
          <li>
            Point a Rally (15) - game to 15 points, where points are scored for each
            player continuously regardless who served.
          </li>
        </ol>
      </li>
      <li>
        All matches are best of 5 games.
      </li>
      <li>
        After each match you record the result at the community center on the box sheet
        and/or email coastsquash@gmail.com with the results.
      </li>
      <li>
        When the session is over the results will be tallied, the boxes shuffled, and
        everything will start again.
      </li>
      <li>
        At the start of each session (a month give or take) you will receive an email
        listing the other members in your box. It is your responsibility to schedule
        and play your games before the month is out. This box will run Sept 15 through
        Sept 15.
      </li>
      <li>
        Games are scored according to agreement between the players. Scoring options
        are as follows:
        <ol className="list-decimal px-8">
          <li>
            Hand in/Hand out – game to 9 points, where only the server scores a point.
          </li>
          <li>
            Point a Rally (11) – game to 11 points, where points are scored for each
            player continuously regardless who served.
          </li>
          <li>
            Point a Rally (15) -game to 15 points, where points are scored for each
            player continuously regardless who served.
          </li>
        </ol>
      </li>
      <li>
        All matches are best of 5 games.
      </li>
      <li>
        After each match you record the result at the community center on the box sheet
        and/or email <EmailLink className="pr-1" to="coastsquash@gmail.com" inline />
        with the results.
      </li>
      <li>
        When the session is over the results will be tallied, the boxes shuffled, and
        everything will start again.
      </li>
    </ul>
  </Panel>
);

export default League;
