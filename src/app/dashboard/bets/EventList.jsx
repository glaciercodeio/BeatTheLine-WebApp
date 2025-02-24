import { Card } from "@/components/ui/card";
import { LuCalendar, LuInfo, LuDollarSign, LuPercent } from "react-icons/lu";

export const EventCard = ({ event }) => {
  return (
    <Card className="p-6 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Header Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LuInfo className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">{event.sportsbook}</h3>
            <span className="text-sm text-muted-foreground">
              ID: {event.betId}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LuCalendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {new Date(event.eventDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-2">
          <h4 className="font-medium text-lg">{event.eventName}</h4>
          <div className="text-sm text-muted-foreground">
            <p className="flex gap-2">
              <span>{event.sport}</span>
              <span>•</span>
              <span>{event.marketName}</span>
            </p>
            <p>
              Bet: {event.betName} ({event.position})
            </p>
          </div>
        </div>

        {/* Financials */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Odds</span>
            <span className="font-medium bg-muted px-3 py-1 rounded-full">
              {event.odds}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Stake</span>
            <span className="font-medium">
              <LuDollarSign className="inline mr-1 h-4 w-4" />
              {Number(event.stake).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Potential Payout</span>
            <span className="font-medium text-green-600">
              <LuDollarSign className="inline mr-1 h-4 w-4" />
              {Number(event.potentialPayout).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Analytics */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LuPercent className="h-4 w-4 text-blue-500" />
            <span>EV: {event.projectedEV}%</span>
          </div>
          <div className="flex items-center gap-2">
            <LuPercent className="h-4 w-4 text-purple-500" />
            <span>Win: {event.convertedWin}%</span>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 text-xs bg-muted rounded-full">
              {event.tag}
            </span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                event.result === "Win"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {event.result}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="space-y-1">
          <p className="text-muted-foreground">
            Suggested Bet to Win:{" "}
            <span className="font-medium text-foreground">
              ${Number(event.suggestedBetToWin).toFixed(2)}
            </span>
          </p>
          <p className="text-muted-foreground">
            Suggested Size:{" "}
            <span className="font-medium text-foreground">
              ${Number(event.suggestedBetSize).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">
            Helper:{" "}
            <span className="font-medium text-foreground">
              {event.helperColumn}
            </span>
          </p>
          <p className="text-muted-foreground">
            Market:{" "}
            <span className="font-medium text-foreground">
              {event.marketName}
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export const EventList = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((event) => (
        <EventCard key={event.betId} event={event} />
      ))}
    </div>
  );
};
