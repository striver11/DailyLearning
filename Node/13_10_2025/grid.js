function find_word_location(grid, word) {
  const rows = grid.length;
  const cols = grid[0].length;
  const wlen = word.length;

  // Helper to check if word exists starting at (r, c)
  function search(r, c, idx, path) {
    // If full word matched
    if (idx === wlen) return path;

    // Out of bounds or mismatch
    if (r >= rows || c >= cols || grid[r][c] !== word[idx]) return null;

    // Include current cell
    path.push([r, c]);

    // Try moving right
    let right = search(r, c + 1, idx + 1, [...path]);
    console.log(right+`  ${[r,c,idx]} right`)
    if (right) return right;
    

    // Try moving down
    let down = search(r + 1, c, idx + 1, [...path]);
    console.log(down+`  ${[r,c,idx]} down`)
    if (down) return down;
    

    // If neither works, return null
    return null;
  }

  // Try starting from each cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === word[0]) {
        const result = search(r, c, 0, []);
        if (result) return result;
      }
    }
  }

  // Word not found
  return [];
}

const grid1 = [
  ['c', 'c', 't', 'n', 'a', 'x'],
  ['c', 'c', 'a', 't', 'n', 't'],
  ['a', 'c', 'n', 'n', 't', 't'],
  ['t', 'n', 'i', 'i', 'p', 'p'],
  ['a', 'o', 'o', 'o', 'a', 'a'],
  ['s', 'a', 'a', 'a', 'o', 'o'],
  ['k', 'a', 'i', 'o', 'k', 'i'],
];

console.log(find_word_location(grid1, "catnip"));
// => [ [1,1], [1,2], [1,3], [2,3], [3,3], [3,4] ]

// console.log(find_word_location(grid1, "cccc"));
// // Possible: [ [0,0], [1,0], [1,1], [2,1] ] or similar

// console.log(find_word_location(grid1, "s"));
// // => [ [5,0] ]

// console.log(find_word_location(grid1, "ant"));
// // Possible: [ [0,4], [1,4], [2,4] ]

// console.log(find_word_location(grid1, "aoi"));
// // => [ [4,5], [5,5], [6,5] ]

// console.log(find_word_location(grid1, "ki"));
// // => [ [6,4], [6,5] ]

// console.log(find_word_location(grid1, "aaoo"));
// // => [ [5,2], [5,3], [5,4], [5,5] ]

// console.log(find_word_location(grid1, "ooo"));
// // => [ [4,1], [4,2], [4,3] ]

// const grid2 = [['a']];
// console.log(find_word_location(grid2, "a"));
// // => [ [0,0] ]
