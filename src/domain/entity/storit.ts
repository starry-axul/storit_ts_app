export interface Storit {
    id: string;
    public: boolean;
    userID: boolean;
    data: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Notion {
    getPage(pageId: string, values?: object | undefined): Promise<any>;
}