import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from 'appwrite';

export class DatabaseService{
    client = new Client();
    databases;
    // bucket ---> storage 
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.databases = new Storage(this.client);
    }

    // Method to create a post and save data in DB
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            // taking 'slug' as unique ID(document id) in createDocument() method
            return await this.databases.createDocument(     
                conf.appwriteDbId, 
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);
        }
    }

    // method to update a post and save content in DB 
    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            // taking 'slug' as unique ID(document id) in updateDocument() method
            return await this.databases.updateDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
                {
                     title, 
                     content,
                     featuredImage,
                     status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);
        }
    }

    // Method to delete a post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug
            )
            // returning true, to indicate if post is deleted 
            return true;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);
            // returning false, to indicate if post is not deleted 
            return false;
        }
    }

    // Method to get a post using the document ID --> slug
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId, 
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);

            // returning false so that if no post is found or available, then we can handle that situation gracefully
            return false;
        }
    }

    // Method to get the list of all documents available in DB -> only those posts which are 'ACTIVE'

    // --- Now here we use the queries to query from DB to get only those posts which are active, we can similarily query on different conditions as well 
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                queries
                // instead of writing queries in parameter, we can also write here in this arguments like below:
                // [
                //     Query.equal("status", "active")
                // ]
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error". error);
            return false;
        }
    }

    // --------------- file upload service --------------

    // Method to upload file into storage/bucket(DB) 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
             console.log("Appwrite service :: getCurrentUser :: error". error);
             return false;
        }
    }

    // Method to delete file from Storage/Bucket(DB)
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
             console.log("Appwrite service :: getCurrentUser :: error". error);
             return false;
        }
    }

    // Method to get the preview of the file
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const dbService = new DatabaseService();

export default dbService;