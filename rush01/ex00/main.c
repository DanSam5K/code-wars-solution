
// Create a program that solves the following problem:
// • Given a map of 4x4,place boxes of height 1 to 4 on each available square in a way that every row and column sees the correct number of boxes from each the possible points of view(left/right for rows, up/down for columns).

// • Ex: The box of height 3 will hide the box of height 1 from the left, so we have 3 visible boxes, and only one from the right, because the box of height 4 is hiding everything.

// • diagram of the map:
// Here’s an example of intended input/output for a valid set.
// $./rush-01 "4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 2"|cat-e
// 1 2 3 4$
// 2 3 4 1$
// 3 4 1 2$
// 4 1 2 3$

#include <unistd.h>
#include <stdlib.h>

void ft_putchar(char c)
{
  write(1, &c, 1);
}

void print_grid(int grid[4][4])
{
  int i;
  int j;
  i = 0;
  while (i < 4)
  {
    j = 0;
    while (j < 4)
    {
      ft_putchar(grid[i][j] + '0');
      if (j != 3)
        ft_putchar(' ');
      j++;
    }
    ft_putchar('\n');
    i++;
  }
}

int is_valid_placement(int grid[4][4], int row, int col, int num)
{
  int x;

  x = 0;
  while (x < 4)
  {
    if (grid[row][x] == num || grid[x][col] == num)
      return (0);
    x++;
  }
  return (1);
}

int check_line_visibility(int grid[4], int max_visible)
{
  int visible;
  int max_height;

  visible = 1;
  max_height = grid[0];
  while (visible < 4)
  {
    if (grid[visible] > max_height)
    {
      max_height = grid[visible];
    }
    visible++;
  }
  return (visible == max_visible);
}

int is_valid_grid(int grid[4][4], int *views)
{
  int i;
  int j;

  i = 0;
  while (i < 4)
  {
    if (!check_line_visibility(grid[i], views[i]))
      return (0);
    j = 0;
    while (j < 4)
    {
      if (!check_line_visibility((int[]){grid[0][j], grid[1][j], grid[2][j], grid[3][j]}, views[j]))
        return (0);
      j++;
    }
    i++;
  }
  return (1);
}

int solve(int grid[4][4], int *views, int row, int col)
{
  int num;

  if (row == 4)
  {
    if (is_valid_grid(grid, views))
    {
      print_grid(grid);
      return (1);
    }
    return (0);
  }
  if (col == 4)
  {
    return (solve(grid, views, row + 1, 0));
  }
  if (grid[row][col] != 0)
  {
    return (solve(grid, views, row, col + 1));
  }
  num = 1;
  while (num <= 4)
  {
    if (is_valid_placement(grid, row, col, num))
    {
      grid[row][col] = num;
      if (solve(grid, views, row, col + 1))
        return (1);
      grid[row][col] = 0;
    }
    num++;
  }
  return (0);
}

int main(int argc, char **argv)
{
  int grid[4][4];
  int views[16];
  int i;
  int j;
  int k;

  if (argc != 2)
  {
    write(1, "Error\n", 6);
    return (1);
  }
  i = 0;
  j = 0;
  k = 0;
  while (i < 4)
  {
    j = 0;
    while (j < 4)
    {
      grid[i][j] = argv[1][k] - '0';
      k += 2;
      j++;
    }
    views[i] = argv[1][k] - '0';
    k += 2;
    i++;
  }
  if (!solve(grid, views, 0, 0))
  {
    write(1, "Error\n", 6);
  }
  return (0);
}
