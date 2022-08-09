import data from "./data.json";

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
    static getLinks() {
        return data.links;
    }
}

export default DataUtil;