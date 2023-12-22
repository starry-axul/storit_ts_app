export interface IPaginationMeta {
    limit: number;
    currentPage: number;
    total: number;
}

export type MetaTypes = IPaginationMeta | null;
