import { ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function CategoryDonut() {
  const data = [
    { name: "Electronics", value: 35, color: "#8B1538" },
    { name: "Fashion", value: 22, color: "#3B82F6" },
    { name: "Sports", value: 20, color: "#10B981" },
    { name: "Home & Garden", value: 13, color: "#F59E0B" },
    { name: "Others", value: 10, color: "#6B7280" },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Stock by Category</h3>
        <button className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col items-center">
        {/* Donut Chart */}
        <div className="w-60 h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-8 flex gap-1 items-center justify-c flex-wrap text-sm text-gray-600">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-[25px] h-3" style={{ backgroundColor: entry.color }} />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}