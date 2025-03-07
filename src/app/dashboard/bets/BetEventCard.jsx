import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  DollarSignIcon,
  PercentIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  Ban,
  PlusIcon,
} from "lucide-react";

export default function BetEventCard({ event }) {
  const [expanded, setExpanded] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  // States for the form fields inside the popover
  const [formData, setFormData] = useState({
    sportsbook: event.sportsbook || "",
    odds: event.odds || "",
    betSize: event.suggestedBetSize || "",
  });

  // Toggle the expanded state when clicking on the card or a button.
  const handleToggle = () => setExpanded(!expanded);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here.
    // For example, update the event with the new values:
    console.log("Updated Data:", formData);
    // Then close the popover:
    setOpenPopover(false);
  };

  return (
    <div className="bg-slate-950 border-slate-800 rounded-xl">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="font-semibold text-slate-100">{event.sport}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Ban className="w-4 h-4" />
          </Button>
          <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={8}
              className="w-auto min-w-[180px] max-w-[240px] p-4 bg-slate-900 border border-slate-700 rounded shadow-md"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="sportsbook"
                    className="text-sm font-medium text-slate-200"
                  >
                    Sportsbook
                  </label>
                  <input
                    type="text"
                    id="sportsbook"
                    name="sportsbook"
                    value={formData.sportsbook}
                    onChange={handleInputChange}
                    className="rounded-md border border-slate-600 bg-slate-800 p-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="odds"
                    className="text-sm font-medium text-slate-200"
                  >
                    Odds
                  </label>
                  <input
                    type="number"
                    id="odds"
                    name="odds"
                    value={formData.odds}
                    onChange={handleInputChange}
                    className="rounded-md border border-slate-600 bg-slate-800 p-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="betSize"
                    className="text-sm font-medium text-slate-200"
                  >
                    Bet Size
                  </label>
                  <input
                    type="number"
                    id="betSize"
                    name="betSize"
                    value={formData.betSize}
                    onChange={handleInputChange}
                    className="rounded-md border border-slate-600 bg-slate-800 p-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="text-sm">
                    Submit
                  </Button>
                </div>
              </form>
            </PopoverContent>
          </Popover>
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
      <Card
        className="bg-[#141716] border-slate-800 cursor-pointer"
        onClick={handleToggle}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-bold text-slate-100">
                {event.betName}
              </CardTitle>
              <p className="text-sm text-slate-400">{event.marketName}</p>
            </div>
            <Badge variant={"outline"} className={""}>
              {event.sportsbook}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {/* Data always visible */}
            <div>
              <p className="text-sm text-slate-400">Event</p>
              <p className="font-semibold text-slate-200">{event.eventName}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Odds</p>
              <p className="font-semibold text-slate-200">
                {event.odds > 0 ? `+${event.odds}` : event.odds}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <DollarSignIcon className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-sm text-slate-400">Suggested Bet Size</p>
                <p className="font-semibold text-slate-200">
                  {event.suggestedBetSize}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-2 text-slate-300">
              <CalendarIcon className="h-4 w-4" />
              <span>{new Date(event.eventDate).toLocaleDateString()}</span>
            </div>

            {/* Conditionally render additional details if expanded */}
            {expanded && (
              <>
                <div>
                  <p className="text-sm text-slate-400">Bet ID</p>
                  <p className="font-semibold text-slate-200">{event.betId}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Position</p>
                  <p className="font-semibold text-slate-200">
                    {event.position}
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
                  <PercentIcon className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-400">Projected EV</p>
                    <p className={`font-semibold `}>{event.projectedEV}</p>
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
    </div>
  );
}
