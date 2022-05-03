import { ModalBody } from "react-bootstrap";
import httpService from "./httpService";
const apiEndPoint = "bruger/";

export async function getBruger() {
  const { data } = await httpService.get(apiEndPoint);
  return data;
}

export async function getBrugerById(id) {
  const { data } = await httpService.get(`${apiEndPoint}/${id}`);
  return data;
}

export async function createBruger(bruger) {
  if (bruger.id) {
    const body = { ...bruger };
    delete body.id;
    return httpService.put(apiEndPoint + bruger.id, body);
  }
  return httpService.post(apiEndPoint, bruger);
}
