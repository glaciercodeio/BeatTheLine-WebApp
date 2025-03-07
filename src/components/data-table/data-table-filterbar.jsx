import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  PopoverTSX,
  PopoverTriggerTSX,
  PopoverContentTSX,
} from "@/components/ui/popovertsx";
import {
  CommandTSX,
  CommandGroupTSX,
  CommandItemTSX,
  CommandListTSX,
  CommandEmptyTSX,
} from "@/components/ui/commandtsx";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

/**
 * availableFilters is an array of filter objects that contains:
 * - id: the column id (or key) to filter on
 * - title: label for the filter button
 * - options: the options to use in the faceted filter
 */
export default function DataTableFilterBar({ table, availableFilters }) {
  // activeFilters is an array of filter objects that have been added.
  const [activeFilters, setActiveFilters] = useState([]);

  // Whether the add filter popover is open
  const [open, setOpen] = useState(false);

  // Filter out available filters that are already active.
  const filtersToAdd = availableFilters.filter(
    (filter) => !activeFilters.find((active) => active.id === filter.id)
  );

  const addFilter = (filter) => {
    setActiveFilters((prev) => [...prev, filter]);
    setOpen(false);
  };

  const removeFilter = (filterId) => {
    // Remove filter UI and also clear the filter value from the table.
    setActiveFilters((prev) => prev.filter((filter) => filter.id !== filterId));
    table.getColumn(filterId)?.setFilterValue(undefined);
  };

  return (
    <div className="m-2">
      <div className="flex flex-wrap items-center gap-2">
        <PopoverTSX open={open} onOpenChange={setOpen}>
          <PopoverTriggerTSX asChild>
            <Button variant="outline" size="sm">
              Add Filter
            </Button>
          </PopoverTriggerTSX>
          <PopoverContentTSX className="w-[200px] p-0">
            <CommandTSX>
              <CommandListTSX>
                <CommandEmptyTSX>No filters available</CommandEmptyTSX>
                <CommandGroupTSX>
                  {filtersToAdd.map((filter, index) => (
                    <CommandItemTSX
                      key={`${filter.id}-${index}`}
                      onSelect={() => addFilter(filter)}
                    >
                      {filter.title}
                    </CommandItemTSX>
                  ))}
                </CommandGroupTSX>
              </CommandListTSX>
            </CommandTSX>
          </PopoverContentTSX>
        </PopoverTSX>
        {activeFilters.map((filter) => (
          <div key={filter.id} className="flex items-center space-x-2">
            <DataTableFacetedFilter
              column={table.getColumn(filter.id)}
              title={filter.title}
              options={filter.options}
            />
            <Button
              size="icon"
              variant="destructive"
              onClick={() => removeFilter(filter.id)}
            >
              &times;
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
