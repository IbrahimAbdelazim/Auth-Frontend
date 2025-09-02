export type CustomError = {
  response: {
    data: {
      error: string | { message: string };
    };
  };
};

type Toast = {
  error: (msg: string) => void;
};

export const ErrorDisplay = (error: CustomError, toast: Toast) => {
  const err = error.response?.data?.error;
  const message = typeof err === "string" ? err : err.message;
  toast.error(message || "Failed to create account");
};
