import { getStrapiMedia, formatDate } from "../app/api-helpers";
import { Event } from "../libs/types";

export default function PostList({
  data: events,
  children,
}: {
  data: Event[];
  children?: React.ReactNode;
}) {
  if (events && events.length) {
    return (
      <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const imageUrl = getStrapiMedia(event.attributes.mediaLink);
            return (
              <div>
                {imageUrl && (
                  <img
                    alt="presentation"
                    width="240"
                    height="240"
                    className="object-cover w-full h-44 "
                    src={imageUrl}
                  />
                )}
                <div>{event.attributes.Title}</div>
                <div>{event.attributes.presenter}</div>
              </div>
            );
          })}
        </div>
        {children && children}
      </section>
    );
  } else {
    return null;
  }
}
