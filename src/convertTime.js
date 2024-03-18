export const convertTime = (totalTime) => {
  const hours = Math.floor(totalTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalTime % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
export default convertTime;
