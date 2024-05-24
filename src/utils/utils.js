function getFutureTimeUTC4Plus2Hours() {
    const currentTime = new Date();
  
    const utc4Offset = -4 * 60;
    const utc4Time = new Date(currentTime.getTime() + (currentTime.getTimezoneOffset() + utc4Offset) * 60 * 1000);
  
    utc4Time.setHours(utc4Time.getHours() + 2);
  
    const hours = String(utc4Time.getHours()).padStart(2, '0');
    const minutes = String(utc4Time.getMinutes()).padStart(2, '0');
  
    return `${hours}:${minutes}`;
  }

  module.exports = { getFutureTimeUTC4Plus2Hours };