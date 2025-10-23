function find_word_location(grid, word) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function: DFS search from (i,j) for word starting at index
  function dfs(i, j, index, path) {
    if (index === word.length) return path.slice(); // found word

    // boundary check
    if (i < 0 || i >= rows || j < 0 || j >= cols) return null;
    if (grid[i][j] !== word[index]) return null;

    path.push([i, j]);

    // Move Right
    let right = dfs(i, j + 1, index + 1, path);
    if (right) return right;

    // Move Down
    let down = dfs(i + 1, j, index + 1, path);
    if (down) return down;

    path.pop(); // backtrack
    return null;
  }

  // Try starting from every cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const result = dfs(i, j, 0, []);
      if (result) return result;
    }
  }

  return null; // not found
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

const grid2 = [['a']];

console.log(find_word_location(grid1, "catnip")); // [[1,1],[1,2],[1,3],[2,3],[3,3],[3,4]]
console.log(find_word_location(grid1, "cccc"));   // [[0,0],[1,0],[1,1],[2,1]] OR [[0,0],[0,1],[1,1],[2,1]]
console.log(find_word_location(grid1, "s"));      // [[5,0]]
console.log(find_word_location(grid1, "ant"));    // [[0,4],[1,4],[2,4]] OR [[0,4],[1,4],[1,5]]
console.log(find_word_location(grid1, "aoi"));    // [[4,5],[5,5],[6,5]]
console.log(find_word_location(grid1, "ki"));     // [[6,4],[6,5]]
console.log(find_word_location(grid1, "aaoo"));   // [[5,2],[5,3],[5,4],[5,5]]
console.log(find_word_location(grid1, "ooo"));    // [[4,1],[4,2],[4,3]]
console.log(find_word_location(grid2, "a"));      // [[0,0]]
