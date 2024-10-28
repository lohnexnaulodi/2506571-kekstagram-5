function isMeetingWithinWorkingHours(startOfDay, endOfDay, meetingStart, duration) {
  function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const startDayMinutes = timeToMinutes(startOfDay);
  const endDayMinutes = timeToMinutes(endOfDay);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return startDayMinutes <= meetingStartMinutes && meetingEndMinutes <= endDayMinutes;
}

(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90));
(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));
(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90));
(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));
(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900));
