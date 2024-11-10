export interface IFilters {
    search?: string;
    order?: 'asc' | 'desc';
    orderBy?: string;
    limit?: number;
    after?: string;
}
