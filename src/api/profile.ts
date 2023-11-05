import axios from "axios";
import { IDataAbout, IDataContacts, IDataSkill } from "../models/IDataProfile";
import { TargetJson } from "../models/TargetJson";

const baseURL: string = '/business-card/'

export const getProfileContacts = async () => {
    return axios.get<IDataContacts[]>(`${baseURL}${TargetJson.contacts}`)
}

export const getProfileAbout = async () => {
    return axios.get<IDataAbout[]>(`${baseURL}${TargetJson.about}`)
}

export const getProfileSkill = async () => {
    const language = axios.get<IDataSkill[]>(`${baseURL}${TargetJson.language}`)
    const libraries = axios.get<IDataSkill[]>(`${baseURL}${TargetJson.libraries}`)
    const other =  axios.get<IDataSkill[]>(`${baseURL}${TargetJson.other}`) 
    return ({language, libraries, other})
}