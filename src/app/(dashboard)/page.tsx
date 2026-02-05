import { SalesOverview } from "@/features/dashboard/components/sales-overview/sales-overview";
import { WidgetCard } from "@/features/dashboard/components/widgets/widget-card";
import { PropertyCard } from "@/features/dashboard/components/properties/property-card";
import { PROPERTIES } from "@/features/dashboard/constants";

const USER_NAME = "Ahmed";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome, {USER_NAME}</h1>
      <div className="flex flex-col xl:flex-row gap-6 mb-8">
        <div className="xl:w-[65%] h-full">
          <SalesOverview />
        </div>

        <div className="xl:w-[35%] flex flex-col gap-6">
          <div className="flex-1">
            <WidgetCard
              title="Listings Overview"
              icon="/icons/listing-overview.svg"
              stats={[
                { label: "Total", value: "1.8k" },
                { label: "Active", value: "80" },
                { label: "Archived", value: "1k" },
              ]}
            />
          </div>
          <div className="flex-1">
            <WidgetCard
              title="Users Overview"
              icon="/icons/users-overview.svg"
              stats={[
                { label: "Total", value: "20.7k" },
                { label: "Riders", value: "8.5k" },
                { label: "Subscribers", value: "7.5k" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTIES.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>
    </>
  );
}
