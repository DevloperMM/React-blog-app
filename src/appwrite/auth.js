import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAcc = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAcc) {
        return this.login({ email, password });
      } else {
        return userAcc;
      }
    } catch (err) {
      console.error("Appwrite :: createAccount :: ", err);
    }

    return null;
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (err) {
      console.error("Appwrite :: login :: ", err);
    }

    return null;
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.error("Appwrite :: getCurrentUser :: ", err);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.error("Appwrite :: logout :: ", err);
    }

    return null;
  }
}

const authService = new AuthService();

export default authService;
