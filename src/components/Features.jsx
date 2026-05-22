import {
  User,
  Calendar,
  BarChart3,
  Database,
  Activity,
  FileText,
} from "lucide-react";

function Features() {
  const data = [
    {
      title: "Patient Management",
      icon: <User size={26} />,
    },
    {
      title: "Appointment Scheduling",
      icon: <Calendar size={26} />,
    },
    {
      title: "Revenue Analytics",
      icon: <BarChart3 size={26} />,
    },
    {
      title: "Inventory Management",
      icon: <Database size={26} />,
    },
    {
      title: "Patient Screening",
      icon: <Activity size={26} />,
    },
    {
      title: "Medical Records",
      icon: <FileText size={26} />,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold leading-tight">
            <span className="text-[#30c8a4]">
              Everything You Need to Manage
            </span>

            <br />

            <span className="text-[#f4b234]">
              Healthcare Operations
            </span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto">
            From patient registration to discharge,
            AYUSH provides comprehensive tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full border border-gray-200 p-8 flex items-center gap-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#4a90e2]">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  Comprehensive management system.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;