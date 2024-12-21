import { selectionMeetingPlaces } from "src/core/static/static";

interface CalendarComponentProps {
  isGround: boolean;
}
export default function CalendarComponent(props: CalendarComponentProps) {
  const colors = ["bg-yallowGarage", "bg-blueGarage", "bg-pinkGarage"];

  const getRandomColorClass = (): string => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  };
  // const totalRooms = 10; // Total number of meeting rooms
  // const roomsData = Array.from({ length: totalRooms }, (_, index) => ({
  //   roomNumber: index + 1,
  //   randomData: Math.floor(Math.random() * 100), // Generate random data for each room
  // }));
  const rooms = [
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5",
    "Room 6",
    "Room 7",
    "Room 8",
    "Room 9",
  ];
  const events = [
    {
      room: "Room 1",
      event: "The Garage employee",
      details: "Details of The Garage employee event",
    },
    {
      room: "Room 8",
      event: "Developer Meetup",
      details: "Details of Developer Meetup event",
    },
    { room: "Room 4", event: "gggg Meetup", details: "Details " },
  ];
  const groupedMeetingPlaces = selectionMeetingPlaces.reduce(
    (groups: { [key: string]: string[] }, place) => {
      const floor = place.includes("Ground Floor")
        ? "Ground Floor"
        : "Basement Floor";

      groups[floor] = groups[floor] || [];
      groups[floor].push(place);

      return groups;
    },
    {}
  );
  const removeFloorLevel = (place: string): string => {
    return place
      .replace("meeting Room Ground Floor ", " ")
      .replace("meeting Room Basement Floor ", " ");
  };

  return (
    <section className="relative py-8 sm:p-8 p-2 bg-white rounded-md">
      {/* CalendarComponent */}
      {props.isGround ? (
        <div className="border border-gray-200">
          {Object.keys(groupedMeetingPlaces).map((room) => (
            <>
              {room === "Ground Floor" && (
                <div
                  className={`grid grid-cols-9 divide-gray-200 border-b border-gray-200`}
                  key={room}
                >
                  {groupedMeetingPlaces[room].map((place) => (
                    <div
                      className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200"
                      key={place}
                    >
                      <span className="text-sm font-medium text-gray-500">
                        Room
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {removeFloorLevel(place)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}
          <div className="grid grid-cols-9 divide-gray-200">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="p-3.5 xl:aspect-auto text-black lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100"
                onClick={() => {
                  const currentEvent = events.find(
                    (event) => event.room === room
                  );
                  if (currentEvent) {
                    alert(currentEvent.details);
                  }
                }}
              >
                {events.find((event) => event.room === room) && (
                  <span
                    className={`hidden lg:block text-xs font-medium ${getRandomColorClass()} py-2 px-2 size-full text-center rounded-md text-gray-500`}
                  >
                    {events.find((event) => event.room === room)?.event ||
                      "event"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-gray-200">
        {Object.keys(groupedMeetingPlaces).map((room) => (
          <>
            {room === "Ground Floor" && (
              <div
                className={`grid grid-cols-9 divide-gray-200 border-b border-gray-200`}
                key={room}
              >
                {groupedMeetingPlaces[room].map((place) => (
                  <div
                    className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200"
                    key={place}
                  >
                    <span className="text-sm font-medium text-gray-500">
                      Room
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {removeFloorLevel(place)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        ))}
        <div className="grid grid-cols-9 divide-gray-200">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="p-3.5 xl:aspect-auto text-black lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100"
              onClick={() => {
                const currentEvent = events.find(
                  (event) => event.room === room
                );
                if (currentEvent) {
                  alert(currentEvent.details);
                }
              }}
            >
              {events.find((event) => event.room === room) && (
                <span
                  className={`hidden lg:block text-xs font-medium ${getRandomColorClass()} py-2 px-2 size-full text-center rounded-md text-gray-500`}
                >
                  {events.find((event) => event.room === room)?.event ||
                    "event"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
