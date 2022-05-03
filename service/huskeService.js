import httpService from "./httpService";
const apiEndPoint = "huskeliste/";
export async function getBruger(BrugerID) {
  console.log(BrugerID);
  return httpService.get(apiEndPoint + "bruger/" + BrugerID);
}
