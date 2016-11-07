//static variables
var lastId:number = 0;

export class imageModel
{
   title: string;
   url: string;
   id:number;

   constructor(title:string,url:string)
   {
      this.title = title;
      this.url = url;
      this.id = lastId;
      lastId += 1;
   }

   getTitle():string{return this.title;}
   getUrl():string{return this.url;}
}
