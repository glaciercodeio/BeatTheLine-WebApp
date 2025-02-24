import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const AccessDenied = ({ message }) => (
  <div className="flex items-center justify-center h-screen">
    <Alert className="max-w-md w-full rounded-md shadow p-6 text-center">
      <AlertCircle className="mx-auto h-6 w-6 mb-2" />
      <AlertTitle className="text-xl font-bold">Access Denied</AlertTitle>
      <AlertDescription>
        {message || "You do not have permission to view this page."}
      </AlertDescription>
    </Alert>
  </div>
);

export default AccessDenied;
