export interface Category {
  id: number;
  name: string;
  image:string;
}
export interface AuthToken {
  token: string;
}

export class LoginResponse {
  token: string;
}
// export const categories =[
//   {
//     id:1,
//     category:'Laptops',
//     image:'https://blogs.windows.com/uploads/2015/10/Surface-family-870x830.jpg'
//   },
//   {
//     id: 2,
//     category: "New Gen Laptops",
//     image: 'https://magazun.com/images/detailed/441/4_9485fe4e-f7fe-11ea-a24e-7085c2a4485b.jpg'
//   },
//   {
//     id:3,
//     category:"Phone",
//     image:'https://on.notist.cloud/slides/deck2434/large-60.jpg'
//   },
//   {
//     id:4,
//     category:"TV",
//     image:'https://images-na.ssl-images-amazon.com/images/I/41BS3eLBuPL._AC_.jpg'
//   }
// ]
