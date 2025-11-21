import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export default function StockLevelsChart() {
  const data = [
    { day: "Mon", value: 2450 },
    { day: "Tue", value: 2480 },
    { day: "Wed", value: 2380 },
    { day: "Thu", value: 2550 },
    { day: "Fri", value: 2480 },
    { day: "Sat", value: 2520 },
    { day: "Sun", value: 2800 }
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Stock Levels Over Time</h3>
        <span className="text-sm text-gray-500 bg-gray-100 rounded-md px-3 py-1.5">
          Last 7 days
        </span>
      </div>

      {/* Chart Area */}
      <div className="relative h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FEE2E2" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FEE2E2" stopOpacity={0.4}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" stroke="#E5E7EB" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4B5563', fontSize: 14 }}
              dy={10}
            />
            <YAxis 
              domain={[0, 3000]}
              ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString()}
              dx={-5}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#881337" 
              strokeWidth={3}
              fill="url(#colorStock)"
              dot={{ fill: '#881337', stroke: 'white', strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="w-8 h-3 border-2 border-[#881337] bg-white" />
        <span className="text-sm text-gray-600">Total Stock</span>
      </div>
    </div>
  );
}