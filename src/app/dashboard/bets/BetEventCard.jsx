import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  DollarSignIcon,
  PercentIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "lucide-react";

export default function BetEventCard({ event }) {
  const [expanded, setExpanded] = useState(false);

  // Toggle the expanded state when clicking on the card or a button.
  const handleToggle = () => setExpanded(!expanded);

  return (
    <Card
      className="bg-[#1E2724] border-slate-800 cursor-pointer"
      onClick={handleToggle}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold text-slate-100">
              {event.eventName}
            </CardTitle>
            <p className="text-sm text-slate-400">
              {event.sport} - {event.marketName}
            </p>
          </div>
          <Badge
            variant={
              event.result === "Won"
                ? "outline"
                : event.result === "Lost"
                ? "destructive"
                : "secondary"
            }
            className={event.result === "Won" ? "bg-green-600" : ""}
          >
            {event.result}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Data always visible */}
          <div className="col-span-2 flex items-center gap-2 text-slate-300">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(event.eventDate).toLocaleDateString()}</span>
          </div>

          {/* Conditionally render additional details if expanded */}
          {expanded && (
            <>
              <div>
                <p className="text-sm text-slate-400">Sportsbook</p>
                <p className="font-semibold text-slate-200">
                  {event.sportsbook}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Bet ID</p>
                <p className="font-semibold text-slate-200">{event.betId}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Bet Name</p>
                <p className="font-semibold text-slate-200">{event.betName}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Position</p>
                <p className="font-semibold text-slate-200">{event.position}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Odds</p>
                <p
                  className={`font-semibold ${
                    event.odds > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {event.odds > 0 ? `+${event.odds}` : event.odds}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Stake</p>
                <p className="font-semibold text-slate-200">{event.stake}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-slate-400">Potential Payout</p>
                <p className="font-semibold text-green-500">
                  {event.potentialPayout}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon className="h-4 w-4 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Suggested Bet Size</p>
                  <p className="font-semibold text-slate-200">
                    {event.suggestedBetSize}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PercentIcon className="h-4 w-4 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Projected EV</p>
                  <p
                    className={`font-semibold ${
                      event.projectedEV > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {event.projectedEV}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {event.convertedWin > 50 ? (
                  <TrendingUpIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDownIcon className="h-4 w-4 text-red-500" />
                )}
                <div>
                  <p className="text-sm text-slate-400">Converted Win %</p>
                  <p className="font-semibold text-slate-200">
                    {event.convertedWin}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">Tag</p>
                <Badge variant="outline" className="mt-1">
                  {event.tag}
                </Badge>
              </div>
            </>
          )}
        </div>

        {/* Conditionally render notes if available and expanded */}
        {expanded && event.helperColumn && (
          <div className="mt-4">
            <p className="text-sm text-slate-400">Notes</p>
            <p className="text-slate-300">{event.helperColumn}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
