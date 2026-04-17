import { useParams } from "react-router-dom";
import friends from "../data/friends.json";
import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";
import bellIcon from "../img/BellSimpleZ.png";
import archiveIcon from "../img/Archive.png";
import trashIcon from "../img/Trash (1).png";
import phone from "../img/PhoneCall.png"
import chat from "../img/ChatDots.png"
import video from "../img/VideoCamera.png"


export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);
  const { addEntry } = useTimeline();

  if (!friend) {
    return <div className="p-6 text-red-500">Friend not found.</div>;
  }

  const handleAction = (type) => {
    const today = new Date();

    const entry = {
      id: Date.now(),
      type,
      name: friend.name,
      picture: friend.picture,
      date: today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      time: today.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    addEntry(entry);
    toast.success(`
      ${type} logged!
      `);
  };

  const statusStyles =
    friend.status === "overdue" ? "bg-red-500 text-white" : friend.status === "almost due" ? "bg-amber-400 text-white" : "bg-emerald-600 text-white";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-7">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-[240px_1fr]">
        <div className="space-y-3">
          <div className="rounded-md border border-gray-200 bg-white p-5 text-center">

            <img src={friend.picture} alt={friend.name}  className="mx-auto h-16 w-16 rounded-full object-cover"/>

            <h2 className="mt-3 text-sm font-semibold text-gray-900">
              {friend.name}
            </h2>

            <div className="mt-2">
              <span className={
                `
                inline-block rounded-full px-2 py-1 text-[10px] ${statusStyles}
                `
                }>
                {friend.status === "overdue" ? "Overdue" : friend.status === "almost due" ? "Almost Due" : "On-Track"}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {friend.tags.map((tag, i) => (
                <span key={i} className="rounded-full bg-green-100 px-2 py-1 text-[10px] uppercase text-green-700">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[11px] italic text-gray-500"> “{friend.bio}” </p>

            <p className="mt-2 text-[10px] text-gray-400"> Preferred: email </p>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white py-3 text-xs text-gray-700 transition hover:bg-gray-50">
            <img src={bellIcon} alt="bell" />Snooze 2 Weeks
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white py-3 text-xs text-gray-700 transition hover:bg-gray-50">
            <img src={archiveIcon} alt="archive" />Archive
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white py-3 text-xs text-red-500 transition hover:bg-red-50">
            <img src={trashIcon} alt="delete" />Delete
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-md border border-gray-200 bg-white p-5 text-center">
              <div className="text-3xl font-semibold leading-none text-teal-800">
                {friend.days_since_contact}
              </div>
              <div className="mt-2 text-[11px] text-gray-500">
                Days Since Contact
              </div>
            </div>

            <div className="rounded-md border border-gray-200 bg-white p-5 text-center">
              <div className="text-3xl font-semibold leading-none text-teal-800">
                {friend.goal}
              </div>
              <div className="mt-2 text-[11px] text-gray-500">Goal (Days)</div>
            </div>

            <div className="rounded-md border border-gray-200 bg-white p-5 text-center">
              <div className="text-3xl font-semibold leading-none text-teal-800">
                {formatDate(friend.next_due_date)}
              </div>
              <div className="mt-2 text-[11px] text-gray-500">Next Due</div>
            </div>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Relationship Goal
                </h3>
                <p className="mt-3 text-sm text-gray-500"> Connect every{" "} <span className="font-semibold">{friend.goal} days</span></p>
              </div>

              <button className="rounded bg-gray-100 px-3 py-1.5 text-[11px] text-gray-600 transition hover:bg-gray-200">
                Edit
              </button>
            </div>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-4">
            <h3 className="mb-3 text-sm font-medium text-gray-800">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button onClick={() => handleAction("Call")}  className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 py-6 text-sm text-gray-700 transition hover:bg-gray-50">
                <img src={phone} alt="phone" />
                <span>Call</span>
              </button>

              <button onClick={() => handleAction("Text")} className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 py-6 text-sm text-gray-700 transition hover:bg-gray-50">
                <img src={chat} alt="chat" />
                <span>Text</span>
              </button>

              <button onClick={() => handleAction("Video")}  className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 py-6 text-sm text-gray-700 transition hover:bg-gray-50">
                <img src={video} alt="video" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}