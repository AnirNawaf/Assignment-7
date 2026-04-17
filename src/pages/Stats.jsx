import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useTimeline } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useTimeline();

  const data = [
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
  ];

  const colors = ["#7C3AED", "#1F5A4B", "#35A86B"];

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[#335b50] mb-8">
            By Interaction Type
          </h2>

          <div className="w-full h-[420px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={8}
                  cornerRadius={10}
                  stroke="#ffffff"
                  strokeWidth={6}
                >
                  {data.map((entry, i) => (
                    <Cell key={entry.name} fill={colors[i]} />
                  ))}
                </Pie>

                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "30px",
                    fontSize: "14px",
                    color: "#64748b",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}