// Utility function to check if a form's deadline has expired
export const isFormExpired = (endDate: string): boolean => {
  // Handle "To be announced" or empty dates
  if (!endDate || endDate === "To be announced" || endDate === "Coming Soon") {
    return false;
  }

  try {
    // Parse the date string (format: "14th March '2026" or "January 30, 2026")
    const dateStr = endDate
      .replace(/st|nd|rd|th/g, '') // Remove ordinal suffixes
      .replace(/'/g, ''); // Remove apostrophes

    const parsedDate = new Date(dateStr);
    
    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      return false;
    }

    // Set the deadline to end of day (23:59:59)
    parsedDate.setHours(23, 59, 59, 999);

    // Get current date
    const now = new Date();

    // Return true if current date is past the deadline
    return now > parsedDate;
  } catch (error) {
    console.error('Error parsing date:', endDate, error);
    return false;
  }
};

// Alternative: Update form status based on deadline
export const getFormStatus = (endDate: string, currentStatus: string): string => {
  if (currentStatus === "Closed") {
    return "Closed";
  }

  if (isFormExpired(endDate)) {
    return "Closed";
  }

  return currentStatus;
};