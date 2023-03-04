import data from "../user/data.json";

class DataUtil {
  static getUser() {
    return data.user;
  }
  static getHome() {
    return data.home;
  }
  static getResume() {
    return data.resume;
  }
  static getProjects() {
    return data.projects;
  }
  static getCerts() {
    return data.certifications;
  }
  static getLinks() {
    return data.links;
  }
}

const useUserData = () => DataUtil;

export default useUserData;