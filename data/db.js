

//Table layout

// CREATE TABLE info (
//     day VARCHAR(10)  NOT NULL,
//     author VARCHAR(20)  NOT NULL,
//     title VARCHAR(50)  NOT NULL,
//     link VARCHAR(100)  NOT NULL,
//     difficulty VARCHAR (10)  NOT NULL
//   )

//Example
// day: "day 1",
// title: "Construct Quad Tree",
// link: "https://leetcode.com/problems/construct-quad-tree/submissions/906102169/",
// difficulty: "medium",
// author: "Rascal"

//Insert
// INSERT INTO Leetcode_info(day, author, title, link, difficulty)
// VALUES ('day 2', 'Rascal', 'Find Duplicate Subtrees (binary tree)', 'https://leetcode.com/problems/find-duplicate-subtrees/submissions/906703642', 'medium');




module.exports={db}
const query = {
    text: 'SELECT * FROM info'
  };
  
  pool.query(query)
    .then(res => {
      console.log(res.rows); // logs all rows in the table
      pool.end(); // close the connection pool
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      pool.end(); // close the connection pool
    });





