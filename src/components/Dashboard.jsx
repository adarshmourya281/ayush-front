import {
  LayoutDashboard,
  Activity,
  FileText,
  TrendingUp,
  Plus,
} from "lucide-react";

import dashboard from "../assets/comp.png";

function Dashboard() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#2fc7a3]">See </span>

            <span className="text-[#f4b234]">
              AYUSH
            </span>

            <span className="text-[#2fc7a3]">
              {" "}in Action
            </span>
          </h2>

          <p className="mt-6 text-gray-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience the intuitive interface designed specifically
            for healthcare professionals. Every element is crafted
            to improve efficiency and patient care.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-16 border border-gray-200 rounded-[30px] p-3 bg-white shadow-sm">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Active */}
            <button className="bg-[#35c9a5] text-white rounded-2xl py-6 px-6 flex items-center justify-center gap-3 text-lg md:text-2xl font-medium transition">
              <LayoutDashboard size={30} />
              Dashboard
            </button>

            <button className="rounded-2xl py-6 px-6 flex items-center justify-center gap-3 text-lg md:text-2xl font-medium text-black hover:bg-gray-100 transition">
              <Activity
                size={30}
                className="text-[#7da0dc]"
              />
              Patient Screening
            </button>

            <button className="rounded-2xl py-6 px-6 flex items-center justify-center gap-3 text-lg md:text-2xl font-medium text-black hover:bg-gray-100 transition">
              <FileText
                size={30}
                className="text-[#7da0dc]"
              />
              Medical Records
            </button>

            <button className="rounded-2xl py-6 px-6 flex items-center justify-center gap-3 text-lg md:text-2xl font-medium text-black hover:bg-gray-100 transition">
              <TrendingUp
                size={30}
                className="text-[#7da0dc]"
              />
              Revenue Analytics
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="relative mt-24">

          {/* Floating Elements */}
          <div className="absolute -top-8 left-4 text-[#f4b234]">
            <Plus size={45} strokeWidth={3} />
          </div>

          <div className="absolute top-0 right-52 w-8 h-8 bg-[#0cb5b5] rounded-full"></div>

          <div className="absolute top-32 -right-6 w-16 h-16 border-[6px] border-[#9de4d1] rounded-full"></div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-black">
              Complete Healthcare Dashboard
            </h3>

            <p className="mt-6 text-gray-500 text-lg md:text-2xl max-w-5xl mx-auto leading-relaxed">
              Get a comprehensive view of your healthcare facility
              with real-time metrics, patient appointments,
              and operational insights all in one place.
            </p>
          </div>

          {/* Image */}
          <div className="mt-20 rounded-[50px] overflow-hidden border-[8px] border-[#d7dbe2] shadow-xl">
            <img
              src={dashboard}
              alt="dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;