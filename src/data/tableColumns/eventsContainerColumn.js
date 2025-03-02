import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuChevronsUpDown } from "react-icons/lu";

const columnHelper = createColumnHelper();

export const EventsContainerColumns = [
  columnHelper.accessor("sportsbook", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Sportbook
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.getValue(),
    id: "sportsbook",
    filterTitle: "Sportbook",
  }),
  columnHelper.accessor("betId", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Bet ID
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.getValue(),
    id: "betId",
    filterTitle: "Bet ID",
  }),
  columnHelper.accessor("sport", {
    header: "Sport",
    cell: (info) => info.getValue(),
    id: "sport",
  }),
  columnHelper.accessor("eventName", {
    header: "Event Name",
    cell: (info) => info.getValue(),
    id: "eventName",
  }),
  columnHelper.accessor("eventDate", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Event Date
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.getValue(),
    id: "eventDate",
    filterTitle: "Event Date",
  }),
  columnHelper.accessor("marketName", {
    header: "Market Name",
    cell: (info) => info.getValue(),
    id: "marketName",
  }),
  columnHelper.accessor("betName", {
    header: "Bet Name",
    cell: (info) => info.getValue(),
    id: "betName",
  }),
  columnHelper.accessor("position", {
    header: "Position",
    cell: (info) => info.getValue(),
    id: "position",
  }),
  columnHelper.accessor("odds", {
    header: "Odds",
    cell: (info) => info.getValue(),
    id: "odds",
  }),
  columnHelper.accessor("suggestedBetToWin", {
    header: "Suggested Bet to Win",
    cell: (info) => info.getValue(),
    id: "suggestedBetToWin",
  }),
  columnHelper.accessor("suggestedBetSize", {
    header: "Suggested Bet Size",
    cell: (info) => info.getValue(),
    id: "suggestedBetSize",
  }),
  columnHelper.accessor("stake", {
    header: "Stake",
    cell: (info) => info.getValue(),
    id: "stake",
  }),
  columnHelper.accessor("potentialPayout", {
    header: "Potential Payout",
    cell: (info) => info.getValue(),
    id: "potentialPayout",
  }),
  columnHelper.accessor("projectedEV", {
    header: "Projected EV %",
    cell: (info) => info.getValue(),
    id: "projectedEV",
  }),
  columnHelper.accessor("convertedWin", {
    header: "Converted Win %",
    cell: (info) => info.getValue(),
    id: "convertedWin",
  }),
  columnHelper.accessor("tag", {
    header: "Tag (1)",
    cell: (info) => info.getValue(),
    id: "tag",
  }),
  columnHelper.accessor("helperColumn", {
    header: "Helper Column",
    cell: (info) => info.getValue(),
    id: "helperColumn",
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: (info) => info.getValue(),
    id: "result",
  }),
];
