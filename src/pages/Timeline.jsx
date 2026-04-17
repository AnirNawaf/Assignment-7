import callImg from "../img/call.png";
import videoImg from "../img/video.png";
import textImg from "../img/text.png";
import { useTimeline } from "../context/TimelineContext";
import { useState } from "react";

export default function Timeline() {
  const data = useTimeline();
  const contacts = data?.contacts || data?.timeline || [];
  const [filter, setFilter] = useState("All");

  const filteredContacts =
    filter === "All"
      ? contacts
      : contacts.filter((c) => c.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <img src={callImg} alt="call" className="h-6 w-6 object-contain" />;
      case "Text":
        return <img src={textImg} alt="text" className="h-6 w-6 object-contain" />;
      case "Video":
        return <img src={videoImg} alt="video" className="h-6 w-6 object-contain" />;
      default:
        return <img src={textImg} alt="text" className="h-6 w-6 object-contain" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-slate-800">Timeline</h1>

        <div className="mb-6 cursor-pointer">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="cursor-pointer px-10 py-2 border border-gray-300 rounded-lg text-sm bg-white"
          >
            <option className="cursor-pointer" value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredContacts.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                {getIcon(c.type)}
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-800">
                    {c.type || "Text"}
                  </span>{" "}
                  with {c.name || "Unknown"}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {c.date || "Today"}
                  {c.time ? ` at ${c.time}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}