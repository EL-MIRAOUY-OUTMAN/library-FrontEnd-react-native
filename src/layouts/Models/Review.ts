export class Review {
    id: number;
    userEmail: string;
    date: string;
    rating: number;
    bookid: number;
    description: string;
    constructor(
        id: number,
        userEmail: string,
        date: string,
        rating: number,
        bookid: number,
        description: string,
    ) {
        this.id = id,
        this.userEmail = userEmail, 
        this.bookid = bookid, 
        this.date = date,
         this.rating = rating, 
        this.description = description
    }

}
export default Review;