import {
  Shield,
  Zap,
  ClipboardCheck,
} from "lucide-react";

function CoreValues() {
  return (
    <section className="bg-[#06b86f] py-20 text-white">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold mb-14">
          Our Core Values
        </h2>

        <div className="space-y-10">

          <div className="flex gap-6">
            <Shield size={40} />
            <div>
              <h3 className="text-2xl font-bold">
                Security First
              </h3>

              <p className="mt-2 text-white/80">
                HIPAA-compliant infrastructure with enterprise-grade security.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Zap size={40} />

            <div>
              <h3 className="text-2xl font-bold">
                Innovation Driven
              </h3>

              <p className="mt-2 text-white/80">
                Cutting-edge technology solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <ClipboardCheck size={40} />

            <div>
              <h3 className="text-2xl font-bold">
                Patient-Centered
              </h3>

              <p className="mt-2 text-white/80">
                Every feature designed with patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;