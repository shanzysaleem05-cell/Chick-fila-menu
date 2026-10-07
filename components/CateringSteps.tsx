import { Utensils, Users, Truck } from "lucide-react";

export default function CateringSteps() {
  const steps = [
    {
      icon: Utensils,
      title: "Choose your items",
      description: "Browse our catering menu to find the perfect trays, meals, and sides for your event."
    },
    {
      icon: Users,
      title: "Pick size & quantity",
      description: "Select the right size tray or input your headcount for packaged meals."
    },
    {
      icon: Truck,
      title: "Pickup or delivery",
      description: "Schedule a convenient pickup time at your local restaurant or opt for delivery where available."
    }
  ];

  return (
    <div className="bg-[#FAF7F2] py-16 border-y border-[#EAE3D5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display font-bold text-3xl text-[#1A1A1A] mb-12">
          How Chick-fil-A Catering Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#DD0033]/10 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-[#DD0033]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-3">
                {idx + 1}. {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
