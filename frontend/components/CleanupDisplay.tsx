import { Cleanup } from '../../Cleanup';

interface Props {
  cleanup: Cleanup;
}

export const CleanupDisplay = (props: Props) => {
  return (
    <div>
      <img src={props.cleanup.pictures[0]} />
      <h3>{props.cleanup.title}</h3>
      <h4>{props.cleanup.subtitle}</h4>
      <h6>Attending: {props.cleanup.attendees.length + 1} | Interested: {props.cleanup.interested.length + 1}</h6>
      <p>{props.cleanup.location}</p>
      <p>{props.cleanup.start.toUTCString()} - {props.cleanup.end.toUTCString()}</p>
      <button type='button'>RSVP</button>
      <button type='button'>Interested</button>
      <hr />
    </div>
  );
};