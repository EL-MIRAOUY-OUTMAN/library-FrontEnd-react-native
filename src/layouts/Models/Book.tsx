class Book {
        id : number;
        title : String;
        author?: string ;
        description?: string ;
        copies?: number ;
        copiesAvaible?: number ;
        category?: string ;
        img?: string ;
        constructor (id : number,
            title : String,
            author: string ,
            description: string ,
            copies: number ,
            copiesAvaible : number ,
            autcategoryhor: string ,
            img: string )
            {
               this.id =id;
               this.title=title;
               this.author= author ;
               this.description= description ;
               this.copies=copies ;
               this.copiesAvaible=copiesAvaible ;
               this.category=autcategoryhor ;
               this.img=img ; 

        }
}
export default Book;