export const returnActiveTabs = (value) => {
  switch (value) {
    case "today":
      return 1;
    case "protocols":
      return 3;
    case "announcements":
      return 4;
    case "messages":
      return 5;
    case "ddashboard":
      return 6;
    case "reports":
      return 7;
    case "search":
      return 8;
    default:
      break;
  }
};
