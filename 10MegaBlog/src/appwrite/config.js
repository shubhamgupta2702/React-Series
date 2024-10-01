import conf from "../conf/Conf";
import {Client, Account, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client()
    databases;
    storage;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, context, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                confg.appwriteCollectionId,
                slug,
                {
                    title,
                    context,
                    featuredImage,
                    status,
                    userId
                }

            )
            
        } catch (error) {
            console.log("Appwrite Error: ", error);
            
        }
    }
    async updatePost(slug, {title, context, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    context,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Error: updatePost ", error);
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite Error: deletePost ", error);
            return false
            
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            
        } catch (error) {
            console.log("Appwrite Error: getPost ", error);
            return false
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,    
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite Error: getPosts ", error);
            return false
        }
    }

    // file uploading methods

    async uploadFile(file){
        try {
            return await this,this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Error: uploadFile ", error);
            return false
            
        }
    }
  
    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId, 
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Error: deleteFile ", error);
            return false
            
        }
    }
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId, 
        )
    }
}



const service = new Service()
export default service;