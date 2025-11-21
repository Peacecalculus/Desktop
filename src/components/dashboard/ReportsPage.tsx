import { FileText } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">Reports and analytics coming soon</p>
      </div>
    </div>
  );
}