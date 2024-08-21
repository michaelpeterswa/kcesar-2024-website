import { JoinedSession } from "./trainingdates";

export default function TrainingCalendar({
  sessions,
}: {
  sessions: JoinedSession[];
}) {
  return (
    <div className="overflow-x-auto bg-base-300 rounded-xl">
      <table className="table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index}>
              <td>{session.course.name}</td>
              <td>
                {`${session.session.course_date} ${session.session.course_start_time} - ${session.session.course_end_time}`}
              </td>
              <td>
                {session.location.google_maps_url ? (
                  <a
                    className="underline text-blue-400"
                    href={session.location.google_maps_url}
                  >
                    {session.location.name}
                  </a>
                ) : (
                  session.location.name
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
