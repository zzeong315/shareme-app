export function timeChanger(time : string, timeType: string) {
  if (timeType === "timeOnly") {
    let today = new Date().toLocaleDateString();
    let timeDate = new Date(time).toLocaleDateString();
    if (today === timeDate) {
      return new Date(time).toLocaleTimeString().slice(0, -3);
    } else {
      return new Date(time).toLocaleDateString().slice(0, -1).replace(/\. /gi, '-');
    }
  }

  if (timeType === "allDate") {
    let showAllDate = new Date(time).toLocaleTimeString().slice(0, -3) + " " + new Date(time).toLocaleDateString().slice(0, -1).replace(/\. /gi, '-');
    return showAllDate;
  } 
}

