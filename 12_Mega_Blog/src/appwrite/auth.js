import config from "../config/config";
import { Client, Account, ID } from 'appwrite';

export class AuthService{
    client = new Client();
    account;


    // Now, if we have to change backend service, currently using appwrite, for example need to change to firebase or something, then just need to chnge this constructor function, 'createAccount()' method will remain same as in that we are taking same inputs which are required;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            // using ID.unique() --> to generate unique ids as 'account.create' method expects atleast 3 parameters in the order (user_id, email, '')

            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                // call another method, if userAccount created successfully, then make user login by default --> used 'login()' function to make user login afetr account cration

                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Method, to check weather a user has logged in or not
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);
        }
        // If some issue occurs in try catch block, then to prevent it from breaking, returned null here.
        return null;
    }

    async logout({}){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);
        }
    }
}

const authService = new AuthService();

export default authService