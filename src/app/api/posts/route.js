import { NextResponse } from "next/server";
import connect from "@anwaa/utils/db";
import Post from "@anwaa/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
// import { NextResponse } from "next/server";

// for checking that ourt endpoint is working or not 
// export const GET =  (request) =>{
//   // fetch
//   return new NextResponse('it works',{status:200});
// }
// import connect from "@anwaa/utils/db";
// import Post from "@anwaa/models/Post";


// export const GET = async (request) => {
//   const url = new URL(request.url);

  // const username = url.searchParams.get("username");

  // try {
  //   await connect();
  //   const posts = await Post.find();
    // console.log(posts)
    // return new NextResponse(posts, { status: 200 });

    // const posts = await Post.find(username && { username });

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// export const POST = async (request) => {
//   const body = await request.json();

//   const newPost = new Post(body);

//   try {
//     await connect();

//     await newPost.save();

//     return new NextResponse("Post has been created", { status: 201 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };
