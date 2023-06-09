export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}


interface movieCreationDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;



}

export interface landingPageDTO {

    inTheaters?: movieDTO[];
    upcomingRelease?: movieDTO[];

}