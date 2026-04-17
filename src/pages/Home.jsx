import friends from "../data/friends.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Friends to keep close in your life
          </h1>

          <p className="text-gray-500 mt-3">
            Your personal shelf of meaningful connections. Browse, tend, and nurture relationships.
          </p>

          <button className="mt-6 bg-green-800 text-white px-5 py-2 rounded-md hover:bg-green-900">
            + Add a Friend
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white shadow-sm rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-gray-500">Total Friends</p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold">3</h2>
            <p className="text-gray-500">On Track</p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold">6</h2>
            <p className="text-gray-500">Need Attention</p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-gray-500">Interactions This Month</p>
          </div>
        </div>

        <hr className="my-10" />

       <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Friends</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {friends.map((friend) => (
    <Link to={`/friend/${friend.id}`} key={friend.id}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-all duration-200">

        <img
          src={friend.picture}
          alt={friend.name}
          className="w-14 h-14 mx-auto rounded-full object-cover"
        />

        <h3 className="mt-4 text-sm font-semibold text-gray-900">
          {friend.name}
        </h3>

        <p className="text-[11px] text-gray-400 mt-1">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-1.5 mt-3 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-[3px] rounded-full bg-green-100 text-green-700 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-3">
          <span
            className={`inline-block text-[10px] px-2.5 py-1 rounded-full text-white ${
              friend.status === "overdue"
                ? "bg-red-400"
                : friend.status === "almost due"
                ? "bg-amber-400"
                : "bg-emerald-500"
            }`}
          >
            {friend.status === "overdue"
              ? "Overdue"
              : friend.status === "almost due"
              ? "Almost Due"
              : "On-Track"}
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>
    </div>
  );
}