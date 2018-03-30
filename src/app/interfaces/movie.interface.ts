export interface IMovie {
    id: string;
    title: string;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
    vote_count?: number;
    popularity?: number;
    release_date: string;
    overview: string;
    vote_average?: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}