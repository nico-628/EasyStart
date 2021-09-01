const userLang = (navigator.language || navigator.userLanguage) ?? "en-US";

const getDateTime = (format) => {
  let completeDate = new Date();
  let dateTime = new Intl.DateTimeFormat(userLang, format).format(completeDate);
  return dateTime;
}

const updateDateTime = () => {
  currentTime.innerHTML = getDateTime({
    hour: "numeric",
    minute: "numeric",
    hour12: false
  });

  currentDate.innerHTML = getDateTime({
    weekday: "long",
    day: "numeric",
    month: "long"
  });

  setTimeout(updateDateTime, 1000);
}

updateDateTime();