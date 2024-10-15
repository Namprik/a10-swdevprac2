"use client";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function onMouseAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.add("shadow-2xl");

      event.currentTarget.classList.remove("rounded-lg");
      event.currentTarget.classList.add("rounded-lg");

      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.add("shadow-lg");

      event.currentTarget.classList.remove("rounded-lg");
      event.currentTarget.classList.add("rounded-lg");

      event.currentTarget.classList.remove("bg-neutral-200");
      event.currentTarget.classList.add("bg-white");
    }
  }
  return (
    <div
      className="rounded-lg shadow-lg bg-white w-full"
      onMouseOver={(e) => onMouseAction(e)}
      onMouseOut={(e) => onMouseAction(e)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
