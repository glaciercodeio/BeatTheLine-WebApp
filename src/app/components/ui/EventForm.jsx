// EventForm.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function EventForm({ newRowForm, handleSubmit, onCancel }) {
  return (
    <div>
      <FormProvider {...newRowForm}>
        <form
          onSubmit={newRowForm.handleSubmit(handleSubmit)}
          className="grid grid-cols-2 gap-4 mt-4"
        >
          <FormField
            name="sportsbook"
            rules={{ required: "Sportsbook is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sportsbook</FormLabel>
                <FormControl>
                  <Input placeholder="Sportsbook" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="betId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bet ID</FormLabel>
                <FormControl>
                  <Input placeholder="Bet ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="sport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sport</FormLabel>
                <FormControl>
                  <Input placeholder="Sport" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Event Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Date</FormLabel>
                <FormControl>
                  <Input placeholder="Event Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="marketName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Market Name</FormLabel>
                <FormControl>
                  <Input placeholder="Market Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="betName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bet Name</FormLabel>
                <FormControl>
                  <Input placeholder="Bet Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="Position" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="odds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Odds</FormLabel>
                <FormControl>
                  <Input placeholder="Odds" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="suggestedBetToWin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suggested Bet to Win</FormLabel>
                <FormControl>
                  <Input placeholder="Suggested Bet to Win" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="suggestedBetSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suggested Bet Size</FormLabel>
                <FormControl>
                  <Input placeholder="Suggested Bet Size" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="stake"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stake</FormLabel>
                <FormControl>
                  <Input placeholder="Stake" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="potentialPayout"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Potential Payout</FormLabel>
                <FormControl>
                  <Input placeholder="Potential Payout" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="projectedEV"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Projected EV %</FormLabel>
                <FormControl>
                  <Input placeholder="Projected EV %" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="convertedWin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Converted Win %</FormLabel>
                <FormControl>
                  <Input placeholder="Converted Win %" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag (1)</FormLabel>
                <FormControl>
                  <Input placeholder="Tag (1)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="helperColumn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Helper Column</FormLabel>
                <FormControl>
                  <Input placeholder="Helper Column" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="result"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Result</FormLabel>
                <FormControl>
                  <Input placeholder="Result" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button variant="secondary" type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
