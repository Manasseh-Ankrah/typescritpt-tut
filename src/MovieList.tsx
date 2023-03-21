import React from "react";

type MovieProps = {
  data: {
    title: string;
    url: string;
    views: number;
    isWatched: boolean;
  }[];
};

// Assigning an interface to an attribute
// type newInterface = {
//   newData: MovieProps["data"];
// };

const MovieList = ({ data }: MovieProps) => {
  console.log(data);

  return (
    // <div>MovieList</div>

    <div>
      {data.map((movie) => {
        return (
          <div>
            Movie Title : {movie.title}
            <br />
            Movie URL : {movie.url}
            <br />
            Movie Views : {movie.views}
            <br />
            Movie Title : {movie.isWatched ? "True" : "False"}
          </div>
        );
      })}
    </div>
  );
};

// const MovieList: React.FC<MovieProps> = ({ data }) => {
//   console.log(data);

//   return (
//     // <div>MovieList</div>

//     <div>
//       {data.map((movie) => {
//         return (
//           <div>
//             Movie Title : {movie.title}
//             <br />
//             Movie URL : {movie.url}
//             <br />
//             Movie Views : {movie.views}
//             <br />
//             Movie Title : {movie.isWatched ? "True" : "False"}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default MovieList;
